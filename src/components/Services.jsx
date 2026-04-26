import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iraSiteData from "../data/iraSiteData";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  FileCheck: "fa-file-circle-check",
  GraduationCap: "fa-graduation-cap",
  Plane: "fa-plane",
  Globe: "fa-earth-africa",
  Briefcase: "fa-briefcase",
};

const colorMap = [
  { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-100", glow: "rgba(37,99,235,0.15)" },
  { bg: "bg-yellow-50", icon: "text-yellow-600", border: "border-yellow-100", glow: "rgba(234,179,8,0.15)" },
  { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-100", glow: "rgba(99,102,241,0.15)" },
  { bg: "bg-sky-50", icon: "text-sky-600", border: "border-sky-100", glow: "rgba(2,132,199,0.15)" },
  { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-100", glow: "rgba(5,150,105,0.15)" },
];

export default function Services() {
  const { services } = iraSiteData;

  return (
    <section id="services" className="bg-slate-50 py-24 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1f4f] leading-tight">
            Services Designed
            <br />
            <span className="text-[#2563eb]">for Your Journey</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            From visa processing to flight bookings, we cover every step of your international travel.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const color = colorMap[idx % colorMap.length];
            return (
              <div
                key={service.id}
                className={`group relative bg-white border ${color.border} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {/* BG glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${color.glow}, transparent 70%)`,
                  }}
                />

                {/* Numbered badge */}
                <span className="absolute top-6 right-6 text-slate-100 font-black text-4xl select-none">
                  0{idx + 1}
                </span>

                <div
                  className={`w-14 h-14 ${color.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  <i className={`fa-solid ${iconMap[service.iconName]} ${color.icon} text-2xl`}><FontAwesomeIcon icon={service.iconName}/></i>
                </div>

                <h3 className="text-[#0d1f4f] font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>

                <div className="mt-6 flex items-center gap-2 text-[#2563eb] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                  Learn more <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            );
          })}

          {/* CTA Card */}
          <div
            className="sm:col-span-2 lg:col-span-1 rounded-3xl p-8 flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
            }}
          >
            <div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className=" text-white text-2xl"><FontAwesomeIcon icon={faHeadset}/></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Need Custom Help?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Not sure which service fits? Our consultants are ready to guide you step by step.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#1e3a8a] font-black text-sm px-6 py-3 rounded-2xl hover:bg-yellow-300 transition-all duration-200 shadow-lg shadow-yellow-400/30"
            >
              <i className="fa-brands fa-whatsapp"></i> Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
