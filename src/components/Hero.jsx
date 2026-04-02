import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Img1 from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="bg-faint flex flex-col gap-12 lg:gap-16 lg:flex-row px-8 lg:px-18 xl:px-28 h-[90vh] lg:items-center">
      <div className="mt-12 flex flex-col gap-4 lg:w-[70%]">
        <h1 className="text-4xl lg:text-[52px] font-bold">
          Powering Your Lifestyle with Smart, Reliable Technology
        </h1>
        <p className="text-lg text-grey mb-4">
          Mindset Gadget is a modern tech and gadget brand focused on providing
          quality electronic devices and accessories such as smartphones and
          other smart gadgets.
        </p>
        <div className="flex gap-4 ">
          <button className="btn-primary">Shop Now</button>
        </div>
      </div>
      <div className="">
        <img src={Img1} alt="" className="w-full lg:w-[100%]" />
      </div>
    </div>
  );
};

export default Hero;
