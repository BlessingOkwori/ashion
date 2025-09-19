import React from "react";
import { FaInstagram } from "react-icons/fa"; // Example icon
import img1 from "../../assets/Insta1.jpg";
import img2 from "../../assets/Insta2.jpg";
import img3 from "../../assets/Insta3.jpg";
import img4 from "../../assets/Insta4.jpg";
import img5 from "../../assets/Insta5.jpg";
import img6 from "../../assets/Insta6.jpg";
import "./Insta.css";

const Insta = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="insta-container">
      {images.map((src, index) => (
        <div key={index} className="insta-item">
          <img src={src} alt={`Insta ${index + 1}`} className="insta-img" />
          <div className="insta-overlay">
            <FaInstagram size={30} />
            <p>View Post</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Insta;


