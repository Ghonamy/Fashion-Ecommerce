import React from "react";
import Relatedproduct from "../Components/Assets/Data";
import Item from "../Components/Item";
const RelatedProducts = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <div>
        <h1 className="text-center text-[27px] md:text-[40px] font-medium text-[#171717]">
          Related Products
        </h1>
        <hr className="w-[180px] md:w-[250px] h-[5px] bg-[#252525] m-auto rounded-2xl" />
        <div className="flex flex-col md:flex-row gap-8 mt-14 mb-20">
          {Relatedproduct.map((product) => {
            const { id, name, image, old_price, new_price } = product;
            return (
              <Item
                key={id}
                id={id}
                name={name}
                image={image}
                old_price={old_price}
                new_price={new_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
