
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
  color: string;
  size: string;
  category: string;
  discountPercent: number;
  image_url: string;
};

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  // State for managing the cart
  const [cart, setCart] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [showCart, setShowCart] = useState(false);

  // Add product to the cart
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: (item.price  || 0) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Show notification
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
  };

  return (
    <div>
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded shadow-lg flex items-center space-x-4">
          <span>{notification}</span>
          <button
            onClick={() => setShowCart(true)}
            className="underline text-blue-200 hover:text-blue-100"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Toggle Cart */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed top-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {showCart ? "Close Cart" : `Cart (${cart.length})`}
      </button>

      {/* Display Cart */}
      {showCart && (
        <div className="fixed top-16 right-4 bg-white p-4 shadow-lg rounded-lg w-80">
          <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item._id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600">x{item.category}</p>
                    <p className="text-gray-600">
                      ${(item.price * (item.price || 1)).toFixed(2)}
                    </p>
                  </div>
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/shop/product/${product._id}/${product.name.split(" ").join("-")}`}>
              <div className="relative">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                {product.name}
              </h2>
              <p className="text-black font-bold mt-2">${product.price}</p>
              {product.discountPercent > 0 && (
                <p className="text-red-500 text-sm font-medium">
                  Discount: {product.discountPercent}%
                </p>
              )}
              <p className="text-gray-500 text-sm mt-1">
                Category: {product.category}
              </p>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
