import React from 'react';
import './styles.scss'
export const Button = ({
    className,
    onClick,
    children,
    ...restProps
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${className}`}
            {...restProps}
        >
            {children}
        </button>
    );
};