"use client";
import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>}
        <input
          ref={ref}
          className={cn(
            "w-full px-5 py-3 text-foreground bg-glass border border-glass-border rounded-xl",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
            "transition-all duration-200 placeholder:text-muted",
            error ? "border-primary" : "",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';