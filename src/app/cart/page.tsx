"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image"

const Cart = () => {
    const [cart, setCart] = useState<
        { id: string; name: string; image: string; description: string; price: number; quantity: number }[]
    >([]);

    const addToCart = (newProduct: { id: string; name: string; image: string; description: string; price: number }) => {
        setCart((prevCart) => {
            if (!Array.isArray(prevCart)) return [{ ...newProduct, quantity: 1 }];

            const existingIndex = prevCart.findIndex((item) => item.id === newProduct.id);

            if (existingIndex !== -1) {
                return prevCart.map((item, index) =>
                    index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...newProduct, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // ✅ Fix: Calculate subtotal
    const subTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div>
            <header className="bg-white">
                <div className="container mx-auto px-4 flex items-center justify-between py-4">
                    <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
                    <h1 className="text-3xl font-normal text-center">Avion</h1>
                    <div className="flex items-center space-x-4">
                        <Link href="/cart">
                            <FaShoppingCart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
                        </Link>
                        <FaUser className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
                    </div>
                </div>
            </header>

            <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

            <div className="container mx-auto p-4">
                <h1 className="text-2xl text-[#2A254B] font-serif font-bold mb-4">Your shopping cart</h1>
                <div className="grid gap-4">
                    {cart.map((product) => (
                        <div key={product.id} className="flex items-center gap-4 p-4 border rounded-md shadow-sm">
                            <Image src={product.image} alt={product.name} width={24} height={24} className="w-24 h-24 object-cover rounded" />
                            <div className="flex-1">
                                <h2 className="text-lg font-bold">{product.name}</h2>
                                <p className="text-gray-600">{product.description}</p>
                                <p className="text-gray-800 font-semibold">Price: ${product.price}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={() => updateQuantity(product.id, product.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                                <input
                                    type="number"
                                    min="1"
                                    value={product.quantity}
                                    onChange={(e) => updateQuantity(product.id, +e.target.value)}
                                    className="border text-black rounded w-16 text-center"
                                />
                                <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                                <p className="text-gray-800 font-semibold">Total: ${product.price * product.quantity}</p>
                                <button onClick={() => removeFromCart(product.id)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 border-t text-slate-800">
                    <p className="text-right text-lg font-bold">Subtotal: ${subTotal.toFixed(2)}</p>
                    <p className="text-right text-sm text-gray-500">
                        Taxes and shipping are calculated at checkout.
                    </p>
                    <button className="mt-4 bg-slate-800 text-white py-2 px-4 rounded">
                        Go to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
