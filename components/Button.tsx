'use client';

import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  target,
  rel,
  ariaLabel,
}) => {
  // Classes de base
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variantes
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-medium hover:shadow-hard',
    secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus:ring-secondary-500',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    success: 'bg-success-500 text-white hover:bg-success-600 focus:ring-success-500 shadow-medium hover:shadow-hard',
    warning: 'bg-warning-500 text-white hover:bg-warning-600 focus:ring-warning-500 shadow-medium hover:shadow-hard',
    error: 'bg-error-500 text-white hover:bg-error-600 focus:ring-error-500 shadow-medium hover:shadow-hard',
  };
  
  // Tailles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  
  // Classes finales
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Contenu du bouton
  const buttonContent = (
    <>
      {loading && (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      )}
      {children}
    </>
  );
  
  // Si c'est un lien
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }
  
  // Si c'est un bouton
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
