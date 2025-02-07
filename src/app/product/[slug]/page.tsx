"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Star } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number;
  description?: string;
}

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("✅ Params received:", params);

    if (!params?.slug) {
      console.error("❌ No slug found in URL!");
      setLoading(false);
      return;
    }

    const slug = decodeURIComponent(params.slug as string);
    console.log("🔍 Extracted Slug:", slug);

    async function fetchProduct() {
      try {
        console.log("⏳ Fetching product from Sanity...");
        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          name,
          price,
          "image": image.asset->url,
          "slug": slug.current,
          rating,
          description
        }`;

        const fetchedProduct = await client.fetch(query, { slug });
        console.log("🎯 Fetched Product:", fetchedProduct);

        if (!fetchedProduct) {
          console.warn(`⚠️ No product found for slug '${slug}'`);
        }

        setProduct(fetchedProduct);
      } catch (error) {
        console.error("❌ Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params]);

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (!product) return <p className="text-red-500 text-center mt-10">❌ Product not found</p>;

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">{product.name}</h1>
      <div className="flex justify-center mt-4">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        ) : (
          <p className="text-gray-500">No image available</p>
        )}
      </div>
      <p className="text-lg font-bold text-center mt-4">€{product.price}</p>
      <div className="flex justify-center items-center gap-2 text-yellow-500 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill={i < (product.rating ?? 0) ? "currentColor" : "none"} stroke="currentColor" />
        ))}
      </div>
      <p className="text-center">{product.rating ? `${product.rating}/5` : "No Rating"}</p>
      <p className="mt-6 text-sm text-gray-600">{product.description || "No description available."}</p>
    </div>
  );
}
