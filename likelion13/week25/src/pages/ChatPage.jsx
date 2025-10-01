import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import Loader from "../components/Loader";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(""); // input = 사용자가 입력창에 입력한 텍스트
  const [loading, setLoading] = useState(false);

  // 안 쓸 거니까 삭제띠
  // const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  // 메시지 컨테이너
  const messagesEndRef = useRef(null);

  // AI 응답 요청 함수로 분리
  const fetchAIResponse = async (text) => {
    // Gemini API 요청 형식에 맞게 body 구성
    const requestBody = {
      contents: [{ parts: [{ text }] }],
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      // AI 응답 text 추출, 없으면 기본 메시지 반환
      return data.candidates?.[0]?.content?.parts[0]?.text || "응답이 없습니다.";
    } catch (err) {
      console.error(err);
      return "오류가 발생했습니다. 다시 시도해주세요.";
    }
  };

  // 전송 버튼 클릭 또는 Enter 키 입력 시 호출됨
  const handleSend = async () => {
    if (!input.trim()) return;  // 빈 메시지 전송 방지

    // 사용자 메시지 추가
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    // 입력창 초기화 및 로딩 시작
    setInput("");
    setLoading(true);

    // AI 응답 요청 후 메시지 추가
    const aiText = await fetchAIResponse(input);
    const aiMsg = { role: "assistant", content: aiText };
    setMessages((prev) => [...prev, aiMsg]);

    // 로딩 종료
    setLoading(false);
  };

  // 자동 스크롤: messages나 loading이 바뀔 때마다 scrollIntoView 호출
  // → 새 메시지가 들어오거나 AI 응답이 완료되면 자동으로 스크롤이 내려감
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <PageWrapper>
      <ChatCard
        initial = {{ opacity: 0, y: 40}}
        animate = {{ opacity: 1, y: 0}}
        transition = {{ duration: 0.6 }}>
        <Header />
        <Messages>
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} content={m.content} />
          ))}
          {loading && <Loader />}
          {/* 자동 스크롤용 더미 div */}
          <div ref={messagesEndRef} />
        </Messages>
        <ChatInput
          value={input}
          onChange={setInput}
          onSend={handleSend}
        />
      </ChatCard>
    </PageWrapper>
  );
};

export default ChatPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;           
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ChatCard = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: min(92vw, 720px); 
  height: min(80vh, 820px);

  margin: 0 auto;

  background: #fff;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Messages = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: #fafafa;
  overscroll-behavior: contain;
`;