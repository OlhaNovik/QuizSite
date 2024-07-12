import s from '../Style/FotoContainerStyle.module.scss';

import React, { useState, useEffect } from 'react';
import photo1 from '../Img/photo1.png'; 
import photo2 from '../Img/photo2.png'; 
import photo3 from '../Img/photo3.png'; 
import photo4 from '../Img/photo4.png'; 
import photo5 from '../Img/photo5.png'; 
import photo6 from '../Img/photo6.png'; 
import photo7 from '../Img/photo7.png'; 
import photo8 from '../Img/photo8.png'; 
import photo9 from '../Img/photo9.png'; 


const FotoContainerStyle = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
        }, 2000); 

        return () => clearTimeout(timer);
    }, [currentPhotoIndex]); 

    const photos = [photo1, photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9];


    return (
        <div className={s.photoSlider}>
            <img src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} />
        </div>
    );
};

export default FotoContainerStyle;


