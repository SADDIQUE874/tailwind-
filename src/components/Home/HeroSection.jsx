import React from "react";
import Row from "../common/Row";

const HeroSection = () => {
  return (
    <div className="w-full px-[10%] py-[80px]">
      <Row className="w-full items-center justify-between">
        <div className="w-[46%]">
          <h1 className="text-[74px] text-slate-950 font-light">Collections</h1>
          <p className="text-[30px] text-black mt-[52px]">
            You can explore amd shop many products different collections from
            varios brands here.
          </p>
          <button className="h-[50px] w-[20%] text-white bg-black text-[15px] font-medium mt-[50px]">
            Shop Now
          </button>
        </div>
        <div className="w-[46%]">
          <div className=" w-[424px] h-[542px] relative">
            <img
              className=" w-full h-full rounded-tl-[160px] rounded-br-[160px]"
              src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtzcGFjZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Hero"
            />
            <div className=" absolute w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#0000000] top-[20px] left-[18px] -z-[1] " />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
