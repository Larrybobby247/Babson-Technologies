import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iraSiteData from "../data/iraSiteData";
import { faTh, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const avatarColors = ["#1e3a8a", "#2563eb", "#0d9488"];
const avatarInitials = (name) => name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();

export default function Testimonials() {
  const { testimonials } = iraSiteData;

  return (
    <section id="testimonials" className="bg-white py-24 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1f4f] leading-tight">
            Real People,
            <br />
            <span className="text-[#2563eb]">Real Results</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote mark */}
              <i className="fa-solid fa-quote-left text-5xl text-blue-100 absolute top-6 right-8 select-none"></i>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-[#facc15] text-sm"></i>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 text-sm leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${avatarColors[idx % 3]}, ${avatarColors[(idx + 1) % 3]})` }}
                >
                  {avatarInitials(t.name)}
                </div>
                <div>
                  <p className="text-[#0d1f4f] font-bold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-green-500 text-xs"></i>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-16 bg-gradient-to-r from-[#0d1f4f] to-[#1d4ed8] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <i className=" text-[#facc15] text-2xl<"><FontAwesomeIcon icon={faThumbsUp}/></i>
            </div>
            <div>
              <p className="text-white font-black text-xl">Hundreds of Happy Clients</p>
              <p className="text-white/60 text-sm">Join our growing family of satisfied travelers</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#facc15] text-[#1e3a8a] font-black text-sm px-7 py-3.5 rounded-full hover:bg-yellow-300 transition-all duration-200 shadow-lg shadow-yellow-400/20"
          >
            Be the Next <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
