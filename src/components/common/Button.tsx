import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cream';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}) => {
  // Padding strictly follows 2x rule: horizontal = 2 * vertical
  const sizeStyles = {
    sm: 'py-2 px-4 text-xs tracking-wider',
    md: 'py-2.5 px-5 text-sm tracking-wide',
    lg: 'py-3.5 px-7 text-base tracking-wide'
  }[size];

  const variantStyles = {
    primary:
      'bg-[#173B5D] text-[#F5F1E8] border border-[#12395D] hover:bg-[#12395D] shadow-sm hover:shadow-md active:translate-y-0.5',
    secondary:
      'bg-[#315D7E] text-[#F5F1E8] border border-[#315D7E] hover:bg-[#173B5D] shadow-xs active:translate-y-0.5',
    cream:
      'bg-[#E9E2D5] text-[#173A5D] border border-[#315D7E]/30 hover:bg-[#F5F1E8] shadow-xs active:translate-y-0.5',
    outline:
      'bg-transparent text-[#173A5D] border border-[#173A5D] hover:bg-[#173B5D] hover:text-[#F5F1E8] active:translate-y-0.5',
    ghost:
      'bg-transparent text-[#173A5D] hover:bg-[#E9E2D5]/50 active:translate-y-0.5'
  }[variant];

  const content = (
    <span className="flex items-center justify-center gap-2 font-body font-medium transition-transform duration-200">
      {icon && iconPosition === 'left' && <span className="inline-block transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </span>
  );

  const baseClasses = `group inline-flex items-center justify-center select-none font-body whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173B5D] focus-visible:ring-offset-2 ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} role="button">
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};
