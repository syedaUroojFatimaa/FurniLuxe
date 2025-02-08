"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, subTotal } = useCart();

  return (
    <div className="px-4 sm:px-6 lg:px-12">

      <hr className="border-gray-300 my-2" />

      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold text-center md:text-left">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <Image src="/empty-cart.jpg" alt="Empty Cart" width={200} height={200} className="mx-auto" />
            <p className="text-gray-500 mt-4">Your cart is empty. Start shopping now!</p>
            <Link href="/"><button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded">Browse Products</button></Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {cart.map((product) => (
              <div key={product._id} className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-md shadow-sm">
                <Image src={product.image} alt={product.name} width={80} height={80} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-600 hidden sm:block">{product.description}</p>
                  <p className="text-gray-800 font-semibold">Price: €{product.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(product._id, product.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <input type="number" min="1" value={product.quantity} onChange={(e) => updateQuantity(product._id, +e.target.value)} className="border text-black rounded w-12 text-center" />
                  <button onClick={() => updateQuantity(product._id, product.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
                <button onClick={() => removeFromCart(product._id)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-6 text-center md:text-right">
            <p className="text-lg font-bold">Subtotal: €{subTotal.toFixed(2)}</p>
            <Link href="/checkout"><button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Proceed to Checkout</button></Link>
          </div>
        )}
      </div>
      <hr className="border-gray-300 my-4" />
    </div>
  );
};

export default Cart;


/*
"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";


const Cart = () => {
  const { cart, updateQuantity, removeFromCart, subTotal } = useCart();

  return (
    <div>

      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
          <div className="text-center py-10">
            <Image src="/empty-cart.jpg" alt="Empty Cart" width={200} height={200} className="mx-auto" />
            <p className="text-gray-500 text-lg mt-4">Your cart is empty. Start shopping now!</p>
            <Link href="/">
              <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded">Browse Products</button>
            </Link>
          </div>
        ) : (
        <div className="grid gap-4">
          {cart.map((product) => (
            <div key={product._id} className="flex items-center gap-4 p-4 border rounded-md shadow-sm">
              <Image src={product.image} alt={product.name} width={80} height={80} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800 font-semibold">Price: €{product.price}</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => updateQuantity(product._id, product.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <input
                  type="number"
                  min="1"
                  value={product.quantity}
                  onChange={(e) => updateQuantity(product._id, +e.target.value)}
                  className="border text-black rounded w-16 text-center"
                />
                <button onClick={() => updateQuantity(product._id, product.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                <p className="text-gray-800 font-semibold">Total: €{(product.price * product.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(product._id)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 p-4 border-t text-right">
          <p className="text-lg font-bold">Subtotal: €{subTotal.toFixed(2)}</p>
          <Link href="/checkout">
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
    <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

    <section className=''>
        <div className="px-4 md:px-8 py-10 text-[#2A254B] mt-10">
          <h1 className="text-center text-2xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg ml-7">
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
              <TbTruckDelivery size={35} className="text-[#2A254B]" />
              <p className="py-4 font-normal text-2xl">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <IoIosCheckmarkCircleOutline  size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <MdOutlinePriceChange size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Unbeatable prices</p>
              <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <LuSprout size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
      </section>

    <div className="mt-[67px] max-w-[1440px] mx-auto bg-[#2A254B] p-3 lg:p-0">
  <div className="py-[96px] max-w-[1240px] mx-auto flex flex-col md:flex-row text-center md:text-start gap-4">
    <div>
      <h4 className="text-[32px] font-medium text-white">Free Delivery</h4>
      <p className="text-xl text-[#9F9F9F]">
        Enjoy free delivery on all furniture orders over $50, making it easier to style your home.
      </p>
    </div>

    <div>
      <h4 className="text-[32px] font-medium text-white">90 Days Return</h4>
      <p className="text-xl text-[#9F9F9F]">
        Hassle-free returns within 90 days for any furniture issues or changes of heart.
      </p>
    </div>

    <div>
      <h4 className="text-[32px] font-medium text-white">Secure Payment</h4>
      <p className="text-xl text-[#9F9F9F]">
        Shop confidently with 100% secure payment methods for your furniture needs.
      </p>
    </div>
  </div>
</div>


      <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-12'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
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

          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

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

        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>Copyright 2025 Furniluxe LTD</h1>
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

export default Cart;
*/

