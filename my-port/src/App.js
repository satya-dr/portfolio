import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
// import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark text-white">
      <Hero />
      <Skills />        
      <Projects />
      <Certificates />  
      {/* <Blogs />          */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
