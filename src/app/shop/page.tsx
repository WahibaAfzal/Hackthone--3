
// import React from "react";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// const getProduct = async (slug: string) => {
//   const product = await client.fetch(
//     `*[_type == "products" && _id == $slug]{
//       _id,
//       name,
//       description,
//       price,
//       isNew,
//       color,
//       size,
//       category,
//       discountPercent,
//       "image_url": image.asset->url
//     }`,
//     { slug }
//   );
//   return product;
// };

// export async function generateStaticParams() {
//   const products = await client.fetch(`*[_type == "products"]{ _id }`);
//   return products.map((product: any) => ({
//     slug: [product._id], // Use an array if the route includes multiple segments
//   }));
// }

// // Dynamic product page component
// export default async function ProductDetails({ params }: { params: { slug: string[] } }) {
//   const slug = params.slug[0]; // Extract the product ID from the slug
//   const product = await getProduct(slug);

//   if (!product) {
//     notFound(); // Return a 404 page if the product doesn't exist
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Link href="/shop" className="text-blue-600 hover:underline">
//         ← Back to Shop
//       </Link>
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//         <div className="relative">
//           <Image
//             src={product.image_url}
//             alt={product.name}
//             width={500}
//             height={500}
//             className="w-full h-auto object-cover rounded-md shadow-md"
//           />
//           {product.isNew && (
//             <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
//               New
//             </span>
//           )}
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//           <p className="text-gray-500 text-sm mt-2">{product.description}</p>
//           <p className="text-xl font-bold text-black mt-4">${product.price}</p>
//           {product.discountPercent > 0 && (
//             <p className="text-red-500 text-sm font-medium mt-1">
//               Discount: {product.discountPercent}%
//             </p>
//           )}
//           <div className="mt-6 space-y-2">
//             <p className="text-gray-700">
//               <strong>Category:</strong> {product.category}
//             </p>
//             <p className="text-gray-700">
//               <strong>Available Colors:</strong> {product.color}
//             </p>
//             <p className="text-gray-700">
//               <strong>Sizes:</strong> {product.size}
//             </p>
//           </div>
//           <button
//             className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-300"
//             onClick={() => alert(`Added ${product.name} to cart!`)}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import { client } from "@/sanity/lib/client";
import ProductList from "@/components/products/ProductList";
import Header from "@/components/homepage/Header/Header";
import Brands from "@/components/homepage/Brands/Brand";
import DressStyle from "@/components/homepage/DressStyle/DressStyle";

// Fetch all products from Sanity
const getProducts = async () => {
  const products = await client.fetch(
    `*[_type == "products"]{
      _id,
      name,
      description,
      price,
      isNew,
      color,
      size,
      category,
      discountPercent,
      "image_url": image.asset->url
    }`
  );
  return products;
};

export default async function Shop() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <Brands />
      <DressStyle />
      <h1 className="text-3xl font-extrabold text-center mb-10">Shop Our Products</h1>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p className="text-center text-gray-600">No products available at the moment.</p>
      )}
    </div>
  );
}

