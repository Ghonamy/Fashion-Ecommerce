import Hand_Icon from "./Assets/hand_icon.png";
import Arrow_Icon from "./Assets/arrow.png";
import Hero_Image from "./Assets/hero_image.png";
function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 lg:px-20">
          <div className="flex flex-col gap-2 my-8">
            <h2 className="text-[20px] md:text-[24px] font-medium text-[#090909]">
              NEW ARRIVALS ONLY
            </h2>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <p className="text-[40px] md:text-[60px] text-[#171717] font-semibold">New</p>
                <img className="w-[70px] md:w-[105px]" src={Hand_Icon} alt="Hand Icon" />
              </div>
              <p className="text-[40px] md:text-[60px] text-[#171717] font-semibold">
                Collections
              </p>
              <p className="text-[40px] md:text-[60px] text-[#171717] font-semibold">
                For Everyone
              </p>
            </div>
            <div className="flex gap-3 justify-center items-center cursor-pointer bg-[#ff4141] text-white w-[210px] md:w-[270px] h-[50px] rounded-full text-[16px] mt-[5px] md:mt-[20px]">
              <button>Latest Collection</button>
              <img src={Arrow_Icon} alt="Arrow_Icon" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="max-w-[250px] md:max-w-[470px]" src={Hero_Image} alt="Hero_Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
