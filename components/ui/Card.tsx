import React from 'react';

const Card = ({ title, value, icon, bgColorClass = 'bg-primary' }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-500">{title}</h4>
          <span className="text-3xl font-bold text-gray-800">{value}</span>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${bgColorClass}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Card;
