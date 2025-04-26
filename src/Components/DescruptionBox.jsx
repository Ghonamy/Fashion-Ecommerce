import React from "react";

const DescruptionBox = () => {
  return (
    <div className="container mx-auto py-20 px-5 md:px-10 lg:px-20">
      <div className="flex items-center mt-0 md:mt-5 text-[18px] font-medium">
        <div className="border border-[#d0d0d0] px-6 py-3">Description</div>
        <div className="border border-[#d0d0d0] px-6 py-3 text-[#555] bg-[#fbfbfb]">Reviews (122)</div>
      </div>
      <div className="flex flex-col gap-2 p-5 md:p-8 border border-[#d0d0d0]">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescruptionBox;
