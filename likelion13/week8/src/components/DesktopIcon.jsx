import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
    width: 80px;
    box-sizing: border-box;
    align-self: flex-start;
    /* 오 이거 한 줄 추가하자마자
    IconWrapper 크기가 냉@큼 아이콘 크기만큼으로 알맞아짐.. ㅎ
    align-items 속성이 기본값인 stretch로 적용되어 있어서 IconWrapper가
    화면 아래까지 쭉 늘어져 있었던 거였음
    display: inline-block이랑 같이 써서 IconWrapper 높이가
    아이콘 이미지와 텍스트 높이에 따라 동적으로 결정되게 된 것임 */
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