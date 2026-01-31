import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 850;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); 
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logoLink}>
        <div style={styles.logoContainer}>
          <img src={schoolLogo} alt="SSV School Logo" style={styles.logoImage} />
          <div style={styles.logoText}>
            <span style={styles.schoolNameMain}>SRI SWAMY VIVEKANANDHA</span>
            <span style={styles.schoolNameSub}>ENGLISH MEDIUM HIGH SCHOOL</span>
          </div>
        </div>
      </Link>

      {/* Hamburger Icon for Mobile */}
      {isMobile && (
        <div style={styles.hamburger} onClick={toggleMenu}>
          <div style={{ ...styles.bar, transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }}></div>
          <div style={{ ...styles.bar, opacity: isOpen ? 0 : 1 }}></div>
          <div style={{ ...styles.bar, transform: isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}></div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav style={{
        ...(isMobile ? styles.navMobile : {}),
        ...(isMobile && isOpen ? styles.navMobileOpen : {}),
      }}>
        <ul style={{
          ...styles.menu,
          ...(isMobile ? styles.menuMobile : {})
        }}>
          <li><Link onClick={() => setIsOpen(false)} style={styles.navLink} to="/">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} style={styles.navLink} to="/about">About Us</Link></li>
          <li><Link onClick={() => setIsOpen(false)} style={styles.navLink} to="/gallery">Gallery</Link></li>
          <li><Link onClick={() => setIsOpen(false)} style={styles.contactBtn} to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
    height: "80px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Inter', sans-serif",
  },
  logoLink: { textDecoration: "none" },
  logoContainer: { display: "flex", alignItems: "center", gap: "10px" },
  logoImage: { height: "50px", width: "auto" },
  logoText: { display: "flex", flexDirection: "column", lineHeight: "1.1" },
  schoolNameMain: { fontSize: "clamp(0.85rem, 2vw, 1rem)", fontWeight: "800", color: "#0B3C5D" },
  schoolNameSub: { fontSize: "0.55rem", fontWeight: "700", color: "#666", letterSpacing: "1px", textTransform: "uppercase" },
  
  // Desktop Menu
  menu: { display: "flex", listStyle: "none", gap: "25px", alignItems: "center", margin: 0, padding: 0 },
  navLink: { textDecoration: "none", color: "#444", fontWeight: "600", fontSize: "0.9rem" },
  contactBtn: {
    textDecoration: "none",
    backgroundColor: "#F4B41A",
    color: "#0B3C5D",
    padding: "10px 20px",
    borderRadius: "4px",
    fontWeight: "700",
    fontSize: "0.85rem",
    textTransform: "uppercase",
  },

  // Mobile Menu Styles
  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
    zIndex: 1001,
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#0B3C5D",
    transition: "0.3s ease",
    borderRadius: "2px",
  },
  navMobile: {
    position: "absolute",
    top: "80px",
    left: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    height: "0",
    overflow: "hidden",
    transition: "0.3s ease-in-out",
    boxShadow: "0 10px 10px rgba(0,0,0,0.05)",
  },
  navMobileOpen: {
    height: "260px", 
  },
  menuMobile: {
    flexDirection: "column",
    padding: "20px 0",
    gap: "20px",
  }
};

export default Navbar;