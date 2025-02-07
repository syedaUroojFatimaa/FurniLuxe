"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaShoppingCart, FaStar, FaTimes } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating?: number | null;
}

const TopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    fetch("https://hackathon-apis.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        const selectedProducts = data.slice(0, 6).map((product: Product) => ({
          ...product,
          rating: (Math.random() * 5).toFixed(1), // Assign random rating
        }));
        setProducts(selectedProducts);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleAddToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = cart.findIndex((item: Product) => item.id === product.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setCartMessage("Item Added to Cart Successfully!");
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Top Products</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="p-4">
            <div className="border rounded-lg shadow-md bg-white relative min-h-[350px] text-center">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={300} 
                height={200} 
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>

                {/* Rating Section */}
                <div className="flex justify-center items-center gap-1 text-yellow-500 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < (product.rating ?? 0) ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">{product.rating ? `${product.rating}/5` : "0/5"}</span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-black font-bold text-lg">€{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="border border-black rounded-3xl text-white px-3 py-1 transition duration-300"
                  >
                    <FaShoppingCart className="text-gray-900 size-5" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Cart Message Popup */}
      {isMessageVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white text-center py-3 px-6 rounded-lg shadow-md flex items-center justify-between w-80">
          <p>{cartMessage}</p>
          <FaTimes className="cursor-pointer" onClick={() => setMessageVisible(false)} size={18} />
        </div>
      )}
    </div>
  );
};

export default TopProducts;
