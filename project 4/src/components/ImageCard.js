import React, { forwardRef } from 'react';
import './ImageCard.css'

const ImageCard = forwardRef(({ drink }, ref) => {
    return (
        <div ref={ref} className="imageCard">
            <img src={`${drink.strDrinkThumb}`} alt={`${drink.strDrinkThumb}`} />
            <h2>{drink.strDrink}</h2>
        </div>
    );
})

export default ImageCard;