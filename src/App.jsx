import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import  BannerCarousel from "./Components/BannerCarousel/BannerCarousel";
import Countdown from "./Components/Countdown/Countdown";
import Insta from "./Components/Insta/Insta"
import Footer from "./Components/Footer/Footer"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <BannerCarousel/>
      <Countdown/>
      <Insta/>
      <Footer/>
    </div>
  )
}

export default App

