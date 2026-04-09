import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/about.png"; 

const ThickDivider = ({ color = "#F4B41A" }) => (
  <div style={{
    height: '6px', 
    backgroundColor: color, 
    width: '100%', 
    display: 'block', 
    margin: 0, 
    padding: 0,
    position: 'relative', 
    zIndex: 3 
  }}></div>
);

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.pageWrapper}>
      
      {/* 1. LEGACY SECTION */}
      <section style={styles.firstSection}>
        <div style={styles.container}>
          <div style={{
            ...styles.contentWrapper,
            flexDirection: isMobile ? "column" : "row"
          }}>
            <div style={{
              ...styles.imageSide,
              width: isMobile ? "100%" : "auto",
              marginBottom: isMobile ? "30px" : "0"
            }}>
              <div style={styles.imageBackdrop}></div>
              <img 
                src={aboutImage} 
                alt="Sri Swamy Vivekananda School Campus" 
                style={styles.mainImage} 
              />
              <div style={styles.experienceBox}>
                <span style={styles.expNumber}>25+</span>
                <span style={styles.expText}>Years</span>
              </div>
            </div>

            <div style={{
              ...styles.textSide,
              textAlign: isMobile ? "center" : "left"
            }}>
              <span style={styles.badge}>Our Legacy</span>
              <h2 style={{
                ...styles.heading,
                fontSize: isMobile ? "1.8rem" : "2.2rem"
              }}>Empowering Generations Since 1999</h2>
              <div style={{
                ...styles.underline,
                margin: isMobile ? "15px auto" : "0 0 20px 0"
              }}></div>
              <p style={styles.paragraph}>
                Sri Swamy Vivekananda English Medium High School is a community dedicated 
                to the holistic growth of every child. Inspired by the teachings of Swamy Vivekananda, 
                we blend tradition with modern innovation.
              </p>

              <div style={{
                ...styles.features,
                alignItems: isMobile ? "center" : "flex-start"
              }}>
                <div style={styles.featureItem}>
                  <div style={styles.checkCircle}>✓</div>
                  <div style={{
                    ...styles.featureTextWrapper,
                    textAlign: "left"
                  }}>
                    <strong style={styles.featureTitle}>Academic Rigor:</strong> 
                    <span style={styles.featureDescription}>Focused curriculum designed for competitive success.</span>
                  </div>
                </div>
                
                <div style={styles.featureItem}>
                  <div style={styles.checkCircle}>✓</div>
                  <div style={{
                    ...styles.featureTextWrapper,
                    textAlign: "left"
                  }}>
                    <strong style={styles.featureTitle}>Character Building:</strong> 
                    <span style={styles.featureDescription}>Instilling moral leadership and strong ethical foundations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThickDivider color="#0B3C5D" />

      {/* 2. STATS SECTION */}
      <section style={styles.statsSection}>
        <div style={styles.container}>
          <div style={{
            ...styles.statsGrid,
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "30px" : "0"
          }}>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>1200+</h3>
              <p style={styles.statLabel}>Students Enrolled</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>60+</h3>
              <p style={styles.statLabel}>Expert Educators</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>100%</h3>
              <p style={styles.statLabel}>SSC Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      <ThickDivider />

      {/* 3. VISION & MISSION */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <div style={{
            ...styles.visionGrid,
            flexDirection: isMobile ? "column" : "row"
          }}>
            <div style={styles.visionCard}>
              <span style={styles.visionIcon}>🎯</span>
              <h4 style={styles.cardHeading}>Our Vision</h4>
              <p style={styles.cardText}>To develop innovative thinkers and responsible global citizens through value-based education.</p>
            </div>
            <div style={styles.visionCard}>
              <span style={styles.visionIcon}>🚀</span>
              <h4 style={styles.cardHeading}>Our Mission</h4>
              <p style={styles.cardText}>To foster curiosity, discipline, and excellence through a holistic learning environment.</p>
            </div>
          </div>
        </div>
      </section>

      <ThickDivider color="#0B3C5D" />

      {/* 4. CTA SECTION */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={{
            ...styles.ctaHeading,
            fontSize: isMobile ? "1.6rem" : "2rem"
          }}>Admissions Open for 2026-27</h2>
          <p style={styles.ctaSubtext}>Take the first step towards securing your child's future.</p>
          <div style={styles.ctaButtons}>
            <Link to="/contact" style={{ textDecoration: 'none', width: isMobile ? "100%" : "auto" }}>
              <button style={{
                ...styles.secondaryBtn,
                width: isMobile ? "100%" : "auto"
              }}>Contact Us Now</button>
            </Link>
          </div>
        </div>
      </section>

      <ThickDivider />
    </div>
  );
}

