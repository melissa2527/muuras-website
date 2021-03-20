import React from 'react';
import btnStyle from './Button.module.css';

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];
    
    return (
        <Link to='/more-info' className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </Link>
    )
}