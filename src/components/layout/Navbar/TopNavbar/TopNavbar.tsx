// import React from "react";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Image from "next/image";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { integralCF } from "@/styles/fonts";
// import { NavMenu } from "../navbar.types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const ResTopNavbar = ({ data }: { data: NavMenu }) => {
//   return (
//     <Sheet>
//       <SheetTrigger asChild className="cursor-pointer">
//         <Image
//           priority
//           src="/icons/menu.svg"
//           height={100}
//           width={100}
//           alt="menu"
//           className="max-w-[22px] max-h-[22px]"
//         />
//       </SheetTrigger>
//       <SheetContent side="left" className="overflow-y-auto">
//         <SheetHeader className="mb-10">
//           <SheetTitle asChild>
//             <SheetClose asChild>
//               <Link href="/" className={cn([integralCF.className, "text-2xl"])}>
//                 SHOP.CO
//               </Link>
//             </SheetClose>
//           </SheetTitle>
//         </SheetHeader>
//         <div className="flex flex-col items-start">
//           {data.map((item) => (
//             <React.Fragment key={item.id}>
//               {item.type === "MenuItem" && (
//                 <SheetClose asChild>
//                   <Link href={item.url ?? "/"} className="mb-4">
//                     {item.label}
//                   </Link>
//                 </SheetClose>
//               )}
//               {item.type === "MenuList" && (
//                 <div className="mb-4 w-full">
//                   <Accordion type="single" collapsible>
//                     <AccordionItem value={item.label} className="border-none">
//                       <AccordionTrigger className="text-left p-0 py-0.5 font-normal text-base">
//                         {item.label}
//                       </AccordionTrigger>
//                       <AccordionContent className="p-4 pb-0 border-l flex flex-col">
//                         {item.children.map((itemChild, idx) => (
//                           <SheetClose
//                             key={itemChild.id}
//                             asChild
//                             className="w-fit py-2 text-base"
//                           >
//                             <Link href={itemChild.url ?? "/"}>
//                               {itemChild.label}
//                             </Link>
//                           </SheetClose>
//                         ))}
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default ResTopNavbar;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/searchBar/SearchBar";
import CartPage from "@/components/products/CartPage";
// import CartPage from "./CartPage";
// import SearchBar from "../searchBar/SearchBar";




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


