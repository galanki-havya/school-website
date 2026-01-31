import React from "react";

function Admissions() {
  const FORM_URL = "/admission-form.pdf"; 

  const steps = [
    { num: "01", title: "Enquiry", desc: "Visit our campus or fill out the online form to receive the prospectus." },
    { num: "02", title: "Interaction", desc: "A formal interaction session with the Principal to discuss student needs." },
    { num: "03", title: "Registration", desc: "Submit the application form with required documents at the office." },
    { num: "04", title: "Admission", desc: "Payment of fees and completion of formalities to join the family." }
  ];

  const documents = [
    "Original Birth Certificate",
    "Aadhar Card (Student/Parents)",
    "Transfer Certificate (TC)",
    "4 Passport Photographs",
    "Previous Class Report Card",
    "Community Certificate"
  ];

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Admissions 2026-27</h1>
          <p style={styles.heroSubtitle}>Start Your Child's Journey with Us</p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={styles.badge}>Simple 4-Step Process</span>
            <h2 style={styles.heading}>How to Apply</h2>
            <div style={styles.underlineCenter}></div>
          </div>
          
          <div style={styles.stepGrid}>
            {steps.map((step, index) => (
              <div key={index} style={styles.stepCard}>
                <div style={styles.stepNumber}>{step.num}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.docSection}>
        <div style={styles.container}>
          <div style={styles.docGrid}>
            <div style={styles.docText}>
              <span style={styles.badge}>Requirements</span>
              <h2 style={styles.heading}>Document Checklist</h2>
              <div style={styles.underline}></div>
              <p style={styles.docIntro}>
                Please ensure you have these original documents ready. 
                These must be submitted along with your printed admission form.
              </p>
              
              <div style={styles.checkList}>
                {documents.map((doc, i) => (
                  <div key={i} style={styles.checkItem}>
                    <span style={styles.checkMark}>✔</span>
                    <span style={styles.docLabel}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={styles.docCard}>
              <h3 style={styles.cardTitle}>Age Criteria</h3>
              <p style={styles.cardText}>
                <strong style={{color: '#0B3C5D'}}>LKG:</strong> 3+ Years as of June 1st<br/>
                <strong style={{color: '#0B3C5D'}}>Class I:</strong> 5+ Years as of June 1st
              </p>
              <div style={styles.divider}></div>
              
              <a href={FORM_URL} download="Admission_Form_2026.pdf" style={{ textDecoration: 'none' }}>
                <button 
                  style={styles.downloadBtn}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#d9a016';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#F4B41A';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Download Form
                </button>
              </a>
              <p style={styles.downloadNote}>PDF Includes Printed Checklist</p>
            </div>
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
    backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#fff"
  },
  heroOverlay: { position: "absolute", inset: 0, backgroundColor: "rgba(11, 60, 93, 0.85)" },
  heroTitle: { position: "relative", fontSize: "2.2rem", fontWeight: "800", marginBottom: "5px", width: '100%' },
  heroSubtitle: { position: "relative", fontSize: "0.85rem", color: "#F4B41A", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", width: '100%' },

  section: { padding: "50px 0", backgroundColor: "#fff" },
  docSection: { padding: "50px 0", backgroundColor: "#f8fafc", borderTop: '1px solid #e2e8f0' },
  
  badge: { color: "#F4B41A", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.7rem", display: 'block', marginBottom: '5px' },
  heading: { fontSize: "1.8rem", color: "#0B3C5D", margin: "0", fontWeight: "800" },
  underline: { width: "40px", height: "4px", backgroundColor: "#F4B41A", marginTop: "8px", marginBottom: '15px' },
  underlineCenter: { width: "40px", height: "4px", backgroundColor: "#F4B41A", margin: "8px auto 0" },

  stepGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginTop: "30px" },
  stepCard: { textAlign: "center", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", border: '1px solid #edf2f7', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' },
  stepNumber: { fontSize: "2.5rem", fontWeight: "900", color: "rgba(11, 60, 93, 0.05)", marginBottom: "-25px" },
  stepTitle: { color: "#0B3C5D", fontSize: "1rem", fontWeight: "700", position: "relative" },
  stepDesc: { color: "#4a5568", fontSize: "0.8rem", lineHeight: "1.5", marginTop: "10px" },

  docGrid: { display: "flex", gap: "30px", alignItems: "flex-start", flexWrap: "wrap" },
  docText: { flex: 1.5, minWidth: "300px" },
  docIntro: { marginBottom: "20px", color: "#4a5568", fontSize: "0.9rem", lineHeight: "1.6" },
  checkList: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" },
  checkItem: { display: 'flex', alignItems: 'center', gap: '8px' },
  checkMark: { color: "#0B3C5D", fontWeight: "bold", fontSize: '1rem' },
  docLabel: { fontSize: "0.9rem", fontWeight: "600", color: "#334155" },

  docCard: { flex: 1, minWidth: "260px", backgroundColor: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 10px 25px rgba(11, 60, 93, 0.05)", borderTop: '4px solid #F4B41A' },
  cardTitle: { color: "#0B3C5D", marginBottom: '10px', fontSize: '1.1rem', fontWeight: '700' },
  cardText: { color: "#4a5568", fontSize: "0.85rem", lineHeight: "1.6", margin: 0 },
  divider: { margin: '15px 0', borderTop: '1px solid #f1f5f9' },
  downloadBtn: { width: "100%", backgroundColor: "#F4B41A", color: "#0B3C5D", border: "none", padding: "12px", borderRadius: "6px", fontWeight: "800", cursor: "pointer", fontSize: "0.9rem", transition: 'all 0.2s ease' },
  downloadNote: { textAlign: 'center', fontSize: '0.65rem', color: '#718096', marginTop: '8px' }
};

export default Admissions;