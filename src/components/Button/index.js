import React from 'react';

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