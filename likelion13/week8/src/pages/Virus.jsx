import React, { Component } from 'react';
import WindowContainer from '../components/WindowContainer';
import '../style/virus.css';

class Virus extends Component {
    render() {
        return (
            <WindowContainer title="Virus">
                <div className='virus-container'>
                    <h1>이런 거 함부로 눌러보시면 안돼요! 🐸</h1>
                </div>
                <br />
                <div className='virus-container'>
                    <img className='virus' src='img_virus.jpg' />
                </div>
            </WindowContainer>
        );
    }
}

export default Virus;