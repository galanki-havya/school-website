import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("Submit Request");
  const [isSent, setIsSent] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  // 1. THE EMBED LINK (For the visual map on the page)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3876.4839603685923!2d78.50550807508915!3d13.689112986696207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQxJzIwLjgiTiA3OMKwMzAnMjkuMSJF!5e0!3m2!1sen!2sin!4v1774425978884!5m2!1sen!2sin8";

  // 2. THE REDIRECT LINK (For the button that opens the Maps App)
  const mapRedirectUrl = "https://www.google.com/maps?q=13.689113,78.508083&z=17&hl=en";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const SERVICE_ID = "service_ifdsywb";
    const TEMPLATE_ID = "template_up3i8cd";
    const PUBLIC_KEY = "zTy7GD0-yYKLZNcro";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setFormStatus("Message Sent! ✓");
          setIsSent(true);
          formRef.current.reset();
          setTimeout(() => {
            setFormStatus("Submit Request");
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
          setFormStatus("Submit Request");
        }
      );
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.badge}>CONNECT WITH US</span>
          <h2 style={{
            ...styles.heading,
            fontSize: isMobile ? "1.8rem" : "2.5rem"
          }}>
            Sri Swamy Vivekananda E M High School
          </h2>
          <div style={styles.underline}></div>
          <p style={styles.subtext}>
            Mudivedu Cross • Kurabalakota Mandal • Annamayya District • Andhra Pradesh - 517350
          </p>
        </div>

        <div style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr"
        }}>
          {/* LEFT COLUMN: CONTACT INFO */}
          <div style={styles.infoColumn}>
            <InfoCard
              icon="📍"
              title="Campus Address"
              lines={["Mudivedu Cross, Kurabalakota Mandal, Annamayya District, Andhra Pradesh - 517350"]}
            />
            <InfoCard
              icon="📞"
              title="Phone Support"
              isPhone={true}
              lines={[
                { label: "Chairman", num: "9440914949" },
                { label: "Head Mistress", num: "9885692469" },
                { label: "Office", num: "8985904949" }
              ]}
            />
            <InfoCard
              icon="✉️"
              title="Email Inquiries"
              lines={["sriswamivivekanandaemhighschool@gmail.com"]}
            />
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div style={{
            ...styles.formBox,
            padding: isMobile ? "20px" : "30px"
          }}>
            <h3 style={styles.formTitle}>Send an Inquiry</h3>
            <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
              <div style={{
                ...styles.formRow,
                flexDirection: isMobile ? "column" : "row"
              }}>
                <input required name="name" placeholder="Student Name" style={styles.input} />
                <input required name="phone" placeholder="Phone Number" style={styles.input} />
              </div>
              <input required name="email" type="email" placeholder="Email Address" style={styles.input} />
              <textarea required name="message" placeholder="Your Message" style={styles.textarea} />

              <button
                type="submit"
                disabled={formStatus === "Sending..."}
                style={{
                  ...styles.button,
                  background: isSent ? "#22c55e" : "#0B3C5D",
                  cursor: formStatus === "Sending..." ? "not-allowed" : "pointer",
                }}
              >
                {formStatus}
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div style={styles.mapContainer}>
          <div style={{ ...styles.mapBox, height: isMobile ? "350px" : "450px" }}>
            <iframe
              title="School Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* THE REDIRECT BUTTON */}
          <div style={styles.mapOverlay}>
            <a 
              href={mapRedirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mapLink}
            >
              📍 View Large Map & Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, lines, isPhone }) => (
  <div style={styles.card}>
    <div style={styles.iconCircle}>{icon}</div>
    <div style={{ flex: 1 }}>
      <h4 style={styles.cardTitle}>{title}</h4>
      {lines.map((line, index) => (
        <p key={index} style={styles.cardText}>
          {isPhone ? (
            <>
              {line.label}: <a href={`tel:+91${line.num}`} style={styles.phoneLink}>{line.num}</a>
            </>
          ) : line}
        </p>
      ))}
    </div>
  </div>
);

const styles = {
  section: { padding: "30px 0 60px 0", background: "#f8fafc", fontFamily: "'Inter', sans-serif" },
  container: { maxWidth: "1150px", margin: "auto", padding: "0 20px" },
  header: { textAlign: "center", marginBottom: "25px" },
  badge: { color: "#F4B41A", fontWeight: 800, letterSpacing: "1.5px", fontSize: "0.8rem" },
  heading: { color: "#0B3C5D", margin: "5px 0", fontWeight: 800, lineHeight: "1.2" },
  underline: { width: "50px", height: "4px", background: "#F4B41A", margin: "0 auto 15px" },
  subtext: { color: "#64748b", fontSize: "1rem" },
  grid: { display: "grid", gap: "30px", alignItems: "start" },
  infoColumn: { display: "flex", flexDirection: "column", gap: "20px" },
  card: {
    display: "flex", alignItems: "flex-start", gap: "15px", padding: "20px",
    background: "#fff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9"
  },
  iconCircle: {
    width: "48px", height: "48px", background: "#f0f7ff", borderRadius: "10px",
    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0
  },
  cardTitle: { margin: "0 0 5px 0", color: "#0B3C5D", fontWeight: 700, fontSize: "1.1rem" },
  cardText: { margin: 0, color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6 },
  phoneLink: { color: "#0B3C5D", textDecoration: "none", fontWeight: "600" },
  formBox: {
    background: "#fff", borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9"
  },
  formTitle: { marginBottom: "25px", color: "#0B3C5D", fontWeight: 800, fontSize: "1.4rem" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  formRow: { display: "flex", gap: "15px" },
  input: { 
    width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #e2e8f0", 
    background: "#fcfdfe", outline: "none", fontSize: "1rem", boxSizing: "border-box" 
  },
  textarea: { 
    width: "100%", padding: "14px", height: "120px", borderRadius: "8px", border: "1px solid #e2e8f0", 
    background: "#fcfdfe", outline: "none", fontSize: "1rem", resize: "vertical", boxSizing: "border-box" 
  },
  button: {
    color: "#fff", padding: "16px", border: "none", borderRadius: "8px", 
    fontWeight: 700, fontSize: "1rem", transition: "all 0.3s ease", width: "100%"
  },
  mapContainer: { marginTop: "50px" },
  mapBox: {
    borderRadius: "15px", overflow: "hidden",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0"
  },
  mapOverlay: { textAlign: "center", marginTop: "15px" },
  mapLink: {
    display: "inline-block", padding: "14px 28px", backgroundColor: "#F4B41A",
    color: "#0B3C5D", textDecoration: "none", fontWeight: "800", borderRadius: "8px",
    fontSize: "1rem", boxShadow: "0 4px 15px rgba(244, 180, 26, 0.4)", transition: "0.3s"
  }
};

export default Contact;