import { faAward, faBriefcase, faFileCircleCheck, faGlobe, faGraduationCap, faPlane, faUserShield, faZap } from "@fortawesome/free-solid-svg-icons";

const iraSiteData = {
  brand: {
    name: "IRA Ticketing and Travel Agency",
    legalName: "I.R.A Global Resources Ltd",
    tagline: "Your Trusted Gateway to the World",
    mission: "Helping people to greatness",
    foundedYear: 2018,
    colors: {
      primary: "#1e3a8a",
      secondary: "#2563eb",
      accent: "#facc15",
      button: "#007bff"
    }
  },
  hero: {
    heading: "Your Trusted Gateway to the World",
    description: "Expert visa assistance, affordable global flight bookings, and seamless study abroad consultations. We handle the paperwork so you can enjoy the journey.",
    cta: "Book a Consultation"
  },
  services: [
    { id: 1, title: "Visa Assistance", description: "Expert processing for UK, Canada, and Schengen visas with a focus on high approval rates.", iconName: faFileCircleCheck },
    { id: 2, title: "Study Abroad", description: "Comprehensive admission guidance and scholarship support for international students.", iconName: faGraduationCap },
    { id: 3, title: "Flight Bookings", description: "Affordable local and international flight tickets tailored to your budget.", iconName: faPlane },
    { id: 4, title: "Proof of Funds (POF)", description: "Financial documentation support to meet strict embassy requirements.", iconName: faGlobe },
    { id: 5, title: "Work Permits", description: "Legal guidance for securing work and residency in countries like Norway and the UK.", iconName: faBriefcase }
  ],
  whyChooseUs: [
    { id: 1, title: "99.9% Success Rate", description: "Our meticulous documentation ensures the highest chance of visa approval.", iconName: faAward },
    { id: 2, title: "Fast & Reliable", description: "Quick turnarounds on ticket bookings and passport processing.", iconName: faZap },
    { id: 3, title: "Expert Consultants", description: "Years of experience handling complex travel and study abroad cases.", iconName: faUserShield }
  ],
  testimonials: [
    { id: 1, name: "Chinedu O.", role: "Student in UK", content: "IRA Ticketing handled my documentation perfectly after a previous rejection. They are the best!", rating: 5 },
    { id: 2, name: "Sarah Adebayo", role: "Traveler", content: "They saved me over 200k on my flight to Canada. Their WhatsApp response is super fast.", rating: 5 },
    { id: 3, name: "Emmanuel T.", role: "Work Permit Holder", content: "The process for my Norway work permit was seamless and well-explained.", rating: 5 }
  ],
  destinations: [
    {
      id: 1,
      name: "Kuwait City, Kuwait",
      tag: "Work Visa Specialist",
      description: "Fast-track work visa processing and high-paying career opportunities.",
      image:
        "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Dubai, UAE",
      tag: "Tourist Favorite",
      description: "Seamless tourist visas and business exploration in the world's most luxurious hub.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "London, UK",
      tag: "Study Abroad",
      description: "2026 University admissions and relocation pathways for students and families.",
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Canada",
      tag: "Permanent Residency",
      description: "Complete relocation advisory and proof of funds assistance for Canadian immigration.",
      image:
        "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=600&auto=format&fit=crop&q=80",
    },
  ],
  contact: {
    shortDescription: "Ready to start your journey? Reach out to our expert consultants for stress-free travel planning and visa support.",
    email: "iraticketing@gmail.com",
    phones: {
      nigeria: ["+234 708 912 9690", "+234 907 112 4626"],
      uk: "+44 753 522 3123",
      france: "+33 6 50 67 75 64"
    },
    address: "Suite 6, Block E2, Old Governor Office, Ayegbaju International Complex, Ogo Oluwa Area, Osogbo, Osun State, Nigeria.",
    workingHours: "Monday – Saturday (9:00 AM – 6:00 PM)",
    whatsappLink: "https://wa.me/2347089129690"
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linktree: "https://linktr.ee"
  },
  footer: {
    shortDescription: "Providing reliable and affordable travel solutions since 2018. Professional. Trusted. Efficient.",
    copyright: "© 2024 IRA Ticketing and Travel Agency. All rights reserved."
  }
};

export default iraSiteData;
