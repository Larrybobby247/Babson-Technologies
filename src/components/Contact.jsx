import { faEnvelope, faLink, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import iraSiteData from "../data/iraSiteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const { contact, socials } = iraSiteData;
  const allPhones = [
    ...contact.phones.nigeria.map(p => ({ flag: "🇳🇬", number: p })),
    { flag: "🇬🇧", number: contact.phones.uk },
    { flag: "🇫🇷", number: contact.phones.france },
  ];

  return (
    <section id="contact" className="bg-slate-50 py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1f4f] leading-tight">
            Let's Plan Your
            <br />
            <span className="text-[#2563eb]">Next Adventure</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            {contact.shortDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-5 bg-white border border-slate-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                <i className="text-[#2563eb] text-xl"><FontAwesomeIcon icon={faEnvelope}/></i>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">Email Us</p>
                <p className="text-[#0d1f4f] font-bold">{contact.email}</p>
              </div>
              <i className="fa-solid fa-arrow-right text-slate-300 group-hover:text-[#2563eb] ml-auto transition-colors"></i>
            </a>

            {/* Phones */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                  <i className="text-green-600 text-xl"><FontAwesomeIcon icon={faPhone}/></i>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Phone Numbers</p>
                </div>
              </div>
              <div className="space-y-3">
                {allPhones.map((p, i) => (
                  <a
                    key={i}
                    href={`tel:${p.number.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-[#0d1f4f] font-semibold text-sm hover:text-[#2563eb] transition-colors"
                  >
                    <span className="text-xl">{p.flag}</span>
                    {p.number}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-green-600 hover:bg-green-700 rounded-2xl p-6 transition-all duration-200 shadow-xl shadow-green-600/20"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <i className=" text-white text-3xl"><FontAwesomeIcon icon={faWhatsapp}/></i>
              </div>
              <div>
                <p className="text-white/80 text-xs uppercase tracking-widest font-semibold mb-1">Chat Instantly</p>
                <p className="text-white font-bold text-lg">Message on WhatsApp</p>
              </div>
              <i className="fa-solid fa-arrow-right text-white/60 group-hover:text-white ml-auto transition-colors"></i>
            </a>

            {/* Address */}
            <div className="flex items-start gap-5 bg-white border border-slate-100 rounded-2xl p-6">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center shrink-0">
                <i className=" text-[#facc15] text-xl"><FontAwesomeIcon icon={faLocationDot}/></i>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-2">Office Address</p>
                <p className="text-[#0d1f4f] font-semibold text-sm leading-relaxed">{contact.address}</p>
                <p className="text-slate-400 text-xs mt-2 flex items-center gap-1.5">
                  <i className="fa-regular fa-clock"></i> {contact.workingHours}
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center justify-between">
              <p className="text-slate-500 text-sm font-semibold">Follow Us</p>
              <div className="flex gap-3">
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <i className="fa-brands fa-instagram text-sm"><FontAwesomeIcon icon={faInstagram}/></i>
                </a>
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1877f2] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <i className="fa-brands fa-facebook-f text-sm"><FontAwesomeIcon icon={faFacebookF}/></i>
                </a>
                <a href={socials.linktree} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#39e09b] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <i className="fa-solid fa-link text-sm"><FontAwesomeIcon icon={faLink}/></i>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-[#0d1f4f] font-black text-2xl mb-2">Send Us a Message</h3>
            <p className="text-slate-400 text-sm mb-8">We'll respond within a few hours.</p>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0d1f4f] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0d1f4f] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Service Interested In</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0d1f4f] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none">
                  <option value="">Select a service…</option>
                  {iraSiteData.services.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your travel plans…"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0d1f4f] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white font-black text-sm py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                <i className="fa-solid fa-paper-plane"></i>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
