"use client"
import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import Image from 'next/image';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div>





        <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

        
      
    <div>
      {/* Section 1 */}
      <div className="relative">
        <h1 className="text-2xl sm:text-4xl font-normal text-gray-950 ml-4 sm:ml-14 pt-10 sm:pt-16">
          A brand built on the love of craftsmanship,
        </h1>
        <p className="text-2xl sm:text-4xl font-normal text-gray-950 ml-4 sm:ml-14 pt-2 sm:pt-1">
          quality and outstanding customer service
        </p>
        <Link href="/furniture">
          <button className="absolute top-0 right-0 mt-16 sm:mt-20 mr-4 sm:mr-40 bg-gray-50 text-black py-3 sm:py-4 px-6 sm:px-8">
            View Products
          </button>
        </Link>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-violet-950 mt-10 sm:mt-20 mx-4 lg:ml-32 w-full lg:w-[550px] h-auto lg:h-[380px] p-6 lg:p-0">
          <h1 className="text-xl sm:text-4xl text-white ml-4 lg:ml-16 pt-4 lg:pt-16">
            It started with a small idea
          </h1>
          <p className="text-white text-sm sm:text-base ml-4 lg:ml-16 mt-4">
            A global brand with local beginnings, our story began in a
          </p>
          <p className="text-white text-sm sm:text-base ml-4 lg:ml-16">
            small studio in South London in early 2014.
          </p>
          <div className="ml-4 lg:ml-16 pt-8 lg:pt-36">
            <Link href="/furniture">
              <button className="bg-violet-400 text-white py-2 sm:py-3 px-4 sm:px-6">
                View Collection
              </button>
            </Link>
          </div>
        </div>
        <div className="pt-10 sm:pt-20">
          <Image
            src="/Image Block.png"
            alt="Image Block showcasing brand identity"
            width={500}
            height={800}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="pt-10 sm:pt-14 flex flex-col lg:flex-row">
        <div className="w-full lg:w-auto">
          <Image
            src="/bfSofa.jpg"
            alt="Background image of a sofa"
            width={750}
            height={700}
          />
        </div>
        <div className="bg-gray-50 h-auto lg:h-[590px] w-full lg:w-[700px] text-gray-900 font-normal py-8 lg:pt-16 px-6 lg:px-16">
          <h1 className="text-lg sm:text-2xl">
          Our service isn&lsquo;t just personal, it&lsquo;s          </h1>
          <h1 className="text-lg sm:text-2xl mt-2">hyper personally exquisite</h1>
          <p className="pt-6">
            When we started Avion, the idea was simple. Make high-quality furniture
          </p>
          <p>affordable and available for the mass market.</p>
          <p className="pt-6">
            Handmade, and lovingly crafted furniture and homeware is what we live,
          </p>
          <p>
            breathe, and design, so our Chelsea boutique became the hotbed for the
          </p>
          <p>London interior design community.</p>
          <button className="bg-white mt-5 lg:mt-52 py-2 sm:py-3 px-4 sm:px-6 text-gray-700 hover:bg-slate-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>

<section className='bg-white'>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            {/* Feature 1 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
              <TbTruckDelivery size={35} className="text-[#2A254B]" />
              <p className="py-4 font-normal text-2xl">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <IoIosCheckmarkCircleOutline  size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <MdOutlinePriceChange size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Unbeatable prices</p>
              <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <LuSprout size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center pt-12 bg-gray-50">
        <div className="bg-white rounded shadow-md p-8 h-full w-[1100px] text-center">
          <h1 className="text-3xl font-normal text-gray-800 mb-8">
            Join the club and get the benefits
          </h1>
          <p className="text-gray-600 font-normal text-lg mb-0">
            Sign up for our newsletter and receive exclusive offers on new
          </p>
          <p className="text-gray-600 font-normal text-lg mb-6">
          ranges,
          sales, pop-up stores, and more.
          </p>
          <form className="flex items-center justify-center mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full max-w-md px-4 py-4 border border-gray-300 "
              required
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gray-950 mr-7 text-white hover:bg-gray-700 transition duration-300"
            >
              Sign up
            </button>
          </form>

        </div>
      </div>
      <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-8'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-gray-500 w-full sm:w-auto">
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
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-gray-500 w-full sm:w-auto">
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
            <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
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
  )
}