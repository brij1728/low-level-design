import React, { useEffect, useState } from 'react';

import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  thumbnail: string;
}

const LIMIT = 10;

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const URL = `https://dummyjson.com/products?limit=${LIMIT}&skip=${(currentPage - 1) * LIMIT}&select=id,title,price,description,discountPercentage,thumbnail`;

    fetchProducts(URL);
  }, [currentPage]);

  const fetchProducts = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products);
      const totalCount = data.total;
      setTotalPages(Math.ceil(totalCount / LIMIT));
    } catch (error) {
      console.error('Error in fetchProducts:', error);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Pagination</h1>

      {/* Responsive Grid for Product Cards */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {currentPage > 1 &&
			<button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-2 mx-2 border rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'}`}
        >
          Prev
        </button>}

        {[...Array(totalPages).keys()].map((_, page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page + 1)}
            className={`p-2 mx-2 border rounded-lg ${currentPage === page + 1 ? 'font-bold text-white bg-blue-500' : ''}`}
          >
            {page + 1}
          </button>
        ))}
{currentPage < totalPages  && 
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 mx-2 border rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'}`}
        >
          Next
        </button>}
      </div>
    </div>
  );
};
