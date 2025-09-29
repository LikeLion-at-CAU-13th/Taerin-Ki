import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import Loader from "../components/Loader";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(""); // input = 사용자가 입력창에 입력한 텍스트
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const handleSend = async () => {
    if (!input.trim()) return;  // 빈 메시지 방지

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const result = await model.generateContent(input);
      const text = result.response?.text() ?? "응답이 없습니다.";
      const aiMsg = { role: "assistant", content: text };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
        console.error(err);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "오류가 발생했습니다. 다시 시도해주세요." },
        ]);
    } finally {
      setLoading(false);
    }
  };

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