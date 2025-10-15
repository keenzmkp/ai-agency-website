'use client';

import React, { forwardRef } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  required?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  success,
  helperText,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  required = false,
  resize = 'vertical',
  rows = 4,
  maxLength,
  showCount = false,
  className = '',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [charCount, setCharCount] = React.useState(0);
  
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
  const textareaClasses = `${baseClasses} ${sizes[size]} ${stateClasses} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  // Gestion du focus
  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };
  
  // Gestion du changement de contenu
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    props.onChange?.(e);
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
      
      {/* Container du textarea */}
      <div className="relative">
        {/* Textarea */}
        <textarea
          ref={ref}
          rows={rows}
          maxLength={maxLength}
          className={`${textareaClasses} resize-${resize}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        
        {/* Icône d'état */}
        {(error || success) && (
          <div className="absolute right-3 top-3">
            {error ? (
              <AlertCircle className="w-4 h-4 text-error-500" />
            ) : success ? (
              <CheckCircle className="w-4 h-4 text-success-500" />
            ) : null}
          </div>
        )}
      </div>
      
      {/* Compteur de caractères */}
      {showCount && maxLength && (
        <div className="mt-2 text-right">
          <span className={`text-sm ${charCount > maxLength * 0.9 ? 'text-warning-500' : 'text-gray-500'}`}>
            {charCount}/{maxLength}
          </span>
        </div>
      )}
      
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

Textarea.displayName = 'Textarea';

export default Textarea;
