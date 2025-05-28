import React, { Component } from 'react';
import WindowContainer from '../components/WindowContainer';

class About extends Component {
    render() {
        return (
            <WindowContainer title="About">
                <h1>About me</h1><br />
                <p>소속: 중앙대학교 산업보안학과 24학번</p><br />
                <p>생년월일: 2005년 9월 6일</p><br />
                <p>특이사항: 멋사의 막내입니다 🤗</p><br />
                <p>지금 먹고 싶은 음식: 치즈김밥, 명동 칼국수, 엽떡...🤤</p><br />
                <p>참고로, X 버튼을 누르면 홈으로 돌아갈 수 있어요!</p>
            </WindowContainer>
        );
    }
}

export default About;