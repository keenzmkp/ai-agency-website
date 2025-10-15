'use client';

import React, { forwardRef } from 'react';
import { AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  success,
  helperText,
  leftIcon,
  rightIcon,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  required = false,
  className = '',
  type = 'text',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  
  // Classes de base
  const baseClasses = 'w-full border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variantes
  const variants = {
    default: 'border-gray-300 focus:ring-primary-500 focus:border-transparent',
    filled: 'bg-gray-50 border-gray-200 focus:ring-primary-500 focus:border-transparent',
    outlined: 'border-2 border-gray-300 focus:ring-primary-500 focus:border-primary-500',
  };
  
  // Tailles
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-4 py-4 text-base',
  };
  
  // États
  const stateClasses = error 
    ? 'border-error-500 focus:ring-error-500' 
    : success 
    ? 'border-success-500 focus:ring-success-500' 
    : variants[variant];
  
  // Classes finales
  const inputClasses = `${baseClasses} ${sizes[size]} ${stateClasses} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  // Gestion du type de mot de passe
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  // Gestion du focus
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Container de l'input */}
      <div className="relative">
        {/* Icône gauche */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        
        {/* Input */}
        <input
          ref={ref}
          type={inputType}
          className={`${inputClasses} ${leftIcon ? 'pl-10' : ''} ${rightIcon || type === 'password' ? 'pr-10' : ''}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {/* Icône droite */}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
        
        {/* Bouton pour afficher/masquer le mot de passe */}
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
        
        {/* Icône d'état */}
        {(error || success) && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {error ? (
              <AlertCircle className="w-4 h-4 text-error-500" />
            ) : success ? (
              <CheckCircle className="w-4 h-4 text-success-500" />
            ) : null}
          </div>
        )}
      </div>
      
      {/* Messages d'aide et d'erreur */}
      {(error || success || helperText) && (
        <div className="mt-2">
          {error && (
            <p className="text-sm text-error-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </p>
          )}
          {success && (
            <p className="text-sm text-success-500 flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              {success}
            </p>
          )}
          {helperText && !error && !success && (
            <p className="text-sm text-gray-500">{helperText}</p>
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
