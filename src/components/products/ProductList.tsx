
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartPage from "./CartPage";
import SearchBar from "../searchBar/SearchBar";




type Product = {
  _id: string;
  name: string;
  price: number;
  isNew: boolean;
  image_url: string;
  quantity?: number;
};

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MyShop
        </Link>
        <SearchBar/>
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative bg-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
        >
          Cart ({cart.reduce((total, item) => total + (item.quantity || 0), 0)})
        </button>
      </nav>

      {/* Show Cart Page */}
      {showCart ? (
        <CartPage   />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
              >
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md transition-transform group-hover:scale-105"
                />
                <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
                <p className="text-black font-bold mt-2">RS: {product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


