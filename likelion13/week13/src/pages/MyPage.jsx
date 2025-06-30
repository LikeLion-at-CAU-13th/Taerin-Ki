// rafce

import React, { useContext } from 'react'
import { Button, Title, Wrapper } from '../components/layout/common'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom'
import { ThemecolorContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
    const userName = useRecoilValue(userNameAtom);
    const mode = useContext(ThemecolorContext);

    const navigate = useNavigate();
    const resetUserName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const resetisSubmitted = useResetRecoilState(isSubmittedAtom);

    const handleReset = () => {
        resetUserName();
        resetEmail();
        resetisSubmitted();
        navigate("/");
    }

  return (
    <Wrapper>
        <Title>Welcome {userName}!</Title>
        <Button mode={mode.button} onClick={handleReset}>
            Reset
        </Button>
    </Wrapper>
  )
}

export default MyPage