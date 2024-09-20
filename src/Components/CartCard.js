import React from "react";

const CartCard = ({ item }) => {
  return (
    <div className="w-[600px] mx-auto flex justify-start border-black border-2 gap-10 mt-1 bg-slate-100 rounded-lg">
      <img
        src={item.image}
        style={{
          width: "80px",
          height: "100px",
          marginLeft: "10px",
          objectFit: "cover",
        }}
      ></img>
      <p className="w-[400px]">{item.title}</p>
      <p className="w-[100px]">{item.qty}</p>
      <p className="w-[100px]">Rs.{item.price}</p>
    </div>
  );
};

export default CartCard;
