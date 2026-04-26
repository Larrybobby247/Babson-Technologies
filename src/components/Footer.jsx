import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iraSiteData from "../data/iraSiteData";
import { faLink, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { brand, footer, socials, contact } = iraSiteData;

  const quickLinks = ["Services", "Why Us", "Testimonials", "Contact"];
  const services = iraSiteData.services.map(s => s.title);

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050d26 0%, #060f2e 100%)" }}
    >
      {/* Top accent line */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #1e3a8a, #facc15, #2563eb)" }} />

      <div className="max-w-7xl mx-auto px-5 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center">
                <i className="fa-solid fa-plane-departure text-[#1e3a8a] text-lg"><FontAwesomeIcon icon={faPlaneDeparture}/></i>
              </div>
              <div>
                <p className="text-white font-extrabold text-sm tracking-wide uppercase">IRA Ticketing</p>
                <p className="text-[#facc15] text-[10px] tracking-widest uppercase font-semibold">& Travel Agency</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">{footer.shortDescription}</p>
            <p className="text-white/30 text-xs italic">{brand.mission}</p>

            <div className="flex gap-3 mt-6">
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-pink-500/80 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-200">
                <i className="fa-brands fa-instagram text-sm"><FontAwesomeIcon icon={faInstagram}/></i>
              </a>
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#1877f2]/80 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-200">
                <i className="fa-brands fa-facebook-f text-sm"><FontAwesomeIcon icon={faFacebookF}/></i>
              </a>
              <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-green-600/80 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-200">
                <i className="fa-brands fa-whatsapp text-sm"><FontAwesomeIcon icon={faWhatsapp}/></i>
              </a>
              <a href={socials.linktree} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#39e09b]/80 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-200">
                <i className="fa-solid fa-link text-sm"><FontAwesomeIcon icon={faLink}/></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/50 hover:text-[#facc15] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-chevron-right text-[10px] text-white/20 group-hover:text-[#facc15] transition-colors"></i>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</p>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-white/50 hover:text-[#facc15] text-sm transition-colors flex items-center gap-2 group">
                    <i className="fa-solid fa-chevron-right text-[10px] text-white/20 group-hover:text-[#facc15] transition-colors"></i>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-6">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-white/40 hover:text-[#facc15] text-sm transition-colors">
              <i className="fa-solid fa-envelope"></i> {contact.email}
            </a>
            <span className="flex items-center gap-2 text-white/40 text-sm">
              <i className="fa-solid fa-clock"></i> {contact.workingHours}
            </span>
            <span className="flex items-center gap-2 text-white/40 text-sm">
              <i className="fa-solid fa-location-dot"></i> Osogbo, Osun State, Nigeria
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">{footer.copyright}</p>
          <p className="text-white/30 text-xs">
            {brand.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
