"use client";
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

/*
original code having errors
import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

const Cart = () => {
    const [cart, setCart] = useState(() => {
        if (typeof window !== "undefined") {
            const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
            return storedCart.length > 0 ? storedCart : [];
        }
        return [];
    });

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (newProduct) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === newProduct.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === newProduct.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...newProduct, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
                            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
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
                    <p className="text-right text-lg font-bold">Subtotal: ${subTotal}</p>
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
*/
