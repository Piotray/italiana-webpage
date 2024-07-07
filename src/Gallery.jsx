import React from 'react';
import './Gallery.css';

function Gallery() { 
    return (
        <div>
            <div className='gallery-title'>
                <h1>eat with your eyes first 👀</h1>
            </div>
            <div className='gallery-container'>
                <div className='gallery-box'><img src="./assets/gallery/photo-1.jpg" alt="Gallery item 1" /></div>
                <div className='gallery-box'><img src="./assets/gallery/photo-2.jpg" alt="Gallery item 2" /></div>
                <div className='gallery-box'><img src="./assets/gallery/photo-3.jpg" alt="Gallery item 3" /></div>
                <div className='gallery-box'><img src="./assets/gallery/photo-4.jpg" alt="Gallery item 4" /></div>
                <div className='gallery-box'><img src="./assets/gallery/photo-5.jpg" alt="Gallery item 5" /></div>
                <div className='gallery-box'><img src="./assets/gallery/photo-6.jpg" alt="Gallery item 6" /></div>
                <div className='gallery-box'><img src="./assets/gallery/photo-7.jpg" alt="Gallery item 7" /></div>
                <div className='gallery-box'><img src="./assets/gallery/photo-8.jpg" alt="Gallery item 8" /></div>
                <div className='gallery-box'><img src="./assets/gallery/photo-9.jpg" alt="Gallery item 9" /></div>
            </div>
        </div>
    );
}
    
export default Gallery;

