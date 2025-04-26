import star_icon from "../Components/Assets/star_icon.png";
import star_dull_icon from "../Components/Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="bg-[#fdf4f4]">
      <div className="container mx-auto py-8 px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row">
          <div className="flex gap-[18px] mr-0 md:mr-[100px]">
            <div className="flex flex-col gap-[17px]">
              <img
                className="h-[70px] md:h-[125px] w-[200px] md:w-[180px] rounded"
                src={product.image}
                alt={product.name}
              />
              <img
                className="h-[70px] md:h-[125px] w-[200px] md:w-[180px] rounded"
                src={product.image}
                alt={product.name}
              />
              <img
                className="h-[70px] md:h-[125px] w-[200px] md:w-[180px] rounded"
                src={product.image}
                alt={product.name}
              />
              <img
                className="h-[70px] md:h-[125px] w-[200px] md:w-[180px] rounded"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div>
              <img
                className="w-[800px] h-[330px] md:h-[550px] rounded"
                src={product.image}
                alt={product.name}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[20px] md:text-[33px] mt-5 md:mt-0 font-meduim text-[#3d3d3d]">
              {product.name}
            </h1>
            <div className="flex items-center gap-1 my-2 md:my-3 text-[#1c1c1c] text-[16px]">
              <img src={star_icon} alt="Star_Icon" />
              <img src={star_icon} alt="Star_Icon" />
              <img src={star_icon} alt="Star_Icon" />
              <img src={star_icon} alt="Star_Icon" />
              <img src={star_dull_icon} alt="Star_Duall_Icon" />
              <p>(122)</p>
            </div>
            <div className="flex items-center gap-5 text-[19px] my-3 md:my-5 font-medium">
              <div className="text-[#818181] line-through">
                ${product.old_price}
              </div>
              <div className="text-[#ff4141]">${product.new_price}</div>
            </div>
            <div className="my-3 md:my-5 text-[16px]">
              A Lightweight, usually knitted, pullover shirt, close-fitting and
              with round neckline and short sleeves, worn as undershirt or outer
              garment
            </div>
            <div>
              <h1 className="mt-[20px] font-medium text-[21px] text-[#656565]">
                Select Size
              </h1>
              <div className="flex items-center gap-5 my-4 text-[18px] font-medium">
                <div className="bg-[#FBFBFB] hover:bg-[#e8e8e8] duration-300 border border-[#c7c7c7] rounded cursor-pointer px-[15px] md:px-[18px] py-[8px] md:py-[12px]">
                  S
                </div>
                <div className="bg-[#FBFBFB] hover:bg-[#e8e8e8] duration-300 border border-[#c7c7c7] rounded cursor-pointer px-[15px] md:px-[18px] py-[8px] md:py-[12px]">
                  M
                </div>
                <div className="bg-[#FBFBFB] hover:bg-[#e8e8e8] duration-300 border border-[#c7c7c7] rounded cursor-pointer px-[15px] md:px-[18px] py-[8px] md:py-[12px]">
                  L
                </div>
                <div className="bg-[#FBFBFB] hover:bg-[#e8e8e8] duration-300 border border-[#c7c7c7] rounded cursor-pointer px-[15px] md:px-[18px] py-[8px] md:py-[12px]">
                  XL
                </div>
                <div className="bg-[#FBFBFB] hover:bg-[#e8e8e8] duration-300 border border-[#c7c7c7] rounded cursor-pointer px-[15px] md:px-[18px] py-[8px] md:py-[12px]">
                  2XL
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className="text-[#FFF] bg-[#ff4141] w-[180px] h-[50px] mt-3 mb-7 cursor-pointer rounded"
            >
              ADD TO CART
            </button>
            <p className="mb-2">
              <span className="font-semibold">Category: </span>Women, T-Shirt,
              Crop Top
            </p>
            <p>
              <span className="font-semibold">Tags: </span>Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
