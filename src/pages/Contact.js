import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("Submit Request");
  const [isSent, setIsSent] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

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
            Sri Swami Vivekanandha E M High School
          </h2>
          <div style={styles.underline}></div>
          <p style={styles.subtext}>
            Mudivedu • Chittoor District • Andhra Pradesh - 517350
          </p>
        </div>

        <div style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr"
        }}>
          <div style={styles.infoColumn}>
            <InfoCard
              icon="📍"
              title="Campus Address"
              lines={["Mudivedu, Chittoor District, Andhra Pradesh - 517350"]}
            />
            <InfoCard
              icon="📞"
              title="Phone Support"
              lines={["+91 94418 03588"]}
            />
            <InfoCard
              icon="✉️"
              title="Email Inquiries"
              lines={["sriswamivivekanandaemhighschool@gmail.com"]}
            />
          </div>

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
                <input required name="name" placeholder="Guardian Name" style={styles.input} />
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

        <div style={{
          ...styles.mapBox,
          height: isMobile ? "300px" : "400px"
        }}>
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.891157640428!2d78.47353977508688!3d13.54228968682859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb95dc5c5331465%3A0x5b653ecd5d873812!2sSri%20Swami%20Vivekananda%20High%20School!5e0!3m2!1sen!2sin!4v1705000000000!5m2!1sen!2sin"
            height="100%"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, lines }) => (
  <div style={styles.card}>
    <div style={styles.iconCircle}>{icon}</div>
    <div style={{ flex: 1 }}>
      <h4 style={styles.cardTitle}>{title}</h4>
      {lines.map((line, index) => (
        <p key={index} style={styles.cardText}>{line}</p>
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
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    border: "1px solid #f1f5f9"
  },
  iconCircle: {
    width: "48px",
    height: "48px",
    background: "#f0f7ff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    flexShrink: 0
  },
  cardTitle: { margin: "0 0 5px 0", color: "#0B3C5D", fontWeight: 700, fontSize: "1.1rem" },
  cardText: { margin: 0, color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6 },
  formBox: {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    border: "1px solid #f1f5f9"
  },
  formTitle: { marginBottom: "25px", color: "#0B3C5D", fontWeight: 800, fontSize: "1.4rem" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  formRow: { display: "flex", gap: "15px" },
  input: { 
    width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #e2e8f0", 
    background: "#fcfdfe", outline: "none", fontSize: "1rem", boxSizing: "border-box" 
  },
  textarea: { 
    width: "100%", padding: "14px", height: "50px", borderRadius: "8px", border: "1px solid #e2e8f0", 
    background: "#fcfdfe", outline: "none", fontSize: "1rem", resize: "none", boxSizing: "border-box" 
  },
  button: {
    color: "#fff", padding: "16px", border: "none", borderRadius: "8px", 
    fontWeight: 700, fontSize: "1rem", transition: "all 0.3s ease", width: "100%"
  },
  mapBox: {
    marginTop: "50px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    border: "1px solid #e2e8f0"
  }
};

export default Contact;