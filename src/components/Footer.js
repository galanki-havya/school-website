import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.contentGrid}>
        
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Sri Swamy Vivekanandha E.M High School</h3>
          <p style={styles.schoolDescription}>
            Nurturing young minds with a blend of modern education and 
            timeless values since 1998.
          </p>
          <div style={styles.socialIcons}>
            {/* Functional Facebook Link */}
            <a 
              href="https://www.facebook.com/surendra.yadav.514223/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.iconLink}
            >
              <div style={styles.iconCircle}>f</div>
            </a>
            <div style={styles.iconCircle}>yt</div>
            <div style={styles.iconCircle}>in</div>
          </div>
        </div>

        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/about" style={styles.link}>About Us</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
            <li><Link to="/gallery" style={styles.link}>Gallery</Link></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Get In Touch</h3>
          <p style={styles.contactItem}>
            📍 Mudivedu Cross, Kurabalakota Mandal, Annamayya District, AP - 517350
          </p>
          
          <div style={styles.contactGroup}>
            <p style={styles.contactItem}>
              📞 <a href="tel:+919440914949" style={styles.link}>+91 94409 14949</a> (Correspondent)
            </p>
            <p style={styles.contactItem}>
              📞 <a href="tel:+919885692469" style={styles.link}>+91 98856 92469</a> (H.M.)
            </p>
            <p style={styles.contactItem}>
              📞 <a href="tel:+918985904949" style={styles.link}>+91 89859 04949</a> (Office)
            </p>
          </div>

          <p style={styles.contactItem}>
            ✉️ <a href="mailto:sriswamivivekanandaemhighschool@gmail.com" style={styles.link}>
              sriswamivivekanandaemhighschool@gmail.com
            </a>
          </p>
        </div>

      </div>

      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          © {currentYear} Sri Swamy Vivekanandha E.M High School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    backgroundColor: "#0B3C5D",
    color: "#FFFFFF",
    padding: "40px 20px 20px 20px", 
    fontFamily: "'Open Sans', sans-serif",
  },
  contentGrid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
    gap: "30px", 
    paddingBottom: "30px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "12px", 
  },
  columnTitle: {
    fontSize: "1.1rem", 
    fontWeight: "700",
    marginBottom: "5px",
    borderLeft: "4px solid #F4B41A",
    paddingLeft: "12px",
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
  },
  schoolDescription: {
    fontSize: "0.85rem", 
    lineHeight: "1.5",
    color: "rgba(255, 255, 255, 0.7)",
    maxWidth: "280px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  link: {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    fontSize: "0.85rem",
    transition: "all 0.3s ease",
  },
  contactGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  contactItem: {
    fontSize: "0.85rem",
    color: "rgba(255, 255, 255, 0.7)",
    margin: "2px 0",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginTop: "5px",
  },
  iconLink: {
    textDecoration: "none",
  },
  iconCircle: {
    width: "30px", 
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    transition: "background 0.3s ease",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
    textAlign: "center",
  },
  copyright: {
    fontSize: "0.75rem",
    color: "rgba(255, 255, 255, 0.5)",
  },
};

export default Footer;