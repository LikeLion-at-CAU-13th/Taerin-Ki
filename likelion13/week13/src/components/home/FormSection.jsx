import React, { useContext } from 'react'
import Form from './Form'
import { Button, Wrapper } from '../layout/common'
import { ThemecolorContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isSubmittedAtom } from '../../recoil/atom'

const FormSection = () => {
    const mode = useContext(ThemecolorContext);
    const navigate = useNavigate();
    const setItSubmitted = useSetRecoilState(isSubmittedAtom);

    const handleBtn = () => {
        setItSubmitted(true);
        navigate('/mypage');
    }

  return (
    <Wrapper>
        <Form type='home' inputType='이름' />
        <Form type='email' inputType='이메일' />
        <Button mode={mode.button} onClick={handleBtn}>
            제출
        </Button>
    </Wrapper>
  )
}

export default FormSection