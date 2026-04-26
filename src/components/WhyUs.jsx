import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iraSiteData from "../data/iraSiteData";

const iconMap = {
  Award: "fa-award",
  Zap: "fa-bolt",
  ShieldCheck: "fa-shield-halved",
};

export default function WhyUs() {
  const { whyChooseUs } = iraSiteData;

  return (
    <section
      id="why-us"
      className="py-24 px-5 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #060f2e 0%, #0d1f4f 60%, #1a3570 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #facc15 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-[#facc15]/20 text-[#facc15] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Why Choose IRA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              We Turn Your
              <br />
              <span className="text-[#facc15]">Travel Dreams</span>
              <br />
              Into Reality
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              With years of experience and a stellar track record, IRA Ticketing is your most reliable partner for international travel and visa processing.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#facc15] text-[#1e3a8a] font-black text-sm px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-200 shadow-xl shadow-yellow-400/20"
            >
              Start Your Journey
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>

            {/* Visual stats bar */}
            <div className="mt-12 space-y-4">
              {[
                { label: "Visa Approval Rate", value: 99, color: "#facc15" },
                { label: "Client Satisfaction", value: 98, color: "#2563eb" },
                { label: "On-time Processing", value: 96, color: "#10b981" },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/70 text-xs font-semibold">{bar.label}</span>
                    <span className="text-white text-xs font-bold">{bar.value}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${bar.value}%`, background: bar.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="space-y-5">
            {whyChooseUs.map((item, idx) => (
              <div
                key={item.id}
                className="group flex gap-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#facc15]/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ background: idx === 0 ? "rgba(250,204,21,0.2)" : idx === 1 ? "rgba(37,99,235,0.2)" : "rgba(16,185,129,0.2)" }}>
                  <i
                    className={` text-2xl`}
                    style={{ color: idx === 0 ? "#facc15" : idx === 1 ? "#60a5fa" : "#34d399" }}
                  ><FontAwesomeIcon icon={item.iconName}/></i>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Trust badge */}
            <div className="flex items-center gap-4 bg-[#facc15]/10 border border-[#facc15]/20 rounded-2xl p-5">
              <i className="fa-solid fa-certificate text-[#facc15] text-3xl"></i>
              <div>
                <p className="text-white font-bold text-sm">Officially Registered</p>
                <p className="text-white/50 text-xs">I.R.A Global Resources Ltd — CAC Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
