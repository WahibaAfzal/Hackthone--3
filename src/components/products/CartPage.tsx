
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  // Mock API call or load cart from local storage
  useEffect(() => {
    // Replace this with your actual API call or local storage logic
    const loadCart = async () => {
      try {
        const mockCart = [
          { _id: "1", name: "Product 1", price: 100, quantity: 2, image_url: "/img1.jpg" },
          { _id: "2", name: "Product 2", price: 200, quantity: 1, image_url: "/img2.jpg" },
        ];
        setCart(mockCart);
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    };

    loadCart();
  }, []);

  // Calculate the total amount
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white rounded-lg shadow p-4"
              >
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">Price: Rs {item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-bold text-lg text-blue-600">
                  Rs {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Amount</h2>
            <p className="text-2xl font-bold text-gray-800">
              Rs {calculateTotal().toFixed(2)}
            </p>
          </div>

          <div className="flex justify-end mt-6 space-x-4">
            {/* Continue Shopping Button */}
            <Link href="/">
              <button className="bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 transition">
                Continue Shopping
              </button>
            </Link>

            {/* Checkout Button */}
            <Link href="/checkout">
              <button className="bg-green-600 text-white py-2 px-6 rounded-md shadow-lg text-lg hover:bg-green-700 transition">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
