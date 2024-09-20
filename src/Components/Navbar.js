import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Navbars = () => {
  const cart = useContext(CartContext);

  return (
    <div className=" w-full  bg-slate-400  flex justify-between">
      <div className=" p-2 ">
        <img
          src="https://t3.ftcdn.net/jpg/02/98/18/60/240_F_298186090_Rimyxol4jsYvYbQg1i6sttQ5N3oebXgt.jpg"
          alt="logo"
          style={{
            width: "120px",
            height: "70px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex items-center list-none gap-3 text-white font-bold text-xl px-2 ">
        <NavLink to="/" className="text-white no-underline">
          Home
        </NavLink>
        <NavLink to="/cart" className="text-white no-underline">
          Cart {cart.cartItem.length}
        </NavLink>

        <div className="w-20 h-20 rounded-full border-white border-2">
          <img src=""></img>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
