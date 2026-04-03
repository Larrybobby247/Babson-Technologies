import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="relative sticky top-0 left-0 flex justify-between items-center px-5 py-4 lg:px-12 lg:py-6 bg-white shadow-sm z-5">
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="text-3xl font-bold"
      >
        <img src={Logo} alt="" className="w-14" />
      </Link>

      {/* Large Screen nav links */}
      <ul className="lg:flex gap-5 font-medium text-lg hidden">
        <li
          className="transition duration-300 hover:text-primary"
          onClick={() => setNav(false)}
        >
          <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li
          className="transition duration-300 hover:text-primary"
          onClick={() => setNav(false)}
        >
          <a
            href="#products"
            className=""
            onClick={() => window.scrollTo(0, 0)}
          >
            Products
          </a>
        </li>
        <li
          className="transition duration-300 hover:text-primary"
          onClick={() => setNav(false)}
        >
          <a
            href="#services"
            className=""
            onClick={() => window.scrollTo(0, 0)}
          >
            What We Do
          </a>
        </li>
        <li
          className="transition duration-300 hover:text-primary"
          onClick={() => setNav(false)}
        >
          <a
            href="#contact-us"
            className=""
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-2 lg:gap-8">
        <button className="btn-primary"><a href="https://wa.me/2348065584046">Place Order</a></button>
        <div
          className={`lg:hidden text-3xl cursor-pointer ${nav ? "hidden" : "block"}`}
          onClick={() => setNav(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div
          className={`text-3xl cursor-pointer ${nav ? "block" : "hidden"}`}
          onClick={() => setNav(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </div>
      </div>

      {/* small screen nav links */}
      <ul
        className={`absolute right-1 top-20 bg-white text-primary flex flex-col gap-8 py-8 transition-translate duration-400 px-12 rounded-sm text-2xl font-medium shadow-lg ${nav ? "right-1" : "right-[-100%]"}`}
      >
        <li className="" onClick={() => setNav(false)}>
          <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li className="" onClick={() => setNav(false)}>
          <a
            href="#products"
            className=""
            onClick={() => window.scrollTo(0, 0)}
          >
            Products
          </a>
        </li>
        <li className="" onClick={() => setNav(false)}>
          <a
            href="#services"
            className=""
            onClick={() => window.scrollTo(0, 0)}
          >
            What We Do
          </a>
        </li>
        <li className="" onClick={() => setNav(false)}>
          <a
            href="#contact-us"
            className=""
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
