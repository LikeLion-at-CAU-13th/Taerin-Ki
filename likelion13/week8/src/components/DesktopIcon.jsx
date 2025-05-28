import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
    width: 80px;
    box-sizing: border-box;
    align-self: flex-start;
    margin: 10px;
    text-align: center;
    border: ${(props) => (props.selected ? '2px solid #3399FF' : '2px solid transparent')};
    background-color: ${(props) => (props.selected ? 'rgba(51, 153, 255, 0.3)' : 'transparent')};
    color: white;
    padding: 4px;
    border-radius: 2px;
    user-select: none;
    
    // 아이콘 이미지 정렬 맞추기
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 48px;
        height: 48px;
        display: block;
    }

    div {
        background-color: transparent;
        padding: 2px;
        white-space: normal;
        overflow-wrap: break-word;
        max-width: 100%;
    }
`;

const DesktopIcon = ({ name, icon, selected, onClick, onDoubleClick }) => {
    return (
        <IconWrapper onClick={onClick} onDoubleClick={onDoubleClick} selected={selected}>
            <img src={icon} alt={name} />
            <div>{name}</div>
        </IconWrapper>
    );
};

export default DesktopIcon;