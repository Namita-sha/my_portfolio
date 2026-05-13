import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="footer">
        <p>© 2026 Namita Sharma. Crafted with passion.</p>
      </footer>
    </div>
  );
}

export default App;