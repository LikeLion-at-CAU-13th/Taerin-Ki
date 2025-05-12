// 전체 화면 틀
import React from 'react';
import TitleBar from './TitleBar';
import '../style/window.css';
import styled from 'styled-components';

function WindowContainer({ title, children }) {
    return (
        <div className='window'>
            <TitleBar title={title} />
            <div className='window-body'>
                {children}
            </div>
        </div>
    );
}

export default WindowContainer;