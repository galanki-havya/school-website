import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero"; 
import campusImage from "../assets/school-campus.png";

// Import your leader images here
import correspondentImg from "../assets/Chairman.png";
import principalImg from "../assets/principal.png";

const ThickDivider = ({ color = "#F4B41A" }) => (
  <div style={{
    height: '6px', 
    backgroundColor: color, 
    width: '100%', 
    position: 'relative', 
    zIndex: 3 
  }}></div>
);

function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <div style={styles.heroStickyWrapper}>
         <Hero />
      </div>

      {/* 2. ABOUT SCHOOL */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={{
            ...styles.aboutGrid,
            ...(isMobile ? styles.flexColumn : {})
          }}>
            <div style={{
              ...styles.aboutText,
              ...(isMobile ? { textAlign: 'center' } : {})
            }}>
              <span style={styles.accentText}>Our Legacy</span>
              <h2 style={styles.sectionTitle}>A Tradition of Excellence</h2>
              <div style={{...styles.goldLine, ...(isMobile ? { margin: '10px auto' } : {})}}></div>
              <p style={styles.bodyText}>
                Founded on the principles of Swamy Vivekananda, our institution blends traditional 
                values with modern pedagogical approaches, serving our community for over 25 years 
                through the State Board curriculum.
              </p>
              <button onClick={() => navigate("/about")} style={styles.textBtn}>Read Our Story →</button>
            </div>
            <div style={styles.aboutImageCard}>
              <img src={campusImage} alt="School Campus" style={styles.imgResponsive} />
            </div>
          </div>
        </div>
      </section>

      <ThickDivider color="#0B3C5D" />

      {/* 3. LEADERSHIP MESSAGES (Correspondent & Principal) */}
      <section style={styles.sectionCream}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <span style={styles.accentText}>Our Leadership</span>
            <h2 style={styles.sectionTitle}>Guidance from our Mentors</h2>
            <div style={{...styles.goldLine, margin: '10px auto 0'}}></div>
          </div>

          <div style={{
            ...styles.leadershipGrid,
            ...(isMobile ? styles.flexColumn : {})
          }}>
            
            {/* Correspondent / Chairman */}
            <div style={styles.leaderCard}>
              <div style={styles.leaderImageContainer}>
                {/* Replace src with your correspondentImg variable */}
                <img 
                  src= {correspondentImg}
                  alt="Dr. P. Surendra Yadav" 
                  style={styles.leaderImg} 
                />
              </div>
              <div style={styles.leaderContent}>
                <h3 style={styles.subHeading}>Chairman's Message</h3>
                <p style={styles.italicText}>
                  "Our mission is to provide quality education that empowers students 
                  to become global citizens while staying rooted in our culture."
                </p>
                <h4 style={styles.authorName}>Dr. P. Surendra Yadav</h4>
                <span style={styles.authorTitle}>B.A. • Chairman</span>
              </div>
            </div>

            {/* Principal */}
            <div style={styles.leaderCard}>
              <div style={styles.leaderImageContainer}>
                {/* Replace src with your principalImg variable */}
                <img 
                  src= {principalImg}
                  alt="P. Malleswari" 
                  style={styles.leaderImg} 
                />
              </div>
              <div style={styles.leaderContent}>
                <h3 style={styles.subHeading}>Principal's Message</h3>
                <p style={styles.italicText}>
                  "Education is character building and life-making assimilation of ideas. 
                  We strive for the holistic development of every child."
                </p>
                <h4 style={styles.authorName}>P. Malleswari</h4>
                <span style={styles.authorTitle}>B.A., B.Ed. • Principal</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ThickDivider />

      {/* 4. KEY PILLARS */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '30px'}}>
            <h2 style={styles.sectionTitle}>The SSV Advantage</h2>
            <div style={{...styles.goldLine, margin: '10px auto 0'}}></div>
          </div>
          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <div style={styles.iconContainer}>📖</div>
              <h3 style={styles.cardTitle}>State Curriculum</h3>
              <p style={styles.cardDesc}>Comprehensive academic programs aligned with State Board standards.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.iconContainer}>🔬</div>
              <h3 style={styles.cardTitle}>Infrastructure</h3>
              <p style={styles.cardDesc}>Modern labs and classrooms designed for interactive learning.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.iconContainer}>🛡️</div>
              <h3 style={styles.cardTitle}>Safe Campus</h3>
              <p style={styles.cardDesc}>Secure environment with GPS transport and 24/7 CCTV surveillance.</p>
            </div>
          </div>
        </div>
      </section>

      <ThickDivider color="#0B3C5D" />
      <Testimonials />
      <ThickDivider />

      {/* 5. ENQUIRE NOW */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={{
            ...styles.ctaCard,
            ...(isMobile ? styles.ctaCardMobile : {})
          }}>
            <div style={{
              ...styles.ctaTextContent,
              ...(isMobile ? { textAlign: 'center' } : {})
            }}>
              <h2 style={{
                ...styles.ctaTitle,
                ...(isMobile ? { fontSize: '1.6rem' } : {})
              }}>Ready to join our community?</h2>
              <p style={styles.ctaSubtitle}>Schedule a campus tour today.</p>
            </div>
            <button onClick={() => navigate("/contact")} style={styles.ctaGoldBtn}>Enquire Now</button>
          </div>
        </div>
      </section>
      
      <ThickDivider />
    </div>
  );
}

