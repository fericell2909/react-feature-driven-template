import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = 'w-full py-3 px-4 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 focus:ring-slate-400',
    outline: 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100 focus:ring-indigo-500',
  };

  return (
    <button
        type="button"
        className={`${baseStyles} ${variants[variant]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
    >
      {isLoading ? 'Cargando...' : children}
    </button>
  );
};

export default Button;