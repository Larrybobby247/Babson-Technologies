import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Img1 from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="bg-faint flex flex-col gap-5 lg:gap-16 lg:flex-row px-8 lg:px-18 xl:px-28 h-[90vh] lg:items-center">
      <div className="mt-10 flex flex-col gap-3 lg:w-[70%]">
        <h1 className="text-4xl lg:text-[52px] font-bold" data-aos="fade-right">
          Empowering Your Digital World: Where Reliability Meets Technology
        </h1>
        <p className="text-lg text-grey mb-2" data-aos="fade-right">
          Welcome to Babson Technologies, your number-one hub for premium
          gadgets in Ibadan. We specialize in top-tier laptops and the latest
          smartphones, ensuring you never have to compromise on quality or
          performance.
        </p>
        <div className="flex" data-aos="fade-right">
          <button className="btn-primary"><a href="https://wa.me/2348065584046">Shop Now</a></button>
        </div>
      </div>
      <div className="" data-aos="fade-right">
        <img src={Img1} alt="" className="w-full lg:w-[100%]" />
      </div>
    </div>
  );
};

export default Hero;
