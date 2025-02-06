"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Hero() {
  return (
    <div className="relative mt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/beg.jpg')",
        }}
      ></div>

      {/* Parent Content */}
      <div className="relative z-10">
        {/* Header */}
        
        {/* Cart Modal */}


        {/* Hero */}
        <section className="flex flex-col items-center justify-center h-screen px-6 md:px-12">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl md:text-6xl font-medium mt-8 text-black">
              Welcome to FurniLuxe!
            </h1>
            <p className="mt-8 text-xl font-medium text-gray-950">
              Discover stunning furniture and décor to transform your home into
              a space you love. Start shopping today for the best deals and
              designs!
            </p>
            <div className="mt-8">
              <Link href="/furniture">
              <button className="px-8 py-3 bg-[#2A254B] text-white rounded-lg shadow-lg hover:bg-[#352f5c] transition text-lg font-normal">
                Start Shopping
              </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
