import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', variant = 'primary', className, children }) => {
    const baseStyles = 'py-3 px-6 rounded-lg shadow-md transition duration-300';
    const variantStyles = variant === 'primary'
        ? 'bg-teal-500 text-white hover:bg-teal-600'
        : 'bg-gray-700 text-white hover:bg-gray-800';

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
