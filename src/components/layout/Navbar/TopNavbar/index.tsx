import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
// import ResTopNavbar from "./TopNavbar";
import CartBtn from "./CartBtn";

// import ProductList from "@/components/products/ProductList";
// import ProductCard from "@/components/common/ProductCard";



const data: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Men's clothes",
        url: "/shop#men-clothes",
        description: "In attractive and spectacular colors and designs",
      },
      {
        id: 12,
        label: "Women's clothes",
        url: "/shop#women-clothes",
        description: "Ladies, your style and tastes are important to us",
      },
      {
        id: 13,
        label: "Kids clothes",
        url: "/shop#kids-clothes",
        description: "For all ages, with happy and beautiful colors",
      },
      {
        id: 14,
        label: "Bags and Shoes",
        url: "/shop#bag-shoes",
        description: "Suitable for men, women and all tastes and styles",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "On Sale",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "New Arrivals",
    url: "/shop#new-arrivals",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Brands",
    url: "/shop#brands",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            {/* <TopNavbar data={data} /> */}
          </div>
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
            ])}
          >
            SHOP.CO
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center">

          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />

          {/* <ProductList products={[]} /> */}
          {/* <ProductCard products={[]} /> */}
          
          <Link href="/auth/Signin" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;







// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import SearchBar from "@/components/searchBar/SearchBar";
// import CartPage from "@/components/products/CartPage";
// // import CartPage from "./CartPage";
// // import SearchBar from "../searchBar/SearchBar";




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
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold">
//           MyShop
//         </Link>
//         <SearchBar/>
//         <button
//           onClick={() => setShowCart(!showCart)}
//           className="relative bg-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
//         >
//           Cart ({cart.reduce((total, item) => total + (item.quantity || 0), 0)})
//         </button>
//       </nav>

//       {/* Show Cart Page */}
//       {showCart ? (
//         <CartPage   />
//       ) : (
//         <div className="container mx-auto px-4 py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 className="group bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
//               >
//                 <Image
//                   src={product.image_url}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-48 object-cover rounded-md transition-transform group-hover:scale-105"
//                 />
//                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
//                 <p className="text-black font-bold mt-2">RS: {product.price}</p>
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


