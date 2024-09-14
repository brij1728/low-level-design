import React from 'react';

export const MemeCardShimmer = () => {
  return (
    <>
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 p-2 animate-pulse"
          >
            <div className="w-full h-64 bg-gray-200"></div>
            <div className="p-4">
              <p className="bg-gray-200 h-4 w-full mb-2"></p>
              <p className="bg-gray-200 h-4 w-3/4"></p>
            </div>
          </div>
        ))}
    </>
  );
};
