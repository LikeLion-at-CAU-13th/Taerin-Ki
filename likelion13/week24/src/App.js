import React from 'react';
import productImage from './product.png';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <PageWrap>
      <Helmet>
        <title>토마토 판매 사이트</title>
        <meta name="description" content="울퉁불퉁 멋진 몸매의 토마토를 만나보세요!" />
      </Helmet>
      <Header>Welcome</Header>
      
      <InfoWrap>
        <ImageWrap>
          <Image src={productImage} alt="토마토 사진" />
        </ImageWrap>

        <Title>🍅 멋쟁이 토마토 🍅</Title>
        <Description>새콤달콤 향기 풍기는 멋쟁이 토마토 🎶</Description>
        <Price>가격: 30,000원</Price>
      </InfoWrap>

      <Button>구매하기</Button>
    </PageWrap>
  );
}

export default App;

const PageWrap = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 24px;
`;

const Header = styled.h1`
  color: #000000;
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

const ImageWrap = styled.div`
  width: 300px;
  height: 230px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.h3`
  color: #ff0000;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const Price = styled.h3`
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const Button = styled.button`
  background-color: #1877f2;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`;