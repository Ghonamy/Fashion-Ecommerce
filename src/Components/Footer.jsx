import Logo from "./Assets/logo.png";
import Instagram_Icon from "./Assets/instagram_icon.png";
import Pintester_Icon from "./Assets/pintester_icon.png";
import WhatsApp_Icon from "./Assets/whatsapp_icon.png";
function Footer() {
  return (
    <div className="container mx-auto py-6 md:pt-12 mt-auto px-5 md:px-10 lg:px-20">
      <div className="flex justify-between items-center flex-col">
        <div className="flex items-center gap-2">
          <img className="w-[60px] md:w-[90px]" src={Logo} alt="Logo" />
          <h1 className="text-[25px] md:text-[35px] font-medium text-[#383838]">SHOPPER</h1>
        </div>
        <div>
          <ul className="flex text-[15px] md:text-[19px] gap-3 md:gap-5 my-4 md:my-8 text-[#252525]">
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Offices</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex text-[16px] md:text-[19px] gap-8 pb-5">
          <img src={Instagram_Icon} alt="Instagram_Icon" />
          <img src={Pintester_Icon} alt="Pintester_Icon" />
          <img src={WhatsApp_Icon} alt="WhatsApp_Icon" />
        </div>
      </div>
      <hr className="border-0 w-full h-[3px] bg-[#c7c7c7] rounded-full" />
      <p className="text-center py-3 md:py-5 text-[16px] md:text-[18px] text-[#1a1a1a]">Copyright @ 2025 - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
