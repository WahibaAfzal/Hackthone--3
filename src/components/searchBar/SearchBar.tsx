


import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { client } from "@/sanity/lib/client";

const getProducts = async () => {
  return await client.fetch(`*[_type == "products"]{_id, name}`);
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSelectProduct = (productId: string) => {
    router.push(`/shop/product/${productId}`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-500" size={20} />
        <Input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {filteredProducts.length > 0 && (
        <Card className="absolute w-full bg-white mt-2 shadow-lg rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <li
                key={product._id}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectProduct(product._id)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
