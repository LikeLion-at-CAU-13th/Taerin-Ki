// 상단 바
import React from 'react';
import '../style/window.css';
import { useNavigate } from 'react-router-dom';

function TitleBar({ title }) {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className='title-bar'>
            <span className='title-text'>{title}</span>
            <button className="btn" onClick={handleClose}>X</button>         
        </div>
    );
}

export default TitleBar;