"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const Checkout = () => {
  const { cart, subTotal } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "creditCard",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Billing & Shipping Details */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold">Billing Details</h2>
          <input type="text" name="name" placeholder="Full Name" className="border p-2 w-full" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" className="border p-2 w-full" required onChange={handleChange} />
          <input type="text" name="address" placeholder="Street Address" className="border p-2 w-full" required onChange={handleChange} />
          <input type="text" name="city" placeholder="City" className="border p-2 w-full" required onChange={handleChange} />
          <input type="text" name="zip" placeholder="ZIP Code" className="border p-2 w-full" required onChange={handleChange} />

          <h2 className="text-xl font-semibold">Payment Method</h2>
          <select name="paymentMethod" className="border p-2 w-full" onChange={handleChange}>
            <option value="creditCard">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>
<Link href="/confirm">          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">Place Order</button>
</Link>
        </form>

        {/* Order Summary */}
        <div className="p-4 border rounded-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((product) => (
                <div key={product._id} className="flex justify-between">
                  <p>{product.name} x {product.quantity}</p>
                  <p>€{(product.price * product.quantity).toFixed(2)}</p>
                </div>
              ))
            )}
          </div>
          <hr className="my-4" />
          <p className="text-lg font-bold">Total: €{subTotal.toFixed(2)}</p>
        </div>
      </div>

      <Link href="/cart" className="text-blue-600 block mt-6">Back to Cart</Link>
    </div>
  );
};

export default Checkout;
