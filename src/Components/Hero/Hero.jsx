import React from "react";
import "./Hero.css";

// Import images
import cat1 from "../../assets/category1.jpg";
import cat2 from "../../assets/category2.jpg";
import cat3 from "../../assets/category3.jpg";
import cat4 from "../../assets/category4.jpg";
import cat5 from "../../assets/category5.jpg";

const Hero = () => {
  const images = [
    {
      src: cat1,
      title: "  Women's wears",
      subtitle: "SHOP NOW",
      description: "nd summer ki gdffii gith houserem 30 fime good "
    },
    {
      src: cat2,
      title: "Men's fashion",
      subtitle: "SHOP NOW",
      description: "354 items"
    },
    {
      src: cat3,
      title: "Kid's fashion",
      subtitle: "SHOP NOW",
      description: "201 items"
    },
    {
      src: cat4,
      title: "Cosmetics",
      subtitle: "SHOP NOW",
      description: "332 item"
    },
    {
      src: cat5,
      title: "Accessories",
      subtitle: "SHOP NOW",
      description: "545 items"
    },
  ];

  return (
    <div className="hero-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-item ${index === 0 ? "cat1" : ""}`}
        >
          <img src={img.src} alt={img.title} />
          

          <div className="hero-text">
  <h1>{img.title}</h1>
  <p>{img.description}</p>
  <h3 >{img.subtitle}</h3> {/* Moved to bottom */}
</div>

        </div>
      ))}
    </div>
  );
};

export default Hero;




