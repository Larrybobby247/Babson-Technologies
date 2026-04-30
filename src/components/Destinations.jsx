import { useEffect, useRef, useState } from "react";
import iraSiteData from "../data/iraSiteData";

const { destinations } = iraSiteData;

function DestCard({ dest, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        height: "340px",
        cursor: "pointer",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.3s ease",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={dest.image}
        alt={dest.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.45s ease",
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top,rgba(26,10,46,0.92) 0%,rgba(26,10,46,0.18) 60%,transparent 100%)",
        }}
      />
      {/* Info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "rgba(212,160,23,0.9)",
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: "50px",
            marginBottom: "0.6rem",
          }}
        >
          {dest.tag}
        </span>
        <h3
          style={{
            color: "#fff",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.15rem",
            fontWeight: 700,
            marginBottom: "0.4rem",
          }}
        >
          {dest.name}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "0.82rem",
            lineHeight: 1.55,
          }}
        >
          {dest.description}
        </p>
      </div>
    </div>
  );
}

export default function Destinations() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
        padding: "90px 5%",
        marginBottom: "120px"
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <span
          className="reveal"
          style={{
            display: "inline-block",
            background: "rgba(212,160,23,0.15)",
            color: "#d4a017",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            padding: "6px 16px",
            borderRadius: "50px",
            marginBottom: "1rem",
          }}
        >
          Where We Go
        </span>
        <h2
          className="reveal"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem,3vw,2.6rem)",
            color: "#fff",
            fontWeight: 900,
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Featured Destinations
        </h2>
        <p
          className="reveal"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          We open doors to the world's most sought-after destinations for work,
          study, and living.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {destinations.map((dest, i) => (
          <DestCard key={dest.id} dest={dest} delay={i * 100} />
        ))}
      </div>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
