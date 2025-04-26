import Logo from "../Components/Assets/logo.png";
import Cart from "../Components/Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { cartCounter } = useContext(ShopContext);
  return (
    <div className="[box-shadow:0_1px_3px_-2px_black]">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Logo} alt="Logo" />
            <h1 className="text-[30px] font-medium text-[#171717]">SHOPPER</h1>
          </div>
          <ul className="flex gap-10 text-[20px] text-[#626262]">
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
          </ul>
          <div className="flex items-center gap-5">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
