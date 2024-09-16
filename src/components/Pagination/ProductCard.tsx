import { Product } from '../../types/products';
import React from 'react';

export const ProductCard: React.FC<Product> = ({
  id,
  title,
  price,
  description,
  discountPercentage,
  thumbnail
}) => {
  return (
    <div className="max-w-xs mx-auto border rounded-lg shadow-md bg-white p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out" key={id}>
      <div className="flex flex-col items-center mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="w-40 h-40 object-contain"
        />
        <h2 className="text-lg font-semibold text-gray-800 text-center mt-4">{title}</h2>
      </div>
      <p className="text-sm text-gray-600 text-center mb-4">{description}</p>
      <div className="flex justify-between items-center text-center">
        <p className="text-lg font-medium text-gray-800">
          Price: <span className="text-green-500">${price.toFixed(2)}</span>
        </p>
        <p className="text-sm text-gray-500">
          Discount: <span className="text-red-500">{discountPercentage.toFixed(2)}%</span>
        </p>
      </div>
    </div>
  );
};
