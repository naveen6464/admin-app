import React from 'react';

// FIX: Make className prop optional to avoid errors where it's not provided.
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out flex items-center justify-center gap-2";

  const variantClasses = {
    primary: "bg-primary hover:bg-primary-hover focus:ring-primary",
    secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-500 text-white",
    danger: "bg-red-600 hover:bg-red-700 focus:ring-red-600",
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:ring-indigo-500"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;