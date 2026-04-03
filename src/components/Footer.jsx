import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mt-20 bg-faint flex flex-col gap-6 px-6 lg:px-14 py-6">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex gap-4 flex-col" data-aos="fade-right">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="" className="w-28" />
          </Link>
          <p className="lg:w-100" data-aos="fade-right">
            At Babson Technologies, we don’t just sell electronics, we provide the reliable
            tools you need to succeed in a digital world. Where Reliability
            Meets Technology, we make excellence affordable for you
          </p>
        </div>
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 font-medium text-lg" data-aos="fade-right">
          <li className="transition duration-300 hover:text-primary">
            <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
              Home
            </Link>
          </li>
          <li className="transition duration-300 hover:text-primary">
            <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
              Products
            </Link>
          </li>
          <li className="transition duration-300 hover:text-primary">
            <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
              What We Do
            </Link>
          </li>
          <li className="transition duration-300 hover:text-primary">
            <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <hr className="border-grey" />
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-center">
        <div>
          <p>© 2026 Mindset Gadgets || All rights reserved</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/babson_tech/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl text-white bg-primary p-3 rounded-full hover:bg-secondary transition duaration-300"
            />
          </a>
          <a href="https://www.tiktok.com/@babson_college">
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-2xl text-white bg-primary p-3 rounded-full hover:bg-secondary transition duaration-300"
            />
          </a>
          <a href="https://www.tiktok.com/@mindset.gadgets?_r=1&_t=zs-942acun2zwy">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-2xl text-white bg-primary p-3 rounded-full hover:bg-secondary transition duaration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
