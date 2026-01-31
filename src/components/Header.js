import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.headerWrapper}>
      <div style={styles.topBar}>
        <div style={styles.topBarContainer}>
          <div style={styles.contactInfo}>
            <span>📞 +91 98765 43210</span>
            <span style={styles.divider}>|</span>
            <span>✉️ info@swamyvivekanandha.edu</span>
          </div>
          <div style={styles.topBarRight}>
            <span>Admissions Open 2026-27</span>
          </div>
        </div>
      </div>

      <div style={styles.mainHeader}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>SV</div>
          <div>
            <h1 style={styles.schoolName}>SRI SWAMY VIVEKANANDHA</h1>
            <p style={styles.schoolSubtitle}>WISDOM • CHARACTER • EXCELLENCE</p>
          </div>
        </div>

        <nav>
          <ul style={styles.navList}>
            <li><Link to="/" style={styles.navLink}>Home</Link></li>
            <li><Link to="/about" style={styles.navLink}>About Us</Link></li>
            <li><Link to="/academics" style={styles.navLink}>Academics</Link></li>
            <li><Link to="/admissions" style={styles.navLink}>Admissions</Link></li>
            <li><Link to="/facilities" style={styles.navLink}>Facilities</Link></li>
            <li><Link to="/gallery" style={styles.navLink}>Gallery</Link></li>
            <li><Link to="/contact" style={styles.ctaBtn}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  headerWrapper: {
    width: "100%",
    position: "fixed", 
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)", 
  },
  topBar: {
    backgroundColor: "#0B3C5D",
    color: "#fff",
    padding: "10px 40px",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  topBarContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contactInfo: {
    display: "flex",
    gap: "20px",
  },
  divider: {
    opacity: 0.3,
  },
  topBarRight: {
    color: "#F4B41A", 
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  mainHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    textDecoration: "none",
  },
  logoIcon: {
    backgroundColor: "#0B3C5D", 
    color: "#F4B41A", 
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    fontWeight: "800",
    fontSize: "1.4rem",
    border: "2px solid #F4B41A",
  },
  schoolName: {
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#0B3C5D",
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "-0.5px",
  },
  schoolSubtitle: {
    fontSize: "0.65rem",
    color: "#666",
    margin: 0,
    fontWeight: "700",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#333333", 
    fontWeight: "600",
    fontSize: "0.9rem",
    fontFamily: "'Open Sans', sans-serif",
    transition: "color 0.3s ease",
  },
  ctaBtn: {
    textDecoration: "none",
    backgroundColor: "#F4B41A", 
    color: "#0B3C5D", 
    padding: "10px 22px",
    borderRadius: "4px",
    fontSize: "0.85rem",
    fontWeight: "700",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(244, 180, 26, 0.2)",
  }
};

export default Header;