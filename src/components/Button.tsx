import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'px-6 py-3 rounded-lg font-semibold transition-colors',
          variant === 'primary' &&
            'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
          variant === 'secondary' &&
            'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);