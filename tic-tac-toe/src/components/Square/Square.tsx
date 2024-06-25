import React, { useState } from 'react';
import './Square.css';

interface SquareProps {
    value: string,
    onSquareClick: any
}

const Square: React.FC<SquareProps> = (
    { 
        value = '',
        onSquareClick = undefined 
    }) => {

    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
};

export default Square;