const styles = {
  pageWrapper: { color: "#333", backgroundColor: "#fff", margin: 0, padding: 0, overflowX: "hidden", fontFamily: "'Inter', sans-serif" },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 20px" },
  heroStickyWrapper: { position: "relative", zIndex: 1 },
  sectionWhite: { padding: "60px 0", backgroundColor: "#fff", position: "relative", zIndex: 2 },
  sectionCream: { padding: "80px 0", backgroundColor: "#fffdf5", position: "relative", zIndex: 2 },
  flexColumn: { flexDirection: "column", textAlign: "center", gap: "30px" },
  aboutGrid: { display: "flex", gap: "40px", alignItems: "center" },
  aboutText: { flex: "1.2" },
  aboutImageCard: { flex: "1", width: "100%" },
  imgResponsive: { width: "100%", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
  sectionTitle: { fontSize: "clamp(1.8rem, 5vw, 2.2rem)", color: "#0B3C5D", fontWeight: "800", margin: 0, lineHeight: 1.2 },
  goldLine: { width: "45px", height: "4px", backgroundColor: "#F4B41A", marginTop: "10px" },
  bodyText: { fontSize: "0.95rem", lineHeight: "1.7", color: "#555", margin: "20px 0" },
  textBtn: { background: "none", border: "none", color: "#0B3C5D", fontWeight: "800", cursor: "pointer", fontSize: "0.95rem", padding: 0 },
  accentText: { color: "#F4B41A", fontWeight: "700", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1.5px" },
  
  // Leadership Specific Styles
  leadershipGrid: { display: "flex", gap: "30px", justifyContent: "center", alignItems: "stretch" },
  leaderCard: { 
    flex: 1, display: "flex", flexDirection: "column", alignItems: "center", 
    backgroundColor: "#fff", padding: "40px 30px", borderRadius: "15px", 
    boxShadow: "0 5px 25px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9" 
  },
  leaderImageContainer: { 
    width: "140px", height: "140px", borderRadius: "50%", overflow: "hidden", 
    marginBottom: "20px", border: "4px solid #F4B41A", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" 
  },
  leaderImg: { width: "100%", height: "100%", objectFit: "cover" },
  leaderContent: { display: "flex", flexDirection: "column", flex: 1 },
  subHeading: { fontSize: "1.4rem", color: "#0B3C5D", margin: "0 0 12px", fontWeight: "700" },
  italicText: { fontStyle: "italic", fontSize: "1rem", marginBottom: "15px", color: "#444", lineHeight: 1.6, flex: 1 },
  authorName: { color: "#0B3C5D", fontWeight: "800", margin: "10px 0 2px", fontSize: "1.1rem" },
  authorTitle: { color: "#F4B41A", fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.5px" },
  
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" },
  featureCard: { padding: "30px 20px", backgroundColor: "#fff", borderBottom: "5px solid #F4B41A", boxShadow: "0 8px 25px rgba(0,0,0,0.05)", textAlign: "center", borderRadius: "10px" },
  iconContainer: { fontSize: "2.5rem", marginBottom: "15px" },
  cardTitle: { color: "#0B3C5D", marginBottom: "10px", fontSize: "1.2rem", fontWeight: "700" },
  cardDesc: { color: "#666", fontSize: "0.9rem", lineHeight: "1.5" },
  ctaSection: { padding: "60px 0", backgroundColor: "#f8fafc", position: "relative", zIndex: 2 },
  ctaCard: { display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0B3C5D", padding: "40px", borderRadius: "20px", gap: "25px" },
  ctaCardMobile: { flexDirection: "column", padding: "30px 20px", textAlign: "center" },
  ctaTextContent: { flex: 1 },
  ctaTitle: { color: "#fff", margin: "0 0 10px", fontWeight: "800" },
  ctaSubtitle: { color: "rgba(255,255,255,0.8)", fontSize: "1rem", margin: 0 },
  ctaGoldBtn: { backgroundColor: "#F4B41A", color: "#0B3C5D", border: "none", padding: "14px 30px", fontWeight: "900", borderRadius: "6px", cursor: "pointer", fontSize: "0.9rem", textTransform: "uppercase", width: "fit-content" }
};

export default Home;