import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const baseURL = "https://week12-api-1cc7.onrender.com/api";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // API에서 퀴즈 문제 가져오기
    useEffect(() => {
        axios.get(`${baseURL}/questions`)
            .then((response) => {
                console.log("API 응답:", response.data);
                
                if (Array.isArray(response.data)) {
                    setQuestions(response.data);
                    setAnswers(response.data.map((q) => ({ id: q.id, answer: ""})));
                } else {
                    setError("API에서 반환된 데이터가 배열 형식이 아닙니다.");
                }
            })
            .catch((error) => {
                console.error("문제 가져오기 실패:", error);
                setError("퀴즈 문제를 불러오지 못했습니다.");                
            });                
    }, []);

    // 답변 저장
    const saveAnswers = (id, answer) => {
        setAnswers((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, answer } : item
            )
        );
    };

    // 퀴즈 제출
    const submitAnswers = async() => {
        try {
            // /api/answers로 답변 제출
            const response = await axios.post(`${baseURL}/answers`, {answers});
            console.log("API 응답:", response.data);
            const results = response.data.results;
            const score = results.filter((r) => r.correct).length;

            // /api/result 점수 메시지 가져오기
            const resultResponse = await axios.get(`${baseURL}/result?score=${score}`);
            console.log("API 응답:", resultResponse.data);

            navigate('/result', {
                state: {
                    results: {score, correctAnswers: results}, answers, questions, message: resultResponse.data.message
                }
            });         
        } catch (error) {
            console.error("제출 실패:", error);
            setError(error.response?.data?.error || "답변 제출에 실패했습니다.");
        }
    };

    // 홈으로 돌아가기
    const goHome = () => navigate("/");

    return (
        <QuizDom>
            <Title onClick={goHome}>🏠</Title>
            <Title>Quiz 👩🏻‍🏫</Title>
            {error ? (
                <ErrorMessage>{error}</ErrorMessage>
            ) : questions.length === 0 ? (
                <LoadingMessage>문제를 불러오는 중...</LoadingMessage>
            ) : (
                <ul>
                    {questions.map((q) => (
                        <div key={q.id}>
                            <Question>
                                Q{q.id + 1}. {q.question || "질문 데이터를 불러오지 못했습니다."}
                            </Question>
                            <ul style={{marginBottom: '10px'}}>
                                {q.answers && Array.isArray(q.answers) ? (q.answers.map((answer,idx) => (
                                    <li key={idx} style={{listStyle: 'none'}}>
                                        <label>
                                            <input type='radio' name={`question-${q.id}`} value={answer} checked={answers.find((a) => a.id === q.id)?.answer === answer} onChange={() => saveAnswers(q.id, answer)} />
                                            {answer}
                                        </label>
                                    </li>
                                ))
                            ) : (
                                <ErrorMessage>옵션을 불러오지 못했습니다.</ErrorMessage>
                            )}
                            </ul>
                        </div>
                    ))}
                </ul>
            )}
            {!error && questions.length > 0 && (
                <SubmitButton onClick={submitAnswers} disabled={answers.some((a) => !a.answer)}>
                    제출
                </SubmitButton>
            )}
        </QuizDom>
    );
};

export default Quiz;

const QuizDom = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const Title = styled.div`
    font-size: 40px;
    color: #535353;
    font-weight: 700;
    cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;

const Question = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #4a4a4a;
    margin-bottom: 10px;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background: #90e8f4;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
    &:hover:not(:disabled) {
        background: #6dd7e4;
    }
`;

const ErrorMessage = styled.div`
    font-size: 16px;
    color: #e74c3c;
    margin: 10px 0;
`;

const LoadingMessage = styled.div`
    font-size: 16px;
    color: #4a4a4a;
    margin: 10px 0;
`;