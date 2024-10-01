import BrandSlider from "./components/brand-slider/BrandSlider"
import BrandSlider2 from "./components/brand-slider/BrandSlider2"
import CaseStudies from "./components/case-studies/CaseStudies"
import Cta from "./components/cta-wrapper/Cta"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import {cta1, cta2, cta3, cta4} from "./components/cta-wrapper/data"
import DigitalInfo from "./components/digital-info/DigitalInfo"
import Service from "./components/service/Service"
import DigitalSolution from "./components/digital-solution/DigitalSolution"
import Testimonial from "./components/testimonial/Testimonial"
import Blog from "./components/blog/Blog"
import Footer from "./components/footer/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect } from "react"

function App() {


  useEffect(() => {
    
      AOS.init({
        duration: 500,
        easing: 'linear',
        once: false,
      });
    }

  );
  return (
    <div className="font-sans leading-[1]">
      <Navbar/>
      <Hero/>
      <BrandSlider/>
      <CaseStudies/>
      <Cta data={cta1}/>
      <DigitalInfo/>
      <BrandSlider2/>
      <Service/>
      <Cta data={cta2}/>
      <DigitalSolution/>
      <Cta data={cta3}/>
      <Testimonial/>
      <Blog/>
      <Cta data={cta4}/>
      <Footer/>
    </div>
  )
}

export default App
