import React, { useState } from "react";
import "./About.css";
import { FaStar } from "react-icons/fa";

import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import about4 from "../../assets/about4.jpg";
import about5 from "../../assets/about5.jpg";
import about6 from "../../assets/about6.jpg";
import about7 from "../../assets/about7.jpg";
import about8 from "../../assets/about8.jpg";

// Sample data
const aboutData = [
  { id: 1, img: about1, title: "Buttons tweed blazer", rating: 4, price: "$350" },
  { id: 2, img: about2, title: "Flowy striped skirt", rating: 5, price: "$420" },
  { id: 3, img: about3, title: "Cotton T-Shirt", rating: 3, price: "$280" },
  { id: 4, img: about4, title: "Slim striped pocket shirt", rating: 4, price: "$310" },
  { id: 5, img: about5, title: "Fit micro corduroy shirt", rating: 5, price: "$500" },
  { id: 6, img: about6, title: "Forest Cabin", rating: 4, price: "$390" },
  { id: 7, img: about7, title: "Historic Town", rating: 3, price: "$250" },
  { id: 8, img: about8, title: "Snowy Hills", rating: 5, price: "$450" },
];

// Shuffle helper
const shuffleArray = (array) => {
  let newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const About = () => {
  const [displayData, setDisplayData] = useState(aboutData);

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setDisplayData(shuffleArray(aboutData)); // shuffle when All clicked
    } else {
      // For now, other categories don't filter since data is generic
      setDisplayData(aboutData);
    }
  };

  return (
    <div className="about-section">
      <h2>NEW PRODUCT</h2>

      {/* Category buttons */}
      <div className="categories">
        {["All", "Women", "Men", "Kids", "Accessories", "Cosmetics"].map(
          (cat) => (
            <span key={cat} onClick={() => handleCategoryClick(cat)}>
              {cat}
            </span>
          )
        )}
      </div>

      <div className="about-grid">
        {displayData.map((item) => (
          <div key={item.id} className="about-card">
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <div className="stars">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < item.rating ? "#f8c10c" : "#ccc"}
                  />
                ))}
            </div>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;


