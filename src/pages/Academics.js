import React from "react";

function Academics() {
  const levels = [
    {
      title: "Primary Wing",
      grades: "Grade I - V",
      desc: "Focusing on fundamental skills in literacy and numeracy through activity-based learning.",
      features: ["Language Arts", "Mathematics", "Environmental Science", "Art & Craft"]
    },
    {
      title: "Middle School",
      grades: "Grade VI - VIII",
      desc: "Transitioning to abstract concepts and specialized subject matter expertise.",
      features: ["Sciences", "Social Studies", "Regional Languages", "Computer Coding"]
    },
    {
      title: "Secondary Wing",
      grades: "Grade IX - X",
      desc: "Rigorous CBSE preparation with a focus on critical thinking and board exam excellence.",
      features: ["Advanced Math", "Physics/Chem/Bio", "Digital Literacy", "Career Guidance"]
    }
  ];

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Academic Excellence</h1>
          <p style={styles.heroSubtitle}>A Structured CBSE Framework</p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            <div style={styles.textSide}>
              <span style={styles.badge}>Our Approach</span>
              <h2 style={styles.heading}>The SSV Methodology</h2>
              <div style={styles.underline}></div>
              <p style={styles.paragraph}>
                We follow the <strong>5-3-3-4 pedagogical structure</strong> as per the NEP. 
                Our teaching goes beyond textbooks, focusing on "Learning by Doing" to ensure students 
                understand the 'Why' behind every concept.
              </p>
              <ul style={styles.list}>
                <li>Interactive Smart Classrooms</li>
                <li>Individual Attention</li>
                <li>Comprehensive Evaluation</li>
                <li>Holistic Skill Development</li>
              </ul>
            </div>
            <div style={styles.imageSide}>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800" 
                alt="Teaching Methodology" 
                style={styles.image} 
              />
            </div>
          </div>
        </div>
      </section>

      <section style={styles.levelSection}>
        <div style={styles.container}>
          <div style={styles.levelGrid}>
            {levels.map((level, index) => (
              <div key={index} style={styles.levelCard}>
                <span style={styles.cardGrades}>{level.grades}</span>
                <h3 style={styles.cardTitle}>{level.title}</h3>
                <p style={styles.cardDesc}>{level.desc}</p>
                <div style={styles.featureList}>
                  {level.features.map((f, i) => (
                    <span key={i} style={styles.featureTag}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: { marginTop: "0px", fontFamily: "'Inter', sans-serif", color: "#2d3748" },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 20px" },
  hero: {
    height: "25vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1400')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#fff"
  },
  heroOverlay: { position: "absolute", inset: 0, backgroundColor: "rgba(11, 60, 93, 0.85)" },
  heroTitle: { position: "relative", fontSize: "2.5rem", fontWeight: "800", marginBottom: "5px", width: "100%" },
  heroSubtitle: { position: "relative", fontSize: "0.85rem", color: "#F4B41A", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", width: "100%" },
  section: { padding: "50px 0" },
  grid: { display: "flex", gap: "30px", alignItems: "center", flexWrap: "wrap" },
  textSide: { flex: 1, minWidth: "300px" },
  imageSide: { flex: 1, minWidth: "300px" },
  image: { width: "100%", borderRadius: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.08)" },
  badge: { color: "#F4B41A", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.75rem" },
  heading: { fontSize: "1.8rem", color: "#0B3C5D", margin: "5px 0", fontWeight: "800" },
  underline: { width: "40px", height: "4px", backgroundColor: "#F4B41A", marginBottom: "15px" },
  paragraph: { fontSize: "0.95rem", lineHeight: "1.6", color: "#4a5568", marginBottom: "12px" },
  list: { paddingLeft: "18px", color: "#0B3C5D", fontWeight: "600", lineHeight: "1.6", fontSize: "0.9rem" },
  levelSection: { padding: "50px 0", backgroundColor: "#f8fafc" },
  levelGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" },
  levelCard: { backgroundColor: "#fff", padding: "25px", borderRadius: "12px", borderTop: "5px solid #F4B41A", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  cardGrades: { color: "#F4B41A", fontWeight: "800", fontSize: "0.7rem", textTransform: "uppercase" },
  cardTitle: { fontSize: "1.3rem", color: "#0B3C5D", margin: "5px 0", fontWeight: "700" },
  cardDesc: { color: "#718096", marginBottom: "15px", lineHeight: "1.5", fontSize: "0.85rem" },
  featureList: { display: "flex", flexWrap: "wrap", gap: "6px" },
  featureTag: { backgroundColor: "#f1f5f9", color: "#0B3C5D", padding: "4px 8px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "600" }
};

export default Academics;