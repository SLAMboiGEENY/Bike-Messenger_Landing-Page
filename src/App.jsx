import React from 'react';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Carousel from '../src/components/Carousel';
import About from '../src/components/About';


function myApp() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );

}

export default myApp;