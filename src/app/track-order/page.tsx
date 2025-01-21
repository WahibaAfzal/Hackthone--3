"use client";
import React from "react";

export default function TrackOrderPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Track Your Order</h1>
      <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your order ID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Track Order
        </button>
      </form>
    </div>
  );
}
