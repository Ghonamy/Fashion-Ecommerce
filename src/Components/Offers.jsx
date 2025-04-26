import OfferImage from "./Assets/exclusive_image.png";
function Offers() {
  return (
    <div className="py-16 px-5 md:px-10 lg:px-20 container mx-auto">
      <div className="bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-lg px-10 md:px-20 py-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[25px] md:text-[70px] text-[#171717] font-semibold">Exclusive</h1>
            <h1 className="text-[25px] md:text-[70px] text-[#171717] font-semibold">Offers For You</h1>
            <p className="my-2 md:my-5 text-[15px] md:text-[22px] text-[#171717] font-medium">ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="w-[115px] md:w-[200px] h-[35px] md:h-[50px] rounded-full mt-3 md:mt-8 cursor-pointer text-white bg-[#ff4141] text-[16px] md:text-[22px] font-medium">Check Now</button>
          </div>
          <img className="w-[180px] md:w-[280px]" src={OfferImage} alt="Offer Image" />
        </div>
      </div>
    </div>
  );
}

export default Offers;
