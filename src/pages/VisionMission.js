import React from "react";

function VisionMission() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.badge}>Our Foundation</span>
          <h2 style={styles.heading}>Vision & Mission</h2>
          <div style={styles.underline}></div>
        </div>

        <div style={styles.visionCard}>
          <div style={styles.iconBox}>👁️</div>
          <div style={styles.content}>
            <h3 style={styles.cardTitle}>Our Vision</h3>
            <p style={styles.text}>
              To be a center of excellence in education, inspired by the teachings of 
              Swamy Vivekananda, nurturing future-ready global citizens who are 
              intellectually competent, morally upright, and socially responsible. 
              We aim to manifest the perfection already existing in every child.
            </p>
          </div>
        </div>

        <div style={styles.missionGrid}>
          <div style={styles.missionCard}>
            <div style={styles.missionIcon}>🎯</div>
            <h4 style={styles.missionTitle}>Holistic Excellence</h4>
            <p style={styles.missionText}>
              Providing a balanced curriculum that emphasizes academic rigor alongside 
              physical, emotional, and spiritual growth.
            </p>
          </div>

          <div style={styles.missionCard}>
            <div style={styles.missionIcon}>⚖️</div>
            <h4 style={styles.missionTitle}>Value-Based Learning</h4>
            <p style={styles.missionText}>
              Instilling integrity, compassion, and respect for cultural heritage 
              to build a strong character in every student.
            </p>
          </div>

          <div style={styles.missionCard}>
            <div style={styles.missionIcon}>🚀</div>
            <h4 style={styles.missionTitle}>Future Readiness</h4>
            <p style={styles.missionText}>
              Equipping students with 21st-century skills, critical thinking, and 
              technological literacy to excel globally.
            </p>
          </div>
        </div>

        <div style={styles.quoteBox}>
          <p style={styles.quote}>
            "Education is the manifestation of the perfection already in man."
          </p>
          <span style={styles.author}>— Swamy Vivekananda</span>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: "1150px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "70px",
  },
  badge: {
    color: "#F4B41A",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "0.85rem",
    fontFamily: "'Open Sans', sans-serif",
  },
  heading: {
    fontSize: "3rem",
    color: "#0B3C5D", 
    fontWeight: "800",
    marginTop: "10px",
    fontFamily: "'Poppins', sans-serif",
  },
  underline: {
    width: "70px",
    height: "5px",
    backgroundColor: "#F4B41A",
    margin: "20px auto",
    borderRadius: "2px",
  },
  visionCard: {
    display: "flex",
    alignItems: "center",
    gap: "50px",
    backgroundColor: "#0B3C5D", 
    color: "#fff",
    padding: "70px 60px",
    borderRadius: "15px",
    marginBottom: "60px",
    flexWrap: "wrap",
    boxShadow: "0 25px 50px rgba(11, 60, 93, 0.2)",
    position: "relative",
    overflow: "hidden",
  },
  iconBox: {
    fontSize: "4.5rem",
    backgroundColor: "rgba(244, 180, 26, 0.15)", 
    width: "120px",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    color: "#F4B41A",
  },
  content: {
    flex: 1,
    minWidth: "320px",
  },
  cardTitle: {
    fontSize: "2.2rem",
    marginBottom: "20px",
    color: "#F4B41A", 
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.9",
    opacity: 0.95,
    fontFamily: "'Open Sans', sans-serif",
  },
  missionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "35px",
    marginBottom: "80px",
  },
  missionCard: {
    padding: "50px 40px",
    borderRadius: "12px",
    backgroundColor: "#f8fafc",
    borderTop: "6px solid #F4B41A", 
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
  },
  missionIcon: {
    fontSize: "2.8rem",
    marginBottom: "25px",
  },
  missionTitle: {
    fontSize: "1.4rem",
    color: "#0B3C5D",
    marginBottom: "15px",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
  },
  missionText: {
    color: "#4a5568",
    lineHeight: "1.7",
    fontSize: "1.05rem",
  },
  quoteBox: {
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "#f0f4f8",
    borderRadius: "15px",
    border: "1px solid #e2e8f0",
  },
  quote: {
    fontSize: "1.6rem",
    fontStyle: "italic",
    color: "#0B3C5D",
    fontWeight: "600",
    marginBottom: "15px",
    fontFamily: "'Georgia', serif",
  },
  author: {
    color: "#F4B41A",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "0.9rem",
  },
};

export default VisionMission;