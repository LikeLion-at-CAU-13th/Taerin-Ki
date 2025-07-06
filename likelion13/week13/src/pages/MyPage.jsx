// rafce

import React, { useContext } from 'react'
import { Button, Title, Wrapper } from '../components/layout/common'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, favoriteSeasonAtom, isSubmittedAtom, phoneNumAtom, userNameAtom } from '../recoil/atom'
import { ThemecolorContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const favoriteSeason = useRecoilValue(favoriteSeasonAtom);
    const phoneNum = useRecoilValue(phoneNumAtom);
    const mode = useContext(ThemecolorContext);
    const navigate = useNavigate();
    const resetUserName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const resetFavoriteSeason = useResetRecoilState(favoriteSeasonAtom);
    const resetPhoneNum = useResetRecoilState(phoneNumAtom);
    const resetisSubmitted = useResetRecoilState(isSubmittedAtom);

    const handleReset = () => {
        resetUserName();
        resetEmail();
        resetFavoriteSeason();
        resetPhoneNum();
        resetisSubmitted();
        navigate("/");
    }

  return (
    <Wrapper>
        <Title>Welcome {userName}!</Title>
        <p>{favoriteSeason}을 기다려요...🙂</p>
        <Button mode={mode.button} onClick={handleReset}>
            Reset
        </Button>
    </Wrapper>
  )
}

export default MyPage