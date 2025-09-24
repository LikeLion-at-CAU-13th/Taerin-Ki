import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import Loader from "../components/Loader";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";

// 작성해야 함.

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