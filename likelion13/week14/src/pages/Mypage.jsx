import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { getMyPage } from '../apis/user';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState(null);
  // 처음에는 null로 시작하고,
  // getMyPage() 요청 결과가 도착하면 userInfo가 {id, name, age} 같은 객체가 됨
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access");
        if (!token) {
          alert('로그인이 필요합니다.');
          navigate('/');
          return;
        }
        const result = await getMyPage(token, navigate);
        setUserInfo(result);
      } catch (error) {
        alert("사용자 정보 불러오기 실패", error);
      }
    };

    fetchData();
  }, [navigate]);

  /*
  // 테스트용: refreshToken 및 accessToken 무효화 시뮬레이션
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Simulating refreshToken expiration by removal');
      localStorage.removeItem('refresh');
      localStorage.setItem('access', 'invalid-token');  // 무효한 accessToken 설정
      const token = localStorage.getItem('access');
      if (token) {
        getMyPage(token, navigate).then(
          () => console.log('API 호출 성공 (예상치 않음)'),
          (error) => console.log('API 호출 에러 (인터셉터 처리 확인):', error)
        );
      } else {
        console.log('accessToken이 없어 API 호출 생략');
        navigate('/');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);
  */

  return (
    <Wrapper>
      <Title>마이페이지</Title>
      {userInfo ? (
        <>
          <div>이름: {userInfo.name}</div>
          <div>나이: {userInfo.age}</div>
          <BtnWrapper>
            <button onClick={handleLogout}>로그아웃</button>
          </BtnWrapper>
        </>
      ) : (
        <div>로딩 중...</div>
      )}
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

const BtnWrapper = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  button {
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;