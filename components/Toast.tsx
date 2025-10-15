'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';

interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
  position = 'top-right',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  
  // Icônes et couleurs selon le type
  const toastConfig = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-success-50',
      borderColor: 'border-success-200',
      iconColor: 'text-success-500',
      titleColor: 'text-success-800',
      messageColor: 'text-success-700',
    },
    error: {
      icon: AlertCircle,
      bgColor: 'bg-error-50',
      borderColor: 'border-error-200',
      iconColor: 'text-error-500',
      titleColor: 'text-error-800',
      messageColor: 'text-error-700',
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-warning-50',
      borderColor: 'border-warning-200',
      iconColor: 'text-warning-500',
      titleColor: 'text-warning-800',
      messageColor: 'text-warning-700',
    },
    info: {
      icon: Info,
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      iconColor: 'text-primary-500',
      titleColor: 'text-primary-800',
      messageColor: 'text-primary-700',
    },
  };
  
  const config = toastConfig[type];
  const Icon = config.icon;
  
  // Positions
  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };
  
  // Animation d'entrée
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Auto-fermeture
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);
  
  // Gestion de la fermeture
  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };
  
  return (
    <div
      className={`fixed z-50 max-w-sm w-full ${positions[position]} transition-all duration-300 ${
        isVisible && !isLeaving
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-2 scale-95'
      }`}
    >
      <div
        className={`${config.bgColor} ${config.borderColor} border-l-4 rounded-lg shadow-hard p-4`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Icon className={`w-5 h-5 ${config.iconColor}`} />
          </div>
          
          <div className="ml-3 flex-1">
            <h3 className={`text-sm font-medium ${config.titleColor}`}>
              {title}
            </h3>
            {message && (
              <p className={`mt-1 text-sm ${config.messageColor}`}>
                {message}
              </p>
            )}
          </div>
          
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={handleClose}
              className={`${config.titleColor} hover:opacity-75 transition-opacity duration-200`}
              aria-label="Fermer la notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
