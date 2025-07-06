import React, { useContext } from 'react'
import { emailAtom, favoriteSeasonAtom, phoneNumAtom, userNameAtom } from '../../recoil/atom'
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Button, Wrapper } from '../layout/common';
import { ThemecolorContext } from '../../context/context';

const Modal = ({isOpen, onClose}) => {
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const favoriteSeason = useRecoilValue(favoriteSeasonAtom);
    const phoneNum = useRecoilValue(phoneNumAtom);
    const mode = useContext(ThemecolorContext);
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleConfirm = () => {
        navigate('/mypage');
    };

  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    }}>
        <div style={{
            background: mode.modalBackground || '#fff',
            padding: '20px',
            borderRadius: '8px',
            color: mode.modalText || '#000',
            maxWidth: '400px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h3>입력 정보가 맞나요?</h3>
            <p>이름: {userName}</p>
            <p>전화번호: {phoneNum}</p>
            <p>이메일: {email}</p>
            <p>최애 계절: {favoriteSeason}</p>
            <Wrapper style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
            }}>
                <Button mode={mode.button} onClick={handleConfirm}>
                    예
                </Button>
                <Button mode={mode.button} onClick={onClose}>
                    아니오
                </Button>
            </Wrapper>
        </div>
    </div>
  )
}

export default Modal