import React from "react";

function Testimonials() {
  const reviews = [
    {
      name: "Ravi Kumar",
      role: "Parent",
      text: "The discipline and values taught here are exceptional. My son has not only improved academically but also developed responsibility.",
    },
    {
      name: "Lakshmi",
      role: "Alumni",
      text: "The foundation I received at SSV helped me clear my competitive exams with ease. The teachers are truly mentors for life.",
    },
    {
      name: "Anjali",
      role: "Parent",
      text: "A perfect blend of modern infrastructure and traditional ethics. We are very happy with the holistic growth of our daughter.",
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <span style={styles.badge}>Community Voices</span>
        <h2 style={styles.heading}>What Parents & Students Say</h2>
        <div style={styles.underline}></div>
        <div style={styles.grid}>
          {reviews.map((item, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={styles.quoteIcon}>“</div>
              <p style={styles.feedback}>{item.text}</p>
              <div style={styles.divider}></div>
              <h4 style={styles.authorName}>{item.name}</h4>
              <span style={styles.authorRole}>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 0", 
    backgroundColor: "#f8fafc",
    overflow: "hidden", 
  },
  container: {
    maxWidth: "1100px", 
    margin: "0 auto",
    padding: "0 20px",
    textAlign: "center",
  },
  badge: {
    color: "#F4B41A",
    fontWeight: "700",
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    display: "block",
    marginBottom: "5px",
  },
  heading: {
    fontSize: "2.2rem", 
    color: "#0B3C5D",
    marginBottom: "10px",
    fontWeight: "800",
  },
  underline: {
    width: "50px",
    height: "3px",
    backgroundColor: "#F4B41A",
    margin: "0 auto 40px",
    borderRadius: "2px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center", 
    flexWrap: "wrap", 
    padding: "10px 0",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px 25px", 
    borderRadius: "12px",
    flex: "1 1 300px", 
    maxWidth: "340px", 
    boxShadow: "0 10px 25px rgba(11, 60, 93, 0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease",
    border: "1px solid #edf2f7",
  },
  quoteIcon: {
    fontSize: "3.5rem", 
    height: "35px",
    lineHeight: "1",
    fontFamily: "serif",
    marginBottom: "15px",
    color: "#F4B41A",
  },
  feedback: {
    fontSize: "0.95rem", 
    color: "#4a5568",
    lineHeight: "1.6",
    fontStyle: "italic",
    marginBottom: "20px",
    minHeight: "80px",
  },
  divider: {
    width: "40px",
    height: "2px",
    backgroundColor: "#F4B41A",
    marginBottom: "15px",
    opacity: 0.5,
  },
  authorName: {
    fontSize: "1.1rem",
    color: "#0B3C5D",
    margin: "0",
    fontWeight: "700",
  },
  authorRole: {
    fontSize: "0.75rem",
    color: "#718096",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "600",
    marginTop: "3px",
  },
};

export default Testimonials;