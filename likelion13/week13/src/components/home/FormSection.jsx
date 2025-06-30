import React, { useContext, useState } from 'react'
import Form from './Form'
import { Button, Wrapper } from '../layout/common'
import { ThemecolorContext } from '../../context/context'
import { useSetRecoilState } from 'recoil'
import { isSubmittedAtom } from '../../recoil/atom'
import Modal from './Modal'

const FormSection = () => {
    const mode = useContext(ThemecolorContext);
    const setItSubmitted = useSetRecoilState(isSubmittedAtom);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBtn = () => {
        setItSubmitted(true);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

  return (
    <Wrapper>
        <Form type='text' inputType='이름' />
        <Form type='tel' inputType='전화번호' />
        <Form type='email' inputType='이메일' />
        <Form type='radio' inputType='최애 계절' />
        <Button mode={mode.button} onClick={handleBtn}>
            제출
        </Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Wrapper>
  )
}

export default FormSection