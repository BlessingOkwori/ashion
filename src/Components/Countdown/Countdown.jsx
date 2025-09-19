import React, { useState, useEffect } from "react";
import "./Countdown.css";
import promoImage from "../../assets/model.jpg"; // replace with your actual image path

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-31T23:59:59").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-section">
      {/* Image on the left */}
      <div className="countdown-image">
        <img src={promoImage} alt="Promo" />
      </div>

      {/* Timer on the right */}
      <div className="countdown-content">
        <h3>DISCOUNT</h3>
        <h1 className="sale-title">Summer 2025</h1>
        <p className="sale-percent">SALE <span>50%</span></p>

        <div className="timer">
          <div><span>{timeLeft.days}</span>Day</div>
          <div><span>{timeLeft.hours}</span>Hour</div>
          <div><span>{timeLeft.minutes}</span>Min</div>
          <div><span>{timeLeft.seconds}</span>Sec</div>
        </div>

        <button className="shop-btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Countdown;



