// src/components/ui/Select.tsx
import { forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  error?: FieldError;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, options, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full text-left space-y-1">
        {label && (
          <label className="block text-sm font-medium text-slate-700" htmlFor={id}>
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            error
              ? 'border-red-500 focus:ring-red-200'
              : 'border-slate-300 focus:ring-indigo-100 focus:border-indigo-600'
          } ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span className="inline-block text-xs text-red-500">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;