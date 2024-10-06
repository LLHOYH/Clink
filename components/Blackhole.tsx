import React from 'react';

const BlackHole = () => {
  return (
    <div className="relative w-64 h-64 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 overflow-hidden">
      <div className="absolute inset-0 animate-spin-slow">
        <div className="w-full h-full bg-conic-gradient"></div>
      </div>
    </div>
  );
};

export default BlackHole;