import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Remove_Icon from "../Components/Assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_products, getTotalCartAmount, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="container mx-auto py-10 px-5 md:px-10 lg:px-20">
      <div className="grid grid-cols-[0.5fr_1fr_0.25fr_0.25fr_0.25fr_0.25fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center py-[10px] text-[14px] md:text-[18px] font-medium text-[#454545] gap-[15px] md:gap-[85px]">
        <p>Products</p>
        <p className="hidden md:block">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="border-0 h-[3px] bg-[#e2e2e2]" />
      {all_products.map((ele) => {
        if (cartItems[ele.id] > 0) {
          return (
            <div>
              <div className="grid grid-cols-[2fr_0.25fr_0.25fr_0.25fr_0.25fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center py-[5px] text-[18px] font-medium text-[#454545] gap-[25px] md:gap-[75px]">
                <img
                  src={ele.image}
                  className="h-[60px] w-[90px] md:w-[70px] md:h-[70px] rounded"
                  alt=""
                />
                <p className="hidden md:block md:text-[18px]">{ele.name}</p>
                <p>${ele.new_price}</p>
                <button className="bg-white border border-[#d8d8d8] w-[60px] h-[50px] cursor-pointer">
                  {cartItems[ele.id]}
                </button>
                <p>${ele.new_price * cartItems[ele.id]}</p>
                <img
                  className="cursor-pointer w-[15px] mx-[40px]"
                  src={Remove_Icon}
                  onClick={() => {
                    removeFromCart(ele.id);
                  }}
                  alt=""
                />
              </div>
              <hr className="border-0 h-[3px] bg-[#e2e2e2]" />
            </div>
          );
        }
        return null;
      })}
      <div className="flex flex-col md:flex-row items-center my-[40px] md:my-[100px]">
        <div className="flex flex-col gap-[30px] w-full md:w-1/2 mr-0 md:mr-[200px]">
          <h1 className="text-[30px] font-medium">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-[15px] text-[17px]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="border-0 h-[3px] bg-[#e2e2e2]" />
            <div className="flex justify-between py-[15px] text-[17px]">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr className="border-0 h-[3px] bg-[#e2e2e2]" />
            <div className="flex justify-between py-[15px] font-medium text-[19px]">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="cursor-pointer w-[240px] h-[50px] text-[#FFF] bg-[#ff4141] m-auto font-medium rounded">
            BROCEED TO CHECKOUT
          </button>
        </div>
        <div className="w-full md:w-1/4 mt-16 md:-mt-10">
          <p className="text-center md:text-right text-[#555] text-[16px] mb-[20px]">
            If You Have Promo Code, Enter It Here
          </p>
          <div className="flex items-center bg-[#eaeaea] w-[350px] md:w-[400px] h-[50px] pl-[20px] rounded">
            <input
              type="text"
              placeholder="Promo Code"
              className="bg-transparent w-[300px] h-[40px] border-0 outline-0"
            />
            <button className="cursor-pointer w-[120px] h-[50px] text-[#FFF] bg-[#ff4141] rounded-r-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
