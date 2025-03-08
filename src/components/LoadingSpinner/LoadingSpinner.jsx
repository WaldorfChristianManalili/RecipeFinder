import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center py-8">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-500"></div>
      <p className="mt-2 text-gray-600">Searching for delicious recipes...</p>
    </div>
  );
};

export default LoadingSpinner;