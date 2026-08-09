// src/components/ui/Input.tsx
import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';
import { Label } from './Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, className = '', type = 'text', ...props }, ref) => {
    return (
      <div className="w-full text-left space-y-1">
        <Label htmlFor={id}>{label}</Label>
        <input
          ref={ref}
          id={id}
          type={type}
          className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            error
              ? 'border-red-500 focus:ring-red-200'
              : 'border-slate-300 focus:ring-indigo-100 focus:border-indigo-600'
          } ${className}`}
          {...props}
        />
        {error && (
          <span className="inline-block text-xs text-red-500">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;