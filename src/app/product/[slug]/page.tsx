"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Star, Minus, Plus, CheckCircle } from "lucide-react";
import { useCart } from "@/app/context/CartContext"; // Corrected import
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number;
  description?: string;
}

export default function ProductPage() {
  const { addToCart } = useCart();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);
  
  useEffect(() => {
    if (!params?.slug) {
      setLoading(false);
      return;
    }

    const slug = decodeURIComponent(params.slug as string);

    async function fetchProduct() {
      try {
        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          name,
          price,
          "image": image.asset->url,
          "slug": slug.current,
          rating,
          description
        }`;

        const fetchedProduct = await client.fetch(query, { slug });
        setProduct({ ...fetchedProduct, rating: fetchedProduct.rating ?? 3.5 });
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setCartMessage("Item Added to Cart Successfully!");
    setMessageVisible(true);
    
    // Hide message after 3 seconds
    setTimeout(() => setMessageVisible(false), 3000);
  };
  

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (!product) return <p className="text-red-500 text-center mt-10">❌ Product not found</p>;

  return (
    <div>

      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />
      <div className="relative">
      {isMessageVisible && (
  <div className="fixed top-4 right-4 bg-green-500 text-white text-center py-3 px-6 rounded-lg shadow-md flex items-center justify-between w-80">
    <p>{cartMessage}</p>
    <FaTimes
      className="cursor-pointer"
      onClick={() => setMessageVisible(false)}
      size={18}
    />
  </div>
)}

      <div className="max-w-screen-xl mx-auto p-8 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          {product.image ? (
            <Image src={product.image} alt={product.name} width={600} height={600} className="rounded-xl object-cover shadow-lg" />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-normal text-gray-900">{product.name}</h1>

          <div className="flex items-center gap-2 text-md text-yellow-300 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} fill={i < (product.rating ?? 0) ? "currentColor" : "none"} stroke="currentColor" />
            ))}
            <span className="text-gray-600 text-md">{product.rating ? `${product.rating}/5` : "No Rating"}</span>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-2xl font-medium text-gray-800">€{product.price}</p>
            <div className="flex items-center border px-3 py-1">
              <button className="hover:bg-gray-300 transition" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                <Minus size={20} />
              </button>
              <span className="mx-4 text-xl font-bold">{quantity}</span>
              <button className="hover:bg-gray-300 transition" onClick={() => setQuantity((prev) => prev + 1)}>
                <Plus size={20} />
              </button>
            </div>
          </div>

          <p className="mt-5 text-md text-gray-700 leading-relaxed">{product.description || "No description available."}</p>

          <button
            className="mt-6 bg-blue-950 text-white text-lg px-2 py-3 shadow-md hover:bg-blue-900 transition"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
        </div>
        </div>


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
}


/*"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Star, Minus, Plus, CheckCircle } from "lucide-react";
import { useCart } from "@/app/context/CartContext"; // Corrected import
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number;
  description?: string;
}

export default function ProductPage() {
  const { addToCart } = useCart();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
   const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);
  
  useEffect(() => {
    if (!params?.slug) {
      setLoading(false);
      return;
    }

    const slug = decodeURIComponent(params.slug as string);

    async function fetchProduct() {
      try {
        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          name,
          price,
          "image": image.asset->url,
          "slug": slug.current,
          rating,
          description
        }`;

        const fetchedProduct = await client.fetch(query, { slug });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setCartMessage("Item Added to Cart Successfully!");
    setMessageVisible(true);
    
    // Hide message after 3 seconds
    setTimeout(() => setMessageVisible(false), 3000);
  };
  

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (!product) return <p className="text-red-500 text-center mt-10">❌ Product not found</p>;

  return (
    <div>
      <header className="container mx-auto flex items-center justify-between py-6 px-6 md:px-12 text-blue-950">
        <h1 className="text-5xl md:text-4xl font-bold text-black ml-10">
          Furni<span className="font-light text-blue-950">Luxe</span>
        </h1>

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
      </header>
      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

    <div className="relative">
      {isMessageVisible && (
  <div className="fixed top-4 right-4 bg-green-500 text-white text-center py-3 px-6 rounded-lg shadow-md flex items-center justify-between w-80">
    <p>{cartMessage}</p>
    <FaTimes
      className="cursor-pointer"
      onClick={() => setMessageVisible(false)}
      size={18}
    />
  </div>
)}

      <div className="max-w-screen-xl mx-auto p-8 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          {product.image ? (
            <Image src={product.image} alt={product.name} width={600} height={600} className="rounded-xl object-cover shadow-lg" />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-normal text-gray-900">{product.name}</h1>

          <div className="flex items-center gap-2 text-md text-yellow-300 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} fill={i < (product.rating ?? 0) ? "currentColor" : "none"} stroke="currentColor" />
            ))}
            <span className="text-gray-600 text-md">{product.rating ? `${product.rating}/5` : "No Rating"}</span>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-2xl font-medium text-gray-800">€{product.price}</p>
            <div className="flex items-center border px-3 py-1">
              <button className="hover:bg-gray-300 transition" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                <Minus size={20} />
              </button>
              <span className="mx-4 text-xl font-bold">{quantity}</span>
              <button className="hover:bg-gray-300 transition" onClick={() => setQuantity((prev) => prev + 1)}>
                <Plus size={20} />
              </button>
            </div>
          </div>

          <p className="mt-5 text-md text-gray-700 leading-relaxed">{product.description || "No description available."}</p>

          <button
            className="mt-6 bg-blue-950 text-white text-lg px-2 py-3 shadow-md hover:bg-blue-900 transition"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
        </div>
        </div>


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
}*/