const styles = {
  pageWrapper: { fontFamily: "'Inter', sans-serif", color: "#333", backgroundColor: "#fff", margin: 0, padding: 0, overflowX: "hidden" },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 25px" },
  firstSection: { padding: "60px 0", margin: 0 }, 
  statsSection: { backgroundColor: "#0B3C5D", padding: "50px 0", color: "#fff", margin: 0 },
  sectionLight: { padding: "60px 0", backgroundColor: "#f8fafc", margin: 0 },
  ctaSection: { backgroundColor: "#f1f5f9", padding: "60px 0", textAlign: "center", margin: 0 },
  contentWrapper: { display: "flex", alignItems: "center", gap: "50px" },
  imageSide: { position: "relative", maxWidth: "500px" },
  imageBackdrop: { position: "absolute", top: "-10px", left: "-10px", width: "100%", height: "100%", backgroundColor: "#F4B41A", borderRadius: "12px", zIndex: 1 },
  mainImage: { width: "100%", height: "auto", minHeight: "280px", objectFit: "cover", borderRadius: "12px", position: "relative", zIndex: 2, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
  experienceBox: { position: "absolute", bottom: "20px", right: "-10px", backgroundColor: "#0B3C5D", color: "#F4B41A", padding: "12px 20px", borderRadius: "8px", zIndex: 3, textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" },
  expNumber: { display: "block", fontSize: "1.4rem", fontWeight: "900" },
  expText: { fontSize: "0.6rem", fontWeight: "700", textTransform: "uppercase", color: "#fff" },
  textSide: { flex: 1 },
  badge: { color: "#F4B41A", fontWeight: "800", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px" },
  heading: { color: "#0B3C5D", margin: "10px 0", fontWeight: "800", lineHeight: "1.2" },
  underline: { width: "50px", height: "4px", backgroundColor: "#F4B41A" },
  paragraph: { fontSize: "1rem", color: "#555", lineHeight: "1.7", margin: "20px 0" },
  features: { display: "flex", flexDirection: "column", gap: "20px" },
  featureItem: { display: "flex", alignItems: "flex-start", gap: "15px", maxWidth: "500px" },
  checkCircle: { backgroundColor: "#F4B41A", color: "#0B3C5D", minWidth: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "0.8rem", marginTop: "2px" },
  featureTextWrapper: { display: "flex", flexDirection: "column" },
  featureTitle: { color: "#0B3C5D", fontSize: "1rem", fontWeight: "800" },
  featureDescription: { color: "#666", fontSize: "0.9rem", lineHeight: "1.5" },
  statsGrid: { display: "flex", justifyContent: "space-between", textAlign: "center" },
  statItem: { flex: 1 },
  statNumber: { fontSize: "2.5rem", color: "#F4B41A", margin: 0, fontWeight: "900" },
  statLabel: { margin: "5px 0 0", opacity: 0.9, fontSize: "1rem", fontWeight: "600" },
  visionGrid: { display: "flex", gap: "25px" },
  visionCard: { flex: 1, backgroundColor: "#fff", padding: "40px 30px", borderRadius: "15px", boxShadow: "0 8px 25px rgba(0,0,0,0.05)", borderTop: "6px solid #F4B41A" },
  visionIcon: { fontSize: "2.5rem", display: "block", marginBottom: "15px" },
  cardHeading: { fontSize: "1.4rem", color: "#0B3C5D", margin: "0 0 12px 0", fontWeight: "800" },
  cardText: { fontSize: "0.95rem", color: "#666", lineHeight: "1.6", margin: 0 },
  ctaHeading: { color: "#0B3C5D", fontWeight: "800", margin: "0 0 15px 0" },
  ctaSubtext: { color: "#555", margin: "0 0 30px 0", fontSize: "1.1rem" },
  ctaButtons: { display: "flex", justifyContent: "center" },
  secondaryBtn: { backgroundColor: "#0B3C5D", color: "#fff", padding: "14px 40px", border: "none", borderRadius: "6px", fontSize: "1rem", fontWeight: "800", cursor: "pointer", boxShadow: "0 4px 12px rgba(11, 60, 93, 0.2)" }
};

export default About;