import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaSearch, FaUser, FaCartPlus, FaTimes, FaShoppingCart } from "react-icons/fa";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

import Link from "next/link";
export default function Contact() {
  return (
<div>
      

<hr className="border-t border-gray-300 my-1 ml-6 mr-6" />


    <div className="max-w-[1440px] mx-auto">
      {/* Heading Section */}
      <div className="space-y-3 mt-10 md:mt-[98px] text-center">
        <h2 className="text-3xl sm:text-4xl font-normal text-[#2A254B]">Contact Our Furniture Experts</h2>
        <p className="text-[#6E6E6E] max-w-[700px] mx-auto">
          Have questions about our premium furniture collections? Feel free to reach out to our team! 
          We’re here to assist you with design advice, product details, and any inquiries.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-8 pt-10 px-4 sm:px-[75px] md:px-4 lg:px-24 xl:px-[191px]">
        {/* Contact Details */}
        <div className="flex flex-col gap-6 max-w-[393px] w-full mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-xl text-[#333]">
              <MapPin />
            </span>
            <div>
              <h3 className="text-2xl font-semibold">Showroom Address</h3>
              <p>789 Luxury Furniture Lane, Los Angeles, CA 90001, USA</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl text-[#333]">
              <Phone />
            </span>
            <div>
              <h3 className="text-2xl font-semibold">Contact Number</h3>
              <p>Phone: +(123) 456-7890</p>
              <p>Customer Support: +(123) 987-6543</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl text-[#333]">
              <Clock />
            </span>
            <div>
              <h3 className="text-2xl font-semibold">Business Hours</h3>
              <p>Monday–Friday: 10:00 AM–8:00 PM</p>
              <p>Saturday–Sunday: 10:00 AM–6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-6 max-w-[635px] w-full mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your Name"
              className="border border-[#C1C1C1] rounded-lg placeholder:text-gray-500 py-3 px-4 w-full mt-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-[#C1C1C1] rounded-lg placeholder:text-gray-500 py-3 px-4 w-full mt-2"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter the subject"
              className="border border-[#C1C1C1] rounded-lg placeholder:text-gray-500 py-3 px-4 w-full mt-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              className="border border-[#C1C1C1] rounded-lg placeholder:text-gray-500 py-3 px-4 w-full mt-2 resize-none"
              rows={5}
            />
          </div>
          <button className=" text-xl py-2 px-5 bg-[#2A254B] text-white hover:bg-[#332d5a] transition-colors w-fit mx-auto md:mx-0">
            Submit
          </button>
        </div>
      </div>
    </div>

    <div className="mt-[67px] max-w-[1440px] mx-auto bg-[#2A254B] p-3 lg:p-0">
  <div className="py-[96px] max-w-[1240px] mx-auto flex flex-col md:flex-row text-center md:text-start gap-4">
    {/* Free Delivery */}
    <div>
      <h4 className="text-[32px] font-medium text-white">Free Delivery</h4>
      <p className="text-xl text-[#9F9F9F]">
        Enjoy free delivery on all furniture orders over $50, making it easier to style your home.
      </p>
    </div>

    {/* 90 Days Return */}
    <div>
      <h4 className="text-[32px] font-medium text-white">90 Days Return</h4>
      <p className="text-xl text-[#9F9F9F]">
        Hassle-free returns within 90 days for any furniture issues or changes of heart.
      </p>
    </div>

    {/* Secure Payment */}
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
