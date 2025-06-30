import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Result = () => {
    const {state} = useLocation();
    const {results, answers, questions, message} = state || {};
    const navigate = useNavigate();

    const goHome = () => navigate("/");

    if (!results || !answers || !questions) {
        return <ErrorMessage>결과 데이터를 불러오지 못했습니다. 퀴즈를 먼저 완료하세요.</ErrorMessage>
    }

    const score = results.score || 0;
    const total = questions.length;

    return (
        <QuizDom>
            <Title>Quiz 결과 📜</Title>
            <ScoreText>점수: {score} / {total}</ScoreText>
            <Message>{message || "결과 메시지를 불러오지 못했습니다."}</Message>
            <ul>
                {questions.map((q) => {
                    const userAnswer = answers.find((a) => a.id === q.id)?.answer || "답변 없음";
                    const isCorrect = results.correctAnswers.find((r) => r.id === q.id)?.correct;
                    return (
                        <div key={q.id}>
                            <Question>Q{q.id + 1}. {q.question}</Question>
                            <ul>
                                <li>내가 고른 답: {userAnswer}</li>
                                <li>{isCorrect ? "✅정답" : "❌오답"}</li>
                            </ul>
                        </div>
                    );
                })}
            </ul>
            <SubmitButton onClick={goHome}>홈으로</SubmitButton>
        </QuizDom>
    );
};

export default Result;

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
`;

const ScoreText = styled.div`
    font-size: 24px;
    color: #4a4a4a;
    margin: 10px 0;
`;

const Message = styled.div`
    font-size: 20px;
    color: #4a4a4a;
    margin: 10px 0;
`;

const Question = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #4a4a4a;
    margin: 10px 0;
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
    &:hover {
        background: #6dd7e4;
    }
`;

const ErrorMessage = styled.div`
    font-size: 16px;
    color: #e74c3c;
    margin: 10px 0;
`;