"use client";

import { useEffect, useState } from "react";
import { FaCartPlus, FaTimes } from "react-icons/fa";
import { Star } from "lucide-react";
import { useParams } from "next/navigation"; // ✅ Correct import for App Router

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number | null;
  description?: string;
}

async function fetchProductData(slug: string) {
  try {
    const res = await fetch(`https://hackathon-apis.vercel.app/api/products/${slug}`);
    console.log("Fetching product for slug:", slug);
    if (!res.ok) {
      throw new Error(`Failed to fetch product. Status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw new Error("API Error: " + (err instanceof Error ? err.message : "Unknown error"));
  }
}

const ProductPage = () => {
  const { slug } = useParams(); // ✅ Use useParams() instead of useRouter()
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    if (slug) {
      const getProduct = async () => {
        try {
          const productData = await fetchProductData(slug as string);
          setProduct(productData);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };

      getProduct();
    }
  }, [slug]);

  const handleAddToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = cart.findIndex((item: Product) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedProduct = {
        ...cart[existingItemIndex],
        quantity: cart[existingItemIndex].quantity + 1,
      };
      cart[existingItemIndex] = updatedProduct;
    } else {
      const newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setCartMessage("Item Added to Cart Successfully!");
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 3000);
  };

  if (loading) return <p className="text-center">Loading product...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{product?.name}</h1>

      <div className="flex justify-center mb-6">
        <img src={product?.image} alt={product?.name} className="w-64 h-64 object-cover" />
      </div>

      <div className="text-center mb-6">
        <p className="text-lg font-bold">€{product?.price}</p>

        <div className="flex items-center justify-center gap-2 pt-4 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < (product?.rating ?? 0) ? "currentColor" : "none"}
              stroke="currentColor"
            />
          ))}
        </div>
        <p className="pt-2">{product?.rating ? `${product?.rating}/5` : "No Rating"}</p>
      </div>

      <div className="mb-6">
        <button
          onClick={() => handleAddToCart(product!)}
          className="flex items-center border border-black rounded-3xl text-white px-3 py-1 mx-auto "
        >
          <FaCartPlus className="text-gray-900" size={20} />
          Add to Cart
        </button>
      </div>

      <div className="flex items-center gap-2 text-gray-500">
        <span>2-4 Day Shipping</span>
      </div>

      <p className="mt-8 text-sm text-gray-600 leading-relaxed">{product?.description}</p>

      {isMessageVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white text-center py-3 px-6 rounded-lg shadow-md flex items-center justify-between w-80">
          <p>{cartMessage}</p>
          <FaTimes className="cursor-pointer" onClick={() => setMessageVisible(false)} size={18} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
