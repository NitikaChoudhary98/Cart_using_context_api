import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import CartCard from "./CartCard";

const Cart = () => {
  let cart = useContext(CartContext);
  const [cartData] = useState(cart.cartItem);
  let totalprice = cartData.reduce((a, b) => a + b.price, 0);
  console.log(cartData);

  console.log("cart in cart", cart.cartItem);
  return (
    <>
      <div>
        {cartData.length > 0 ? (
          cartData.map((item) => <CartCard item={item} />)
        ) : (
          <p>Your Cart is empty</p>
        )}
      </div>
      <div className="">Your bill is : {totalprice.toFixed(2)}</div>
    </>
  );
};

export default Cart;
