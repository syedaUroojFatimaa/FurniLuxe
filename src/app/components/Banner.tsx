import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className=" pt-10">
      <div className="flex flex-col md:flex-row items-center md:items-stretch h-screen w-full">
        {/* Left Section */}
        <div className="bg-white flex flex-col justify-center text-[#2A254B] font-normal px-6 md:px-14 w-full md:w-1/2">
          {/* Title */}
          <h1 className="text-center md:text-left text-4xl font-semibold leading-tight">
            From a studio in London to a global brand
          </h1>
          <p className="text-center md:text-left text-2xl font-light mt-4">
            Over 400 outlets
          </p>

          {/* Description */}
          <p className="mt-10 text-center md:text-left font-medium leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market.
          </p>
          <p className="mt-4 text-center md:text-left font-medium leading-relaxed">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#2A254B] text-white py-3 px-8 mt-10 hover:bg-blue-900 transition">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 h-full">
          <Image
            src="/banner.jpg"
            alt="banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
