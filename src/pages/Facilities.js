import React from "react";
import { useNavigate } from "react-router-dom";

function Facilities() {
  const navigate = useNavigate();

  const primaryFacilities = [
    {
      title: "Science Labs",
      icon: "🧪",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800",
      description: "Advanced Physics, Chemistry, and Biology labs designed to foster curiosity through hands-on experiments."
    },
    {
      title: "ICT Smart Lab",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
      description: "High-tech computer center with 1:1 student-to-PC ratio, equipped with the latest educational software."
    },
    {
      title: "Digital Library",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
      description: "A knowledge sanctuary featuring over 5,000 titles and a digital archive accessible to all students."
    }
  ];

  const secondaryFacilities = [
    { icon: "⚽", title: "Sports", detail: "Football ground, Athletics, and Cricket nets." },
    { icon: "🎨", title: "Arts Studio", detail: "Dedicated space for painting and traditional crafts." },
    { icon: "🧘", title: "Wellness", detail: "Serene environment for Yoga and Meditation." },
    { icon: "🚌", title: "Transport", detail: "CCTV & GPS enabled buses for safe commuting." },
    { icon: "💧", title: "RO Water", detail: "Pure drinking water across every floor." },
    { icon: "🛡️", title: "Security", detail: "24/7 CCTV and trained campus security." }
  ];

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.container}>
          <span style={styles.heroBadge}>Our Campus</span>
          <h1 style={styles.heroTitle}>Infrastructure</h1>
          <p style={styles.heroSubtitle}>Designed to inspire learning and holistic growth.</p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <h2 style={styles.heading}>Premier Learning Spaces</h2>
            <div style={styles.underline}></div>
          </div>
          <div style={styles.mainGrid}>
            {primaryFacilities.map((item, index) => (
              <div key={index} style={styles.mainCard}>
                <img src={item.image} alt={item.title} style={styles.cardImg} />
                <div style={styles.cardBody}>
                  <div style={styles.cardHeader}>
                    <span style={styles.cardIcon}>{item.icon}</span>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <p style={styles.cardText}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: "#f8fafc" }}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <h2 style={styles.heading}>Comprehensive Amenities</h2>
            <div style={styles.underline}></div>
          </div>
          <div style={styles.amenityGrid}>
            {secondaryFacilities.map((item, index) => (
              <div key={index} style={styles.amenityCard}>
                <div style={styles.amenityIcon}>{item.icon}</div>
                <h4 style={styles.amenityTitle}>{item.title}</h4>
                <p style={styles.amenityText}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>Ready to see more?</h2>
          <p style={styles.ctaSubtitle}>Schedule a visit to experience our world-class facilities in person.</p>
          <button 
            onClick={() => navigate("/contact")} 
            style={styles.ctaBtn}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#164e73")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0B3C5D")}
          >
            Book a Tour
          </button>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: { marginTop: "0px", fontFamily: "'Inter', sans-serif", color: "#2d3748" },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 20px" },
  section: { padding: "50px 0" },
  hero: {
    height: "25vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1400')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    textAlign: "center"
  },
  heroOverlay: { position: "absolute", inset: 0, backgroundColor: "rgba(11, 60, 93, 0.85)" },
  heroBadge: { position: "relative", backgroundColor: "#F4B41A", color: "#0B3C5D", padding: "4px 12px", borderRadius: "4px", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase" },
  heroTitle: { position: "relative", fontSize: "2.5rem", fontWeight: "800", marginTop: "10px", width: '100%' },
  heroSubtitle: { position: "relative", fontSize: "0.95rem", opacity: 0.9, width: '100%' },
  heading: { fontSize: "1.8rem", color: "#0B3C5D", fontWeight: "800", margin: 0 },
  underline: { width: "40px", height: "4px", backgroundColor: "#F4B41A", margin: "8px auto 0" },
  mainGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px", marginTop: "30px" },
  mainCard: { backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", border: "1px solid #edf2f7" },
  cardImg: { width: "100%", height: "200px", objectFit: "cover" },
  cardBody: { padding: "20px" },
  cardHeader: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" },
  cardIcon: { fontSize: "1.4rem" },
  cardTitle: { color: "#0B3C5D", fontSize: "1.2rem", fontWeight: "700", margin: 0 },
  cardText: { color: "#4a5568", lineHeight: "1.6", fontSize: "0.85rem", margin: 0 },
  amenityGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", marginTop: "30px" },
  amenityCard: { backgroundColor: "#fff", padding: "25px 20px", borderRadius: "10px", textAlign: "center", borderBottom: "4px solid #F4B41A", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" },
  amenityIcon: { fontSize: "2rem", marginBottom: "12px" },
  amenityTitle: { color: "#0B3C5D", fontSize: "1rem", fontWeight: "700", marginBottom: "5px" },
  amenityText: { color: "#718096", fontSize: "0.8rem", margin: 0 },
  cta: { backgroundColor: "#f8fafc", color: "#0B3C5D", padding: "60px 20px", textAlign: "center", borderTop: "1px solid #e2e8f0" },
  ctaTitle: { fontSize: "1.8rem", fontWeight: "800", marginBottom: "10px" },
  ctaSubtitle: { fontSize: "0.95rem", color: "#4a5568", marginBottom: "25px" },
  ctaBtn: { backgroundColor: "#0B3C5D", color: "#fff", padding: "14px 40px", border: "none", borderRadius: "6px", fontWeight: "800", cursor: "pointer", fontSize: "0.9rem", transition: "all 0.3s ease", boxShadow: "0 4px 12px rgba(11, 60, 93, 0.2)" }
};

export default Facilities;