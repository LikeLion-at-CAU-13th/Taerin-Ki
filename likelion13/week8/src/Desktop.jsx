import React, { useState } from 'react';
import styled from 'styled-components';
import DesktopIcon from './components/DesktopIcon';
import { useNavigate } from 'react-router-dom';

const DesktopContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #008080;
    background-size: cover;
    display: flex;
    padding: 16px;

    // 정렬 맞추기
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const icons = [
    {id: 1, name: 'About', link: '/about', icon: 'icon_about.png'},
    {id: 2, name: 'Gallery', link: '/gallery', icon: 'icon_gallery.png'},
    {id: 3, name: 'Contact', link: '/contact', icon: 'icon_contact.png'},
    {id: 4, name: '절대 바이러스 아닙니다. 믿어주세요... 전 개구리입니다.', link: '/virus', icon: 'icon_frog.png'},
    {id: 5, name: '방명록', link: 'http://writeletter.kro.kr/', icon: 'icon_guestbook.png'}
];

const Desktop = () => {
    const navigate = useNavigate();
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [clickTimer, setClickTimer] = useState(null);

    const handleIconClick = (iconId, link) => {
    if (clickTimer) {
      clearTimeout(clickTimer);
      setClickTimer(null);

      // 방명록 아이콘 클릭 시와 타 아이콘 클릭 시 상황 분리
      if (link.startsWith('http')) {
        window.location.href = link;
      } else {
        navigate(link); // 더블 클릭 시 링크 이동
      }
    } else {
      const timer = setTimeout(() => {
        setSelectedIcon((prev) => (prev === iconId ? null : iconId));   // 동일 아이콘 클릭 시 해제
        setClickTimer(null);
      }, 200);
      setClickTimer(timer);
    }
  };

  const handleDesktopClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedIcon(null); // 옆에 바탕 클릭 시 선택 해제
    }
  };

    return (
    <DesktopContainer onClick={handleDesktopClick}>
      {icons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          name={icon.name}
          selected={selectedIcon === icon.id}
          onClick={() => handleIconClick(icon.id, icon.link)}
          onDoubleClick={() => navigate(icon.link)}
          icon={icon.icon}
        />
      ))}
    </DesktopContainer>
    );
};

export default Desktop;