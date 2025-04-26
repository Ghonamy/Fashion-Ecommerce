import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item";

export default function ShopCategory({ Banner, Category }) {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="bg-[#fdf4f4]">
      <div className="container mx-auto py-5 px-5 md:px-10 lg:px-20">
        <img className="rounded" src={Banner} alt="Banner_Image" />
        <div className="flex justify-between items-center py-8">
          <p className="text-[15px] md:text-[19px]">
            <span className="font-semibold">Showing 1-12</span> out of 36
            Products
          </p>
          <div className="flex items-center gap-1 cursor-pointer border border-[#888] rounded-full px-2 md:px-4 py-1 md:py-2 text-[14px]">
            Sort By <img src={dropdown_icon} alt="Dropdown_Icon" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-8 mb-20">
          {all_products.map((product) => {
            if (Category === product.category) {
              return (
                <Item
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  old_price={product.old_price}
                  new_price={product.new_price}
                  category={product.category}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <button className="bg-[#ededed] text-[#787878] w-[180px] h-[55px] rounded-full mx-auto flex justify-center items-center font-medium text-[18px] my-15 md:my-20 cursor-pointer">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
