import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutSection from './components/About';
import Brand from './components/Brand';
import Features from './components/Features';
import PlanCard from './components/Plans';
import Location from './components/location';
import Testimonials from './components/Testimonial';


function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutSection />
      <Brand />
      <Features />
      <PlanCard />
      <Location />
      <Testimonials />
    </div>
  );
}

export default App;
