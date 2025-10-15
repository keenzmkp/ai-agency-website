'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'soft' | 'medium' | 'hard' | 'none';
  border?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  shadow = 'soft',
  border = true,
  rounded = 'xl',
  onClick,
}) => {
  // Classes de base
  const baseClasses = 'bg-white transition-all duration-300';
  
  // Padding
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  // Ombres
  const shadows = {
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    hard: 'shadow-hard',
    none: 'shadow-none',
  };
  
  // Bordures
  const borders = {
    true: 'border border-gray-100',
    false: 'border-0',
  };
  
  // Coins arrondis
  const roundings = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
  };
  
  // Effet de survol
  const hoverClasses = hover ? 'hover:-translate-y-1 hover:shadow-medium' : '';
  
  // Classes finales
  const classes = `${baseClasses} ${paddings[padding]} ${shadows[shadow]} ${borders[border ? 'true' : 'false']} ${roundings[rounded]} ${hoverClasses} ${className}`;
  
  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
