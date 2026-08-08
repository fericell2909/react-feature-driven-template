import type { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  variant?: 'error' | 'success' | 'info';
  className?: string;
}

export const Alert = ({ children, variant = 'error', className = '' }: AlertProps) => {
  const variants = {
    error: 'bg-red-50 border-red-200 text-red-700',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    info: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  };

  return (
    <div className={`p-4 text-sm border rounded-lg ${variants[variant]} ${className}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;