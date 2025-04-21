import React from "react";
import { FaRing, FaHeart, FaGift, FaLock, FaScroll } from "react-icons/fa";
// import { GiWeddingRings, GiFlowers } from "react-icons/gi";

const Terms = () => {
  const colors = {
    primary: "#836F57",       // Main brown color
    secondary: "#F3E9D8",     // Light cream
    accent: "#FFFFFF",        // White
    background: "#5c5b5b",    // Dark gray background
    textLight: "#F8F9FA"      // Very light text
  };

  return (
    <div 
      className="terms-container" 
      style={{ 
        backgroundColor: colors.background, 
        color: colors.textLight,
        marginTop: "100px",
        padding: "2rem",
        borderRadius: "10px",
        maxWidth: "800px",
        margin: "2rem auto",
        fontFamily: "'Playfair Display', serif"
      }}
    >
      <h1 
        style={{ 
          color: colors.secondary, 
          textAlign: "center", 
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem"
        }}
      >
        <FaScroll /> Terms & Conditions
      </h1>

      <div 
        className="terms-content" 
        style={{ 
          backgroundColor: colors.primary, 
          padding: "1.5rem", 
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }}
      >
        <section style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: colors.accent, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaRing /> Wedding Services
          </h3>
          <p>
            Our AI-generated wedding invitations, vows, and floral designs are for personal use only. 
            Commercial redistribution or resale is prohibited without explicit permission.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: colors.accent, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* <GiWeddingRings /> Customization & Ownership */}
          </h3>
          <p>
            You retain rights to the final personalized designs. However, our AI algorithms remain proprietary. 
            We reserve the right to use anonymized data for improving our services.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: colors.accent, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* <GiFlowers /> Floral Designs */}
          </h3>
          <p>
            AI-generated bouquet suggestions are conceptual and may require adjustments by a professional florist. 
            We are not liable for vendor execution discrepancies.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: colors.accent, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaLock /> Privacy Policy
          </h3>
          <p>
            User data (names, wedding dates) is encrypted and never shared with third parties. 
            By using our services, you consent to our data practices outlined in our Privacy Policy.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: colors.accent, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaGift /> Refunds & Cancellations
          </h3>
          <p>
            Digital products (e.g., invitation text) are non-refundable. Physical items (printed cards) may be 
            eligible for returns within 7 days if unused.
          </p>
        </section>

        <section>
          <h3 style={{ color: colors.accent, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaHeart /> General
          </h3>
          <p>
            By using our website, you agree to these terms. We reserve the right to modify policies. 
            For questions, contact <span style={{ color: colors.secondary }}>support@aiwedding.com</span>.
          </p>
        </section>
      </div>

      <p style={{ textAlign: "center", marginTop: "1rem", color: colors.secondary }}>
        Last Updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Terms;