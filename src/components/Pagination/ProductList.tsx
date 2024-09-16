import { Product } from '../../types/products';
import { ProductCard } from './ProductCard';
import { ProductCardShimmer } from './ProductCardShimmer';
import React from 'react';

interface ProductListProps {
  products: Product[];
  loading: boolean;
  limit: number;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  loading,
  limit,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {loading ? (
        <ProductCardShimmer limit={limit} />
      ) : (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </div>
  );
};
