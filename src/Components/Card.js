import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const Card = (props) => {
  const [qty, setQty] = useState(1);
  const { title, price, rating, image, id } = props.item;
  const handleIncQty = () => {
    if (qty < rating.count) {
      setQty(qty + 1);
    } else {
      alert("quantity limit reached");
    }
  };

  const handleDecQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  console.log(props.item);

  let cart = useContext(CartContext);

  const handleAddToCart = (id) => {
    const isAvailable = cart.cartItem.find((item) => item.id === id);
    if (!isAvailable) {
      cart.setCartItem([
        ...cart.cartItem,
        { title, price: price * qty, image, id, qty: qty },
      ]);
    } else {
      alert("item already present in a cart");
    }
  };
  return (
    <div className="flex flex-col border-2 border-black w-[250px]  justify-between">
      <img
        className="p-2"
        src={image}
        alt="images"
        style={{ width: "300px", height: "200px", objectFit: "cover" }}
      ></img>
      <h2 className="text-lg font-bold p-2 m-0 overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </h2>

      <hr className="mt-0 mb-0"></hr>
      <div className="flex justify-between m-2 mb-0 items-center">
        <div className="flex gap-3">
          <p className="font-semibold">Rs.{price}</p>
          <p className="font-semibold"> {rating.rate} *</p>
        </div>

        <div className="border-1 border-black flex items-center gap-2 bg-green-300 ">
          <button
            className="text-lg  border-r border-black px-2 w-5"
            onClick={handleDecQty}
          >
            -
          </button>

          <span className="text-lg w-8">{qty}</span>
          <button
            className=" border-l border-black text-lg px-1 w-5"
            onClick={handleIncQty}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(id)}
        className="bg-black text-white  text-sm rounded-xl p-2 mb-2 mx-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
