import React from 'react';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  span?: number;
}

export default function Button({ onClick, className = '', children, span = 1 }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${span > 1 ? `col-span-${span}` : ''} p-4 rounded transition-colors`}
    >
      {children}
    </button>
  );
}