"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <ClerkProvider>
      <div>
        <header className="container mx-auto flex items-center justify-between py-6 px-6 md:px-12 text-blue-950">
          
          {/* Logo */}
          <h1 className="text-5xl md:text-4xl font-bold text-black ml-10">
            Furni<span className="font-light text-blue-950">Luxe</span>
          </h1>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-blue-900" onClick={() => setIsOpen(true)}>
              <FiMenu size={28} />
            </button>
          </div>

          {/* Desktop Menu */}
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
            <Link href="/contact" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">
              Contact
            </Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex gap-4 mr-4">
            <Link href="/cart">
              <FaShoppingCart className="text-blue-950 cursor-pointer hover:text-blue-900" size={20} />
            </Link>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        {/* Mobile Sidebar Menu */}
        <div className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-gray-700" onClick={() => setIsOpen(false)}>
            <FiX size={28} />
          </button>

          {/* Mobile Navigation */}
          <nav className="flex flex-col mt-20 gap-6 px-6">
            <Link href="/furniture" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">Furniture</Link>
            <Link href="/deco" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">Home Decor</Link>
            <Link href="/aboutus" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">About Us</Link>
            <Link href="/contact" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">Contact</Link>
            <Link href="/cart" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">Cart</Link>
            
            {/* Account Section in Mobile Menu */}
            <div className="border-t pt-4">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
        </div>
      </div>
    </ClerkProvider>
  );
};

export default Navbar;

/*"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="container mx-auto flex items-center justify-between py-6 px-6 md:px-12 text-blue-950">
        <h1 className="text-5xl md:text-4xl font-bold text-black ml-10">
          Furni<span className="font-light text-blue-950">Luxe</span>
        </h1>
<div className="flex md:hidden items-center gap-4">
      <button className="text-blue-900" onClick={() => setIsOpen(true)}>
        <FiMenu size={28} />
      </button>
      
    </div>
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
          <Link href="/contact" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">
            Contact
          </Link>
        </nav>

      
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

        <div className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        <button className="absolute top-6 right-6 text-gray-700" onClick={() => setIsOpen(false)}>
          <FiX size={28} />
        </button>

        <nav className="flex flex-col mt-20 gap-6 px-6">
          <Link href="/furniture" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">Furniture</Link>
          <Link href="/deco" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">Home Decor</Link>
          <Link href="/aboutus" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">About Us</Link>
          <Link href="/contact" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">Contact</Link>
          <Link href="/cart" className="text-xl font-medium hover:text-blue-900 transition text-blue-950">Cart</Link>
        </nav>
      </div>

      <div className="flex md:hidden items-center gap-4">
      <button className="text-blue-900" onClick={() => setIsOpen(true)}>
        <FiMenu size={28} />
      </button>
      
    </div>

      </header>
    </div>
  );
};

export default Navbar;
*/