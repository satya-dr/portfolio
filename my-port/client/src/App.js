import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
// import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="bg-dark text-white">
      <Hero />
      <About />   
      <Skills />  
      <Education />      
      <Projects />
      <Certificates /> 

      {/* <Blogs />          */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
