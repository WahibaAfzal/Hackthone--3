"use client";
import React from "react";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  price: number;
  isNew: boolean;
  image_url: string;
  quantity?: number;
};

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleAddToCart }) => {
  return (
    <div className="group bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow relative">
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded">
          New
        </span>
      )}
      <Image
        src={product.image_url}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover rounded-md transition-transform group-hover:scale-105"
      />
      <h2 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 font-medium mt-2">RS: {product.price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;