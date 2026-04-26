import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
