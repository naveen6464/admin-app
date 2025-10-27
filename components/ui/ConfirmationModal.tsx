import React from 'react';
import Button from './Button';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md transform transition-all duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
        style={isOpen ? { transform: 'scale(1)', opacity: 1 } : { transform: 'scale(0.95)', opacity: 0 }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="danger" onClick={onConfirm}>Confirm Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
