import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/customCursor';
import Navbar from './components/Navbar';
import About from './section/About';
import Home from './section/Home';
import Skill from './section/Skill';
import Project from './section/Project';
import Contact from './section/Contact';
import Experience from './section/Experience';
import Testmonial from './section/Testmonial';
import Footer from './section/Footer';
import IntroAnimations from './components/IntroAnimations';

export default function App() {  // <-- Uppercase A
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
      {!introDone && <IntroAnimations onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          <ParticlesBackground />

          <Navbar />
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />
          <Experience />
          <Testmonial />
          <Footer />
        </div>
      )}
    </>
  );
}
