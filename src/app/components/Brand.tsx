import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const Brand = () => {
  return (
    <>
      <section className=''>
        <div className="px-4 md:px-8 py-10 text-[#2A254B] mt-10">
          {/* Title */}
          <h1 className="text-center text-2xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg ml-7">
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
    </>
  );
};

export default Brand;