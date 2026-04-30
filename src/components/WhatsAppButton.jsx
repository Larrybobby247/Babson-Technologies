import { useState } from "react";
import iraSiteData from "../data/iraSiteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const { contact } = iraSiteData;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={contact.whatsappLink}
      target="_blank"
      rel="noreferrer"
      title="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 900,
        background: "#25d366",
        color: "#fff",
        width: "54px",
        height: "54px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.4rem",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        transform: hovered ? "scale(1.12)" : "scale(1)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <i className="fa-brands fa-whatsapp" ><FontAwesomeIcon icon={faWhatsapp}/></i>

      {/* Tooltip */}
      {hovered && (
        <span
          style={{
            position: "absolute",
            right: "62px",
            background: "#1a0a2e",
            color: "#fff",
            fontSize: "0.78rem",
            fontWeight: 600,
            padding: "6px 12px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          Chat with us
        </span>
      )}
    </a>
  );
}
