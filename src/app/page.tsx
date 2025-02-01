




import { client } from "@/sanity/lib/client";
import ProductList from "@/components/products/ProductList";

import Brands from "@/components/homepage/Brands/Brand";
import DressStyle from "@/components/homepage/DressStyle/DressStyle";
import Header from "@/components/homepage/Header/Header";
// import Navbar from "@/components/navbar/NavBar";



const getProducts = async () => {
  const products = await client.fetch(`*[_type == "products"]{
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
  }`);
  return products;
};

export default async function Home() {
  const products = await getProducts();

  return (
    
       <div className="container mx-auto px-4 py-8">
      
        <Header />
        <Brands />
        <DressStyle />
        
      
      <h1 className="text-3xl font-extrabold text-center mb-10">Products</h1>
      <ProductList products={products} />
      
    </div>
   
   
  );
}
