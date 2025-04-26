import React from "react";

function Login() {
  return (
    <div className="bg-[#fce3fe] w-full h-[60vh] md:h-[100vh] pt-[50px]">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="bg-white w-[360px] md:w-[550px] h-[400px] md:h-[520px] m-auto px-[28px] md:px-[40px] py-[20px] md:py-[40px] rounded-lg">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-[20px] md:mb-[30px]">
            Sign Up
          </h1>
          <div className="flex flex-col gap-[20px] md:gap-[30px]">
            <input
              className="border border-[#c9c9c9] w-[320px] md:w-full h-[40px] md:h-[50px] pl-2 md:pl-5 rounded outline-0 text-[#5c5c5c]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border border-[#c9c9c9] w-[320px] md:w-full h-[40px] md:h-[50px] pl-2 md:pl-5 rounded outline-0 text-[#5c5c5c]"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border border-[#c9c9c9] w-[320px] md:w-full h-[40px] md:h-[50px] pl-2 md:pl-5 rounded outline-0 text-[#5c5c5c]"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="text-[#fff] bg-[#ff4141] w-[320px] md:w-full h-[40px] md:h-[50px] mt-4 md:mt-7 mb-3 md:mb-5 font-medium rounded text-[16px] md:text-[20px] cursor-pointer">
            Continue
          </button>
          <div className="text-[#5c5c5c] text-[16px] md:text-[18px]">
            Already Have an Account?{" "}
            <span className="text-[#ff4141] font-medium cursor-pointer ml-1">
              Login Here
            </span>
          </div>
          <div className="flex items-center gap-1 mt-5">
            <input type="checkbox" className="accent-[#ff4141]" />
            <p className="text-[13px] md:text-[15px] text-[#5c5c5c] font-medium">
              I Agree To The Terms of Us & Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
