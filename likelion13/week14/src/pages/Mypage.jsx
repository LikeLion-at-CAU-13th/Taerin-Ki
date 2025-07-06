import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { getMyPage } from '../apis/user';

//401 에러가 뜨면 리프레쉬 토큰으로 엑세스 토큰 재발급 받기

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLodaing] = useState(true);


  useEffect( () => {
    getMyPage(localStorage.getItem("access"))
    .then( (data) => {
      setData(data); // 데이터 받고
      setLodaing(false); // set
    })
    .catch( (error) => {
      console.error(error);
      alert("토큰 기한 만료");
    })
  }, [])

  if (loading) return <div>로딩중...</div> // 데이터 받아올동안 화면에 로딩표시 해주기

  return (
    <Wrapper>
      <Title>마이페이지</Title>
      <div>이름: {data.name}</div>
      <div>나이 : {data.age}</div>
    </Wrapper>
  )
}

export default Mypage






const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
