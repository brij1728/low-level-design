import React, { useEffect, useState } from 'react';

import { PaginationControls } from '../ui';
import { ProductList } from './ProductList';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = `https://dummyjson.com/products?limit=${LIMIT}&skip=${(currentPage - 1) * LIMIT}&select=id,title,price,description,discountPercentage,thumbnail`;
    fetchProducts(URL);
  }, [currentPage]);

  const fetchProducts = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLoading(false);
      setProducts(data.products);
      const totalCount = data.total;
      setTotalPages(Math.ceil(totalCount / LIMIT));
    } catch (error) {
      console.error('Error in fetchProducts:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Pagination</h1>

      {/* Product List */}
      <ProductList products={products} loading={loading} limit={LIMIT} />

      {/* Pagination Controls */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
