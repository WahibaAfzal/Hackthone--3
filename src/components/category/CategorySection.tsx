"use client";
import React from "react";
import ProductCard from "../product-card/ProductCard";
// import ProductCard from "./ProductCard";

type Products = {
  _id: string;
  name: string;
  price: number;
  isNew: boolean;
  image_url: string;
  quantity?: number;
};

interface CategorySectionProps {
  categoryName: string;
  products: Products[];
  handleAddToCart: (product: Products) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categoryName,
  products,
  handleAddToCart,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
        {categoryName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
