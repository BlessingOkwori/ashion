import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./BannerCarousel.css";

// Import images from src/assets
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const BannerCarousel = () => {
  const slides = [
    {
      image: banner1,
      title: "THE CHLOE COLLECTION",
      subtitle: "The Project Jacket",
      button: "SHOP NOW",
    },
    {
      image: banner2,
      title: "WINTER EXCLUSIVE",
      subtitle: "Cozy & Stylish",
      button: "SHOP NOW",
    },
    {
      image: banner3,
      title: "SUMMER EDIT",
      subtitle: "Breezy Looks",
      button: "SHOP NOW",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      className="banner-container"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="banner-slide">
            <img src={slide.image} alt={slide.title} className="banner-image" />
            <div className="banner-content">
              <h1 className="title">{slide.title}</h1>
              <h2 className="subtitle">{slide.subtitle}</h2>
              <p className="shop-now">{slide.button}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerCarousel;


