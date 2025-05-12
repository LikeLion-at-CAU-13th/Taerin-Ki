import React, { Component } from 'react';
import WindowContainer from '../components/WindowContainer';

class Contact extends Component {
    render() {
        return (
            <WindowContainer title="Contact">
                <h1>Contact free</h1>
                <br />
                <p>멋사 회원들의 많은 연락 기대합니다. 밥친구 문의 대환영 ♥️</p><br />
                <a href='https://www.instagram.com/xaerinoo/'>Instagram에서 @xaerinoo님을 팔로우!</a><br /><br />
                <a href='https://velog.io/@ddalgigondu/posts'>탱구리님과 Velolg에서 소통해요!</a>
                
            </WindowContainer>
        );
    }
}

export default Contact;