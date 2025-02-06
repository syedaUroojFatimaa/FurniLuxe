"use client";
{/*
import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { FaSearch, FaUser, FaCartPlus, FaTimes, FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number | null;
  category?: string;
  discount?: number;
  reviews?: number;
}

const DecoPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://hackathon-apis.vercel.app/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        const productsWithRatings = data.map((product: Product) => ({
          ...product,
          rating: (Math.random() * 5).toFixed(1),
        }));

        setProducts(productsWithRatings);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    const existingItemIndex = cart.findIndex((item: Product) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      const updatedProduct = { 
        ...cart[existingItemIndex],
        quantity: cart[existingItemIndex].quantity + 1 
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
  
  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
        <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />


      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Home Deco Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md bg-white relative min-h-[350px]">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-lg" />
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
                        fill={i < (product.rating ?? 0) ? "currentColor" : "none"}
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 pt-4 text-sm text-gray-500">
                    {product.rating ? `${product.rating}/5` : "0/5"}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <p className="text-black font-bold text-lg">€{product.price}</p>
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
          <FaTimes className="cursor-pointer" onClick={() => setMessageVisible(false)} size={18} />
        </div>
      )}
    </div>
  );
};

export default DecoPage;
 */}



import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaCartPlus, FaTimes } from "react-icons/fa";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number | null;
  category?: string;
  discount?: number;
  reviews?: number;
}

const DecoPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://hackathon-apis.vercel.app/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        const productsWithRatings = data.map((product: Product) => ({
          ...product,
          rating: (Math.random() * 5).toFixed(1),
        }));

        setProducts(productsWithRatings);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    // Retrieve the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product already exists in the cart
    const existingItemIndex = cart.findIndex((item: Product) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the product exists, update its quantity by 1
      const updatedProduct = {
        ...cart[existingItemIndex],
        quantity: cart[existingItemIndex].quantity + 1,
      };

      // Update the product in the cart
      cart[existingItemIndex] = updatedProduct;
    } else {
      // If the product does not exist, add it as a new item with quantity set to 1
      const newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show success message
    setCartMessage("Item Added to Cart Successfully!");
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 3000);
  };

  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
       <header className="container mx-auto flex items-center justify-between py-6 px-6 md:px-12 text-blue-950">
        {/* Logo */}
        <h1 className="text-5xl md:text-4xl font-bold text-black ml-10">
          Furni<span className="font-light text-blue-950">Luxe</span>
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/furniture" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">
            Furniture
          </Link>
          <Link href="/deco" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">
            Home Decor
          </Link>
          <Link href="/aboutus" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">
            About Us
          </Link>
          <Link href="/Contact" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex gap-4 mr-4">
          <FaSearch className="text-blue-950 cursor-pointer hover:text-blue-900" size={20} />
          <Link href="/cart">
            <FaShoppingCart className="text-blue-950 cursor-pointer hover:text-blue-900" size={20} />
          </Link>

          <Link href="/LogIn">
            <p className="text-blue-950 cursor-pointer ml-2 hover:text-blue-900">
                <ClerkProvider>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              </ClerkProvider>
            </p>
          </Link>
        </div>
      </header>

      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Home Deco Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md bg-white relative min-h-[350px]">
              <Link href={`/product/${product.slug}`} passHref>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-lg cursor-pointer"
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
                        fill={i < (product.rating ?? 0) ? "currentColor" : "none"}
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 pt-4 text-sm text-gray-500">
                    {product.rating ? `${product.rating}/5` : "0/5"}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <p className="text-black font-bold text-lg">€{product.price}</p>
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
          <FaTimes className="cursor-pointer" onClick={() => setMessageVisible(false)} size={18} />
        </div>
      )}
            <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-12'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>New Arrivals</Link></h1>
              <h1><Link href={'/'}>Best sellers</Link></h1>
              <h1><Link href={'/'}>Recently viewed</Link></h1>
              <h1><Link href={'/'}>Popular this week</Link></h1>
              <h1><Link href={'/'}>All Products</Link></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className='space-y-2'>
              <h1><Link href='/about'>About us</Link></h1>
              <h1><Link href={'/'}>Vacancies</Link></h1>
              <h1><Link href={'/'}>Contact us</Link></h1>
              <h1><Link href={'/'}>Privacy</Link></h1>
              <h1><Link href={'/'}>Return policy</Link></h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-normal">Join our mailing list</h1>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-black'>
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
          <h1>Copyright 2025 FurniLuxe LTD</h1>
          </div>
          <div className='flex gap-4'>
            <Link href={'/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecoPage;
