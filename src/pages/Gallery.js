import React, { useState } from "react";
import GallerySlider from "../components/GallerySlider";

import Campus1 from "../assets/campus-1.png";
import Campus2 from "../assets/campus-2.png";
import Events1 from "../assets/events-1.png";
import Events2 from "../assets/events-2.png";
import Events3 from "../assets/events-3.png";
import Events4 from "../assets/events-4.png";
import Events5 from "../assets/events-5.png";
import Events6 from "../assets/events-6.png";
import Sports1 from "../assets/sports-1.png";
import Sports2 from "../assets/sports-2.png";
import Sports3 from "../assets/sports-3.png";
import Sports4 from "../assets/sports-4.png";
import ScienceFair1 from "../assets/science-fair-1.png";
import ScienceFair2 from "../assets/science-fair-2.png";
import ScienceFair3 from "../assets/science-fair-3.png";
import Excursion1 from "../assets/excursion-1.png";
import Excursion2 from "../assets/excursion-2.png";
import Excursion3 from "../assets/excursion-3.png";
import Excursion4 from "../assets/excursion-4.png";

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeAlbum, setActiveAlbum] = useState(null);

  const photos = [
    { 
      id: 1, 
      category: "Campus", 
      url: Campus1,
      title: "Main Academic Block",
      album: [
        {url: Campus1, title: "Main Academic Block - Front View"},
        {url: Campus2, title: "Main Academic Block - Side View"}
      ]
    },
    { 
      id: 2, 
      category: "Events", 
      url: Events1,
      title: "Annual Cultural Fest",
      album: [
        {url: Events1, title: "Event-1"},
        {url: Events2, title: "Event-2"},
        {url: Events3, title: "Event-3"},
        {url: Events4, title: "Event-4"},
        {url: Events5, title: "Event-5"},
        {url: Events6, title: "Events-6"}
      ]
    },
    { 
      id: 3, 
      category: "Sports", 
      url: Sports1,
      title: "Athletic Meet",
      album: [
        {url: Sports1, title: "Sports-1"},
        {url: Sports2, title: "Sports-2"},
        {url: Sports3, title: "Sports-3"},
        {url: Sports4, title: "Sports-4"}
      ]
    },
    { 
        id: 4, 
        category: "Events", 
        url: ScienceFair1,
        title: "Science Fair",
        album: [
          {url: ScienceFair1, title: "Science Fair-1"},
          {url: ScienceFair2, title: "Science Fair-2"},
          {url: ScienceFair3, title: "Science Fair-3"}
        ]          
      },
      {
        id: 5,
        category: "Excursion", 
        url: Excursion1, 
        title: "Field Trip",
        album: [
          {url: Excursion1, title: "Excursion-1"},
          {url: Excursion2, title: "Excursion-2"},
          {url: Excursion3, title: "Excursion-3"},
          {url: Excursion4, title: "Excursion-4"}
        ]
      }
  ];

  const categories = ["All", "Campus", "Events", "Sports", "Excursion"];
  const filteredPhotos = filter === "All" ? photos : photos.filter(p => p.category === filter);

  if (activeAlbum) {
    return (
      <div style={styles.pageWrapper}>
        <section style={styles.section}>
          <div style={styles.container}>
            <button onClick={() => setActiveAlbum(null)} style={styles.backBtn}>
              ← Back to Gallery
            </button>
            <div style={{ marginBottom: '30px' }}>
              <span style={styles.badge}>{activeAlbum.category}</span>
              <h2 style={styles.heading}>{activeAlbum.title}</h2>
              <div style={styles.underline}></div>
            </div>
            
            <div style={styles.grid}>
              {activeAlbum.album.map((item, index) => (
                <div key={index} style={styles.photoCard}>
                  <img src={item.url} alt={item.title || "Album detail"} style={styles.gridImage} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <span style={styles.badge}>Visual Journey</span>
            <h2 style={styles.heading}>School Gallery</h2>
            <div style={styles.underline}></div>
          </div>

          <div style={styles.sliderSection}>
            <div style={styles.subHeadingWrapper}>
                <h3 style={styles.subHeading}>Featured Highlights</h3>
            </div>
            <GallerySlider />
          </div>

          <div style={styles.filterBar}>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                style={{
                  ...styles.filterBtn, 
                  backgroundColor: filter === cat ? "#0B3C5D" : "#fff",
                  color: filter === cat ? "#F4B41A" : "#0B3C5D",
                  border: filter === cat ? "1px solid #0B3C5D" : "1px solid #e2e8f0"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={styles.grid}>
            {filteredPhotos.map(photo => (
              <div 
                key={photo.id} 
                style={{...styles.photoCard, cursor: 'pointer'}} 
                onClick={() => setActiveAlbum(photo)}
              >
                <img src={photo.url} alt={photo.title} style={styles.gridImage} />
                <div style={styles.imageCaption}>
                  <span style={styles.photoCategory}>{photo.category}</span>
                  <span style={styles.photoTitle}>{photo.title} (Click to View)</span>
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
  pageWrapper: { backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "'Inter', sans-serif" },
  section: { padding: "40px 20px 60px" },
  container: { maxWidth: "1100px", margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "35px" },
  badge: { color: "#F4B41A", fontWeight: "700", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "1.5px" },
  heading: { fontSize: "2.2rem", color: "#0B3C5D", fontWeight: "800", margin: "5px 0" },
  underline: { width: "40px", height: "3px", backgroundColor: "#F4B41A", margin: "12px auto 0" },
  backBtn: { backgroundColor: "transparent", color: "#0B3C5D", border: "none", fontWeight: "700", cursor: "pointer", marginBottom: "20px", fontSize: "1rem" },
  sliderSection: { marginBottom: "40px" },
  subHeadingWrapper: { borderLeft: "4px solid #F4B41A", paddingLeft: "12px", marginBottom: "15px" },
  subHeading: { fontSize: "1.2rem", color: "#0B3C5D", fontWeight: "700", margin: 0 },
  filterBar: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "25px", flexWrap: "wrap" },
  filterBtn: { padding: "7px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "700", fontSize: "0.8rem", transition: "0.3s" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" },
  photoCard: { position: "relative", borderRadius: "10px", overflow: "hidden", height: "280px", backgroundColor: "#eee", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
  gridImage: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  imageCaption: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "15px", background: "linear-gradient(transparent, rgba(11, 60, 93, 0.95))", color: "#fff" },
  photoTitle: { fontWeight: "600", fontSize: "0.95rem", display: "block" },
  photoCategory: { fontSize: "0.65rem", color: "#F4B41A", textTransform: "uppercase", fontWeight: "700", marginBottom: "3px", display: "block" }
};

export default Gallery;