import React from "react";
import Logo from "../Components/Assets/logo.png";
import Cart from "../Components/Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
const NavHeader = () => {
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = useState("shop");
  const { cartCounter } = useContext(ShopContext);
  return (
    <div className="[box-shadow:0_1px_3px_-2px_black]">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5">
        <nav className="flex items-center justify-between border-gray-300 bg-white relative transition-all">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Logo} className="w-[50px] md:w-[80px]" alt="Logo" />
            <h1 className="text-[20px] md:text-[30px] font-medium text-[#171717]">
              SHOPPER
            </h1>
          </div>

          {/* Desktop Menu */}
          <div>
            <div className="hidden sm:flex items-center gap-10 text-[20px] text-[#626262]">
              <li
                onClick={() => {
                  setMenu("shop");
                }}
                className="cursor-pointer gap-4 flex flex-col items-center justify-center"
              >
                <Link to="/">Shop</Link>{" "}
                {menu === "shop" ? (
                  <hr className="border-0 w-[100%] h-[3px] bg-[#ff4141]" />
                ) : (
                  ""
                )}
              </li>
              <li
                onClick={() => {
                  setMenu("mens");
                }}
                className="cursor-pointer gap-4 flex flex-col items-center justify-center"
              >
                <Link to="/men">Men</Link>{" "}
                {menu === "mens" ? (
                  <hr className="border-0 w-[100%] h-[3px] bg-[#ff4141]" />
                ) : (
                  ""
                )}
              </li>
              <li
                onClick={() => {
                  setMenu("women");
                }}
                className="cursor-pointer gap-4 flex flex-col items-center justify-center"
              >
                <Link to="/women">Women</Link>{" "}
                {menu === "women" ? (
                  <hr className="border-0 w-[100%] h-[3px] bg-[#ff4141]" />
                ) : (
                  ""
                )}
              </li>
              <li
                onClick={() => {
                  setMenu("kids");
                }}
                className="cursor-pointer gap-4 flex flex-col items-center justify-center"
              >
                <Link to="kids">Kids</Link>{" "}
                {menu === "kids" ? (
                  <hr className="border-0 w-[100%] h-[3px] bg-[#ff4141]" />
                ) : (
                  ""
                )}
              </li>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-5">
            <button className="w-[100px] h-[40px] text-[18px] rounded-4xl border text-[#515151] border-[#7a7a7a] cursor-pointer active:bg-[#f3f3f3]">
              <Link to="/login">Login</Link>
            </button>
            <Link to="/cart">
              <img src={Cart} alt="Cart" className="cursor-pointer" />
            </Link>
            <div className="bg-red-500 w-[25px] h-[25px] rounded-full text-white flex justify-center items-center -ml-[28px] -mt-[25px]">
              {cartCounter()}
            </div>
          </div>
          <button
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            aria-label="Menu"
            className="sm:hidden"
          >
            {/* Menu Icon SVG */}
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="21" height="1.5" rx=".75" fill="#426287" />
              <rect
                x="8"
                y="6"
                width="13"
                height="1.5"
                rx=".75"
                fill="#426287"
              />
              <rect
                x="6"
                y="13"
                width="15"
                height="1.5"
                rx=".75"
                fill="#426287"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute top-[80px] left-0 w-full bg-white shadow-md py-8 flex-col items-center gap-8 px-5 text-lg md:hidden`}
          >
            <li
              onClick={() => {
                setMenu("shop");
              }}
              className="cursor-pointer gap-4 flex flex-col items-center justify-center"
            >
              <Link to="/">Shop</Link>{" "}
              {menu === "shop" ? (
                <hr className="border-0 w-[100%] h-[3px] bg-[#ff4141]" />
              ) : (
                ""
              )}
            </li>
            <li
              onClick={() => {
                setMenu("mens");
              }}
              className="cursor-pointer gap-4 flex flex-col items-center justify-center"
            >
              <Link to="/men">Men</Link>{" "}
              {menu === "mens" ? (
                <hr className="border-0 w-[100%] h-[3px] bg-[#ff4141]" />
              ) : (
                ""
              )}
            </li>
            <li
              onClick={() => {
                setMenu("women");
              }}
              className="cursor-pointer gap-4 flex flex-col items-center justify-center"
            >
              <Link to="/women">Women</Link>{" "}
              {menu === "women" ? (
                <hr className="border-0 w-[100%] h-[3px] bg-[#ff4141]" />
              ) : (
                ""
              )}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
              }}
              className="cursor-pointer gap-4 flex flex-col items-center justify-center"
            >
              <Link to="kids">Kids</Link>{" "}
              {menu === "kids" ? (
                <hr className="border-0 w-[100%] h-[3px] bg-[#ff4141]" />
              ) : (
                ""
              )}
            </li>
            <button className="w-[100px] h-[40px] text-[18px] rounded-4xl border text-[#515151] border-[#7a7a7a] cursor-pointer active:bg-[#f3f3f3]">
              <Link to="/login">Login</Link>
            </button>
            <Link to="/cart">
              <img src={Cart} alt="Cart" className="cursor-pointer" />
            </Link>
            <div className="bg-red-500 w-[20px] h-[20px] rounded-full text-white flex justify-center items-center -mt-[80px] -mr-[30px]">
              {cartCounter()}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavHeader;
