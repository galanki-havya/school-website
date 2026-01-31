import React, { useEffect, useState } from "react";

import schoolFront from "../assets/school-front.jpg";
import scienceLab from "../assets/science-lab.jpg";
import playground from "../assets/sports.jpg";

const images = [
  { url: schoolFront, title: "Modern Campus Infrastructure" },
  { url: scienceLab, title: "Interactive Learning Environments" },
  { url: playground, title: "Sports & Extracurricular Excellence" }
];

function GallerySlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  return (
    <div style={styles.sliderWrapper}>
      <button onClick={handlePrev} style={styles.arrowLeft}>&#10094;</button>
      <button onClick={handleNext} style={styles.arrowRight}>&#10095;</button>

      <div style={{ ...styles.imageContainer, opacity: fade ? 1 : 0 }}>
        <img src={images[index].url} alt={images[index].title} style={styles.image} />
        <div style={styles.captionBox}>
          <div style={styles.captionAccent}></div>
          <p style={styles.caption}>{images[index].title}</p>
        </div>
      </div>

      <div style={styles.dotContainer}>
        {images.map((_, i) => (
          <div 
            key={i} 
            style={{
              ...styles.dot, 
              backgroundColor: i === index ? "#F4B41A" : "rgba(255,255,255,0.5)",
              width: i === index ? "20px" : "8px"
            }} 
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  sliderWrapper: { position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
  imageContainer: { transition: "opacity 0.4s ease-in-out", backgroundColor: "#0B3C5D", height: "450px" },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  captionBox: { position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(transparent, rgba(11, 60, 93, 0.9))", padding: "30px 20px", display: "flex", alignItems: "center", gap: "12px" },
  captionAccent: { width: "3px", height: "20px", backgroundColor: "#F4B41A" },
  caption: { color: "#fff", fontSize: "1.1rem", fontWeight: "600", margin: 0, fontFamily: "inherit" },
  arrowLeft: { position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(11, 60, 93, 0.4)", border: "none", color: "#fff", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" },
  arrowRight: { position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(11, 60, 93, 0.4)", border: "none", color: "#fff", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" },
  dotContainer: { position: "absolute", bottom: "20px", right: "20px", display: "flex", gap: "8px" },
  dot: { height: "8px", borderRadius: "4px", transition: "all 0.4s ease" }
};

export default GallerySlider;