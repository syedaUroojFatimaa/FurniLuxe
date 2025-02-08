"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {
  FaSearch,
  FaUser,
  FaCartPlus,
  FaTimes,
  FaShoppingCart,
} from "react-icons/fa";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import { useCart } from "../context/CartContext";

interface Product {
  _id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number | null;
  category?: string;
  discount?: number;
  reviews?: number;
}

const FurniturePage = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://hackathon-apis.vercel.app/api/products");
  //       if (!res.ok) throw new Error("Failed to fetch products");
  //       const data = await res.json();

  //       const productsWithRatings = data.map((product: Product) => ({
  //         ...product,
  //         rating: (Math.random() * 5).toFixed(1),
  //       }));

  //       setProducts(productsWithRatings);
  //     } catch (err) {
  //       setError((err as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    // console.log("✅ Params received:", params);

    // if (!params?.slug) {
    //   console.error("❌ No slug found in URL!");
    //   setLoading(false);
    //   return;
    // }

    // const slug = decodeURIComponent(params.slug as string);
    // console.log("🔍 Extracted Slug:", slug);

    async function fetchProduct() {
      try {
        console.log("⏳ Fetching product from Sanity...");
        const query = `*[_type == "product"]{
              _id,
              name,
              price,
              "image": image.asset->url,
              "slug": slug.current,
              rating,
              description
            }`;
    
        const fetchedProduct = await client.fetch(query);
        console.log("🎯 Fetched Product:", fetchedProduct);
    
        // Assign a default rating if missing
        const productsWithDefaultRating = fetchedProduct.map((product: Product) => ({
          ...product,
          rating: product.rating ?? 3.5, // Default rating if missing
        }));
    
        setProducts(productsWithDefaultRating);
      } catch (error) {
        console.error("❌ Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    

    //async function fetchProduct() {
     // try {
      //  console.log("⏳ Fetching product from Sanity...");
        //const query = `*[_type == "product"]{
          //    _id,
            //  name,
              //price,
              //"image": image.asset->url,
              //"slug": slug.current,
              //rating,
              //description
            //}`;

        //const fetchedProduct = await client.fetch(query);
        //console.log("🎯 Fetched Product:", fetchedProduct);

        // if (!fetchedProduct) {
        //   console.warn(⚠ No product found for slug '${slug}');
        // }

        //setProducts(fetchedProduct);
     // } catch (error) {
      //  console.error("❌ Error fetching product:", error);
      //} finally {
        //setLoading(false);
     // }
    //}

    

    fetchProduct();
  }, []);

  // const handleAddToCart = (product: Product) => {
  //   // Retrieve the current cart from localStorage
  //   let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  //   // Check if the product already exists in the cart
  //   const existingItemIndex = cart.findIndex((item: Product) => item.id === product.id);

  //   if (existingItemIndex !== -1) {
  //     // If the product exists, update its quantity by 1
  //     const updatedProduct = {
  //       ...cart[existingItemIndex],
  //       quantity: cart[existingItemIndex].quantity + 1
  //     };

  //     // Update the product in the cart
  //     cart[existingItemIndex] = updatedProduct;
  //   } else {
  //     // If the product does not exist, add it as a new item with quantity set to 1
  //     const newProduct = { ...product, quantity: 1 };
  //     cart.push(newProduct);
  //   }

  //   // Save the updated cart back to localStorage
  //   localStorage.setItem("cart", JSON.stringify(cart));

  //   // Show success message
  //   setCartMessage("Item Added to Cart Successfully!");
  //   setMessageVisible(true);
  //   setTimeout(() => setMessageVisible(false), 3000);
  // };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setCartMessage("Item Added to Cart Successfully!");
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 3000);
  };

  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>


      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          All Furniture Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md bg-white relative min-h-[350px]"
            >
              <Link href={`/product/${product?.slug}`} passHref>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={224}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
              </Link>

              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center pt-4 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={
                          i < (product.rating ?? 0) ? "currentColor" : "none"
                        }
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 pt-4 text-sm text-gray-500">
                  {product.rating ? `${product.rating}/5` : "0/5"}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <p className="text-black font-bold text-lg">
                    €{product.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center border border-black rounded-3xl text-white px-3 py-1 transition duration-300"
                  >
                    <FaCartPlus className="text-gray-900 size-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isMessageVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white text-center py-3 px-6 rounded-lg shadow-md flex items-center justify-between w-80">
          <p>{cartMessage}</p>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setMessageVisible(false)}
            size={18}
          />
        </div>
      )}
      <div className="px-6 md:px-12 py-8 bg-[#2A254B] mt-12">
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className="space-y-2">
              <h1>
                <Link href={"/"}>New Arrivals</Link>
              </h1>
              <h1>
                <Link href={"/"}>Best sellers</Link>
              </h1>
              <h1>
                <Link href={"/"}>Recently viewed</Link>
              </h1>
              <h1>
                <Link href={"/"}>Popular this week</Link>
              </h1>
              <h1>
                <Link href={"/"}>All Products</Link>
              </h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className="space-y-2">
              <h1>
                <Link href={"/"}>Furniture</Link>
              </h1>
              <h1>
                <Link href={"/"}>Homeware</Link>
              </h1>
              <h1>
                <Link href={"/"}>Chairs</Link>
              </h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className="space-y-2">
              <h1>
                <Link href="/about">About us</Link>
              </h1>
              <h1>
                <Link href={"/"}>Vacancies</Link>
              </h1>
              <h1>
                <Link href={"/"}>Contact us</Link>
              </h1>
              <h1>
                <Link href={"/"}>Privacy</Link>
              </h1>
              <h1>
                <Link href={"/"}>Return policy</Link>
              </h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-normal">
              Join our mailing list
            </h1>
            <div className="mt-4">
              <input
                type="text"
                placeholder="your@email.com"
                className="w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white"
              />
              <button className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-black">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className="bg-[#4E4D93] my-8" />

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-white gap-4">
          <div>
            <h1>Copyright 2025 FurniLuxe LTD</h1>
          </div>
          <div className="flex gap-4">
            <Link href={"/"}>
              <FaLinkedin size={20} />
            </Link>
            <Link href={"/"}>
              <FaFacebookSquare size={20} />
            </Link>
            <Link href={"/"}>
              <FaInstagram size={20} />
            </Link>
            <Link href={"/"}>
              <IoLogoSkype size={20} />
            </Link>
            <Link href={"/"}>
              <FaTwitter size={20} />
            </Link>
            <Link href={"/"}>
              <FaPinterest size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurniturePage;