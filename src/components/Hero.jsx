import { useEffect, useRef } from "react";
import iraSiteData from "../data/iraSiteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEarthAfrica, faPlane, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const destinations = ["London", "Toronto", "Paris", "Oslo", "Amsterdam", "New York"];

export default function Hero() {
  const { hero, contact } = iraSiteData;
  const tickerRef = useRef(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #060f2e 0%, #0d1f4f 40%, #1a3570 70%, #0d2a5e 100%)",
      }}
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "#facc15" : "#2563eb",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
              filter: "blur(60px)",
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background: "linear-gradient(135deg, transparent 40%, #facc15 100%)",
          clipPath: "polygon(60% 0, 100% 0, 100% 100%, 80% 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-[#facc15] rounded-full animate-ping"></span>
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                Trusted Since {iraSiteData.brand.foundedYear}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Your Trusted
              <br />
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "2px #facc15",
                  textShadow: "0 0 40px rgba(250,204,21,0.4)",
                }}
              >
                Gateway
              </span>{" "}
              <span className="text-[#facc15]">to</span>
              <br />
              the World
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#facc15] text-[#1e3a8a] font-black text-sm px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-200 shadow-xl shadow-yellow-400/30 hover:scale-105 active:scale-95"
              >
                <i className="fa-solid fa-calendar-check text-base"></i>
                {hero.cta}
              </a>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-200"
              >
                <i className="fa-brands fa-whatsapp text-green-400 text-lg"></i>
                Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { number: "99.9%", label: "Success Rate" },
                { number: "2018", label: "Est. Year" },
                { number: "3+", label: "Countries Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[#facc15] font-black text-2xl">{stat.number}</p>
                  <p className="text-white/50 text-xs tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card visual */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-80">
              {/* Globe icon big */}
              <div className="w-72 h-72 rounded-full border-2 border-white/10 flex items-center justify-center mx-auto relative">
                <div className="w-56 h-56 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600/40 to-indigo-900/80 flex items-center justify-center shadow-2xl">
                    <i className="fa-solid fa-earth-africa text-6xl text-white/80"><FontAwesomeIcon icon={faEarthAfrica}/></i>
                  </div>
                </div>
                {/* Orbiting plane */}
                <div
                  className="absolute w-10 h-10 bg-[#facc15] rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    top: "8%",
                    right: "4%",
                    animation: "orbit 8s linear infinite",
                  }}
                >
                  <i className="fa-solid fa-plane text-[#1e3a8a] text-sm rotate-45"><FontAwesomeIcon icon={faPlane}/></i>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-16 top-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-44">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-check text-green-400"><FontAwesomeIcon icon={faCheck}/></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Visa Approved</p>
                    <p className="text-white/50 text-xs">Just now</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-10 bottom-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-44">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#facc15]/20 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-plane-departure text-[#facc15]"><FontAwesomeIcon icon={faPlaneDeparture}/></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Flight Booked</p>
                    <p className="text-white/50 text-xs">Lagos → London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations ticker */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">We fly you to</p>
          <div className="flex flex-wrap gap-3">
            {destinations.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white/70 text-sm"
              >
                <i className="fa-solid fa-location-dot text-[#facc15] text-xs"></i>
                {d}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 text-[#facc15] text-sm font-semibold px-2">
              & More <i className="fa-solid fa-arrow-right text-xs"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(130px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
