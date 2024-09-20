import { createContext, useState } from "react";

//create a context
export const CartContext = createContext(null);

//create a custom provider

export const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
