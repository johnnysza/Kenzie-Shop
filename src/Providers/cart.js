import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@kenzieShop: context cartList")) || []
  );
  localStorage.setItem("@kenzieShop: context cartList", JSON.stringify(cart));

  const addCart = (element) => {
    setCart([...cart, element]);
  };

  const removeFromCart = (element) => {
    const newCart = cart.filter((item) => element.id !== item.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, removeFromCart, addCart }}>
      {children}
    </CartContext.Provider>
  );
};
