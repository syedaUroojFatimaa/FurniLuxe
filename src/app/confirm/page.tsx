"use client";

import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Checkout() {
  const router = useRouter();
  
  // Generate a unique order number (6-digit random ID)
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div>

          <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-purple-700">Thank You!</h1>
      <p className="text-green-600 text-xl mt-2">Your order is confirmed.</p>
      <p className="text-gray-500 text-md mt-1">
        Order #{orderId} | Estimated Delivery: 3-5 Days
      </p>

      {/* Icon */}
      <CheckCircle className="text-green-500 w-28 h-28 mt-6" />

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button 
          className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition"
        >
          Go to Shipping
        </button>
        <Link href="/">
        <button 
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg text-lg hover:bg-gray-400 transition"
        >
          Back
        </button>
        </Link>
        
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
}
