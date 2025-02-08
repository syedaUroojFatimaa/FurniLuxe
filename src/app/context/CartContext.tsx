"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Product type based on Sanity's data
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number | null;
  category?: string;
  discount?: number;
  reviews?: number;
  description?: string; // ✅ Allow undefined values
  quantity?: number; // ✅ Added quantity to prevent TypeScript errors
}

// Cart context type
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  subTotal: number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (newProduct: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];

      // Find product by _id
      const existingProduct = updatedCart.find((item) => item._id === newProduct._id);

      if (existingProduct) {
        // If the product exists, increase its quantity
        existingProduct.quantity = (existingProduct.quantity || 0) + 1;
      } else {
        // If it's a new product, add it to the cart with quantity 1
        updatedCart.push({ ...newProduct, quantity: 1 });
      }

      return updatedCart;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, quantity || 1) } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const subTotal = cart.reduce((acc, product) => acc + product.price * (product.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, subTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for accessing the cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
