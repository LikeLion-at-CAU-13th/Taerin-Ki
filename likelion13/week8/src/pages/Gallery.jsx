import React, { Component } from 'react';
import WindowContainer from '../components/WindowContainer';
import '../style/gallery.css';

class Gallery extends Component {
    render() {
        return (
            <WindowContainer title="Gallery">
                <div className="gallery">
                    <div className="gallery-container">
                        <img src='img_1.jpg' alt='태린이_1' className='gallery-image' />
                        <img src='img_2.jpg' alt='태린이_2' className='gallery-image' />
                        <img src='img_3.jpg' alt='태린이_3' className='gallery-image' />
                        <img src='img_4.jpg' alt='태린이_4' className='gallery-image' />
                        <img src='img_5.jpg' alt='태린이_5' className='gallery-image' />
                        <img src='img_6.jpg' alt='태린이_6' className='gallery-image' />
                        <img src='img_7.jpg' alt='태린이_7' className='gallery-image' />
                        <img src='img_8.jpg' alt='태린이_8' className='gallery-image' />
                    </div>
                </div>
            </WindowContainer>
        );
    }
}

export default Gallery;