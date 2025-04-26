function NewsLetter() {
  return (
    <div className="container mx-auto py-12 px-5 md:px-10 lg:px-20">
      <div className="bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-lg p-6 md:p-14 text-center">
        <h1 className="text-[28px] md:text-[50px] font-medium text-[#454545]">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="text-[16px] md:text-[18px] my-5 text-[#454545]">
          Subscribe to our newsletter and stay updated.
        </p>
        <div className="flex justify-center items-center mt-4 md:mt-10 w-[300px] md:w-[700px] h-[40px] md:h-[70px] bg-white rounded-full border border-[#e3e3e3] m-auto">
          <input className="w-[200px] md:w-[500px] border-0 outline-0 text-[#616161] text-[16px]md:text-[20px] ml-3 md:ml-8" type="email" placeholder="Your Email" />
          <button className="text-white bg-black w-[85px] md:w-[150px] h-[35px] md:h-[65px] rounded-full cursor-pointer text-[14px] md:text-[18px]">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
