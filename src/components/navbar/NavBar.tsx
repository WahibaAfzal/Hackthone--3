// "use client";
// import Link from "next/link";
// import SearchBar from "../searchBar/SearchBar";

// type NavbarProps = {
//   cartCount: number;
//   toggleCart: () => void;
// };

// export default function Navbar({ cartCount, toggleCart }: NavbarProps) {
//   return (
//     <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
//       <Link href="/" className="text-xl font-bold">
//         MyShop
//       </Link>
//       <SearchBar />
//       <button
//         onClick={toggleCart}
//         className="relative bg-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
//       >
//         Cart ({cartCount})
//       </button>
//     </nav>
//   );
// }
