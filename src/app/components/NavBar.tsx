"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark as client-side rendering
  }, []);

  if (!isClient) return null; // Render nothing on the server

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
    </div>
  );
};

export default NavBar;
