"use client";

import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartBtn = () => {
  const { cart } = useAppSelector((state: RootState) => state.carts);

  return (
    <Link href="@/components/products/CartPage" className="relative mr-[14px] p-1">
      <Image
        priority
        src="/icons/cart.svg"
        height={100}
        width={100}
        alt="cart"
        className="max-w-[22px] max-h-[22px]"
      />
      {cart && cart.totalQuantities > 0 && (
      
      
  <span className="border bg-black text-white rounded-full w-fit-h-fit px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;





// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import CartPage from "@/components/products/CartPage";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   isNew: boolean;
//   image_url: string;
//   quantity?: number;
// };

// type ProductListProps = {
//   products: Product[];
// };

// export default function ProductList({ products }: ProductListProps) {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [notification, setNotification] = useState<string | null>(null);

//   // Add to Cart Handler
//   const handleAddToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item._id === product._id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: (item.quantity || 0) + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });

//     // Show Notification
//     setNotification("Item added to cart!");
//     setTimeout(() => setNotification(null), 2000);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold">
//           MyShop
//         </Link>

//         {/* Cart Icon */}
//         <div
//           onClick={() => setShowCart(!showCart)}
//           className="relative cursor-pointer p-2"
//         >
//           <Image
//             src="/icons/cart.svg"
//             height={30}
//             width={30}
//             alt="cart"
//             className="w-8 h-8"
//           />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//               {cart.reduce((total, item) => total + (item.quantity || 0), 0)}
//             </span>
//           )}
//         </div>
//       </nav>

//       {/* Notification */}
//       {notification && (
//         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md transition">
//           {notification}
//         </div>
//       )}

//       {/* Show Cart Page */}
//       {showCart ? (
//         <CartPage cart={cart} />
//       ) : (
//         <div className="container mx-auto px-4 py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 className="group bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
//               >
//                 {/* Image with Add to Cart Functionality */}
//                 <div
//                   onClick={() => handleAddToCart(product)}
//                   className="relative cursor-pointer"
//                 >
//                   <Image
//                     src={product.image_url}
//                     alt={product.name}
//                     width={300}
//                     height={300}
//                     className="w-full h-48 object-cover rounded-md transition-transform group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
//                     <p className="text-white font-bold">Add to Cart</p>
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
//                 <p className="text-black font-bold mt-2">RS: {product.price}</p>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
