import { useState, useEffect } from "react";
import iraSiteData from "../data/iraSiteData";
import { faBars, faPlaneDeparture, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand } = iraSiteData;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Services", "Why Us", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1f4f]/95 backdrop-blur-md shadow-lg shadow-blue-900/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center shadow-md">
            <i className=" font-bold text-[#1e3a8a] text-lg"><FontAwesomeIcon icon={faPlaneDeparture}/></i>
          </div>
          <div className="leading-tight">
            <p className="text-white font-extrabold text-sm tracking-wide uppercase">IRA Ticketing</p>
            <p className="text-[#facc15] text-[10px] tracking-widest uppercase font-semibold">& Travel Agency</p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-white/80 hover:text-[#facc15] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#facc15] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#facc15] text-[#1e3a8a] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-all duration-200 shadow-lg shadow-yellow-400/30"
        >
          <i className="fa-brands fa-whatsapp text-base"></i>
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}>{menuOpen ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}</i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d1f4f]/98 border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-white/80 hover:text-[#facc15] text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#1e3a8a] font-bold text-sm px-5 py-2.5 rounded-full mt-2"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa-brands fa-whatsapp"></i> Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
