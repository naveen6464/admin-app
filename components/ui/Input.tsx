import React from 'react';

// FIX: Make className prop optional to avoid errors where it's not provided.
const Input = ({ label, id, className = '', ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-primary focus:ring-primary ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;