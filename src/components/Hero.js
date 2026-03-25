import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import schoolBuildingImage from "../assets/hero.png"; 

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.hero}>
      <div style={{
        ...styles.overlay,
        ...(isMobile ? styles.overlayMobile : {})
      }}>
        <div style={{
          ...styles.contentBox,
          ...(isMobile ? styles.contentBoxMobile : {})
        }}>
          <span style={styles.preTitle}>Building a Foundation for Excellence</span>
          <h1 style={styles.title}>
            Sri Swami <br /> Vivekananda School
          </h1>
          
          <div style={{
            ...styles.divider,
            ...(isMobile ? styles.dividerMobile : {})
          }}></div>

          <p style={styles.subtitle}>
            Providing quality education from Nursery to 10th Class with a 
            focus on holistic development and character building.
          </p>

          <p style={styles.motto}>
            "Arise, awake, and stop not until the goal is reached."
          </p>

          <div style={{
            ...styles.buttons,
            ...(isMobile ? styles.buttonsMobile : {})
          }}>
            <Link to="/contact" style={styles.primaryBtn}>
              Admissions 2026-27
            </Link>
            <Link to="/about" style={styles.secondaryBtn}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "90vh",
    backgroundImage: `url(${schoolBuildingImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center", 
    display: "flex",
    alignItems: "center",
    position: "relative",
    margin: 0,
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
  },
  overlay: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(to right, rgba(11, 60, 93, 1) 0%, rgba(11, 60, 93, 0.8) 40%, rgba(11, 60, 93, 0) 100%)",
    display: "flex",
    alignItems: "center",
    padding: "0 8%", 
  },
  overlayMobile: {
    background: "rgba(11, 60, 93, 0.85)", 
    padding: "0 20px",
    justifyContent: "center",
  },
  contentBox: {
    textAlign: "left",
    maxWidth: "600px", 
    zIndex: 2,
  },
  contentBoxMobile: {
    textAlign: "center", 
  },
  preTitle: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#F4B41A", 
    marginBottom: "10px",
    fontWeight: "700",
    display: "block",
  },
  title: {
    fontSize: "clamp(2rem, 8vw, 3.2rem)", 
    fontWeight: "900",
    color: "#ffffff",
    margin: "0",
    lineHeight: "1.1",
  },
  divider: {
    width: "45px",
    height: "4px",
    backgroundColor: "#F4B41A", 
    margin: "20px 0",
  },
  dividerMobile: {
    margin: "20px auto", 
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  motto: {
    fontStyle: "italic",
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "35px",
    borderLeft: "2px solid #F4B41A",
    paddingLeft: "15px",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  buttonsMobile: {
    justifyContent: "center", 
  },
  primaryBtn: {
    backgroundColor: "#F4B41A", 
    color: "#0B3C5D", 
    padding: "14px 28px",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "800",
    fontSize: "0.9rem",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  secondaryBtn: {
    border: "2px solid rgba(255, 255, 255, 0.8)",
    color: "#FFFFFF",
    padding: "12px 28px",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "700",
    fontSize: "0.9rem",
    backdropFilter: "blur(4px)",
  }
};

export default Hero;