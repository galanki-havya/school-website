import React from "react";

function Campus() {
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Digitally equipped rooms designed for interactive and visual learning using modern smart boards.",
      icon: "🏫"
    },
    {
      title: "Science & Tech Labs",
      desc: "Advanced laboratories for Physics, Chemistry, Biology, and Computer Science to foster practical innovation.",
      icon: "🔬"
    },
    {
      title: "Sports Excellence",
      desc: "Extensive playgrounds and coaching for cricket, football, and track events for physical development.",
      icon: "⚽"
    },
    {
      title: "Library & Research",
      desc: "A quiet sanctuary with a vast collection of academic books, journals, and digital research tools.",
      icon: "📚"
    },
    {
      title: "Arts & Culture",
      desc: "Creative studios for music, dance, and fine arts where students can express their artistic talents.",
      icon: "🎨"
    },
    {
      title: "Safe Transport",
      desc: "A reliable fleet of modern buses equipped with GPS and surveillance for secure student commuting.",
      icon: "🚌"
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <span style={styles.badge}>Our Infrastructure</span>
        <h2 style={styles.heading}>World-Class Campus Facilities</h2>
        <div style={styles.underline}></div>
        <p style={styles.introText}>
          We provide a safe, inspiring, and holistic environment where students 
          can explore their passions with state-of-the-art infrastructure.
        </p>

        <div style={styles.grid}>
          {facilities.map((item, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(11, 60, 93, 0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
              }}
            >
              <div style={styles.iconContainer}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px", 
    backgroundColor: "#FFFFFF", 
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  badge: {
    color: "#F4B41A", 
    fontWeight: "700",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    display: "block",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#0B3C5D", 
    marginTop: "10px",
    fontWeight: "800",
    fontFamily: "'Poppins', sans-serif",
  },
  underline: {
    width: "60px",
    height: "4px",
    backgroundColor: "#F4B41A", 
    margin: "15px auto 30px",
    borderRadius: "2px",
  },
  introText: {
    maxWidth: "750px",
    margin: "0 auto 50px",
    fontSize: "1.05rem",
    color: "#555555", 
    lineHeight: "1.7",
    fontFamily: "'Open Sans', sans-serif",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px",
  },
  card: {
    padding: "45px 35px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    border: "1px solid #edf2f7",
    borderLeft: "5px solid #0B3C5D", 
    transition: "all 0.3s ease",
    textAlign: "left",
    cursor: "default",
  },
  iconContainer: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    display: "inline-block",
  },
  cardTitle: {
    fontSize: "1.3rem",
    color: "#0B3C5D", 
    marginBottom: "12px",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
  },
  cardDesc: {
    fontSize: "0.95rem",
    color: "#666666",
    lineHeight: "1.6",
    fontFamily: "'Open Sans', sans-serif",
  },
};

export default Campus;