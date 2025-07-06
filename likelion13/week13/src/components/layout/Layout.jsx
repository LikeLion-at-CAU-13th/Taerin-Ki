// rafce

import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { Button } from './common';
import { ThemecolorContext } from '../../context/context';
import { useRecoilValue } from 'recoil';
import { emailAtom, isSubmittedAtom, userNameAtom } from '../../recoil/atom';

const Layout = ({children}) => {   // children에 대해 알아보기 👩🏻‍🏫
    const context = useContext(ThemecolorContext);
    const [mode, setMode] = useState(context.blueTheme);    // 블루 테마를 초기값으로 지정

    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmitted = useRecoilValue(isSubmittedAtom);

    const handleMode = (e)  => {
        const value = e.target.value;

        if (value === 'blue') {
            setMode(context.blueTheme);
        } else if (value === 'green') {
            setMode(context.greenTheme);
        } else if (value === 'pink') {
            setMode(context.pinkTheme);
        }
    }

  return (
    <ThemecolorContext.Provider value={mode}>
        <Wrapper>
            <Header mode={mode.main}>
                <Button value='blue' onClick={handleMode}>blue</Button>
                <Button value='green' onClick={handleMode}>green</Button>
                <Button value='pink' onClick={handleMode}>pink</Button>
            </Header>
            <div>{children}</div>
            <Footer mode={mode.main}>
                {isSubmitted ? `${userName}의 공간 | ${email}` : '2025 LIKELION FE'}
                {/* 조건부 렌더링으로 하지 않으면 이름, 이메일 입력하는대로 footer 내용이 실시간으로 바뀌어버림 */}
            </Footer>
        </Wrapper>
    </ThemecolorContext.Provider>
  )
}

export default Layout

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;
