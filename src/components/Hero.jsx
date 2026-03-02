// import { useEffect, useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import './Hero.css';

// const Hero = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   const scrollToAbout = () => {
//     document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="hero" id="hero">
//       <div className="hero-background">
//         <div className="gradient-orb orb-1"></div>
//         <div className="gradient-orb orb-2"></div>
//       </div>

//       <div className="hero-content">
//         <div className={`hero-text ${visible ? 'visible' : ''}`}>
//           <p className="hero-greeting">Hello, I'm</p>
//           <h1 className="hero-name">
//             <span className="name-line">Your Name</span>
//           </h1>
//           <h2 className="hero-title">Full Stack Developer</h2>
//           <p className="hero-description">
//             Crafting exceptional digital experiences with modern technologies.
//             <br />
//             Turning ideas into elegant, scalable solutions.
//           </p>
          
//           <div className="hero-cta">
//             <a href="#projects" className="cta-button primary">
//               View Projects
//             </a>
//             <a href="#contact" className="cta-button secondary">
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </div>

//       <button className="scroll-indicator" onClick={scrollToAbout} aria-label="Scroll down">
//         <ChevronDown size={32} />
//       </button>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Add your roles here - customize these to your job search!
  const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Web Developer'
  ];

  useEffect(() => {
    setVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    if (!isDeleting && displayedText === currentRole) {
      // Pause at full text before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    // Type or delete one character
    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="hero-content">
        <div className={`hero-text ${visible ? 'visible' : ''}`}>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            <span className="name-line">Namita Sharma</span>
          </h1>
          <h2 className="hero-title">
            <span className="typing-text">{displayedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Crafting exceptional digital experiences with modern technologies.
            <br />
            Turning ideas into elegant, scalable solutions.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="cta-button primary">
              View Projects
            </a>
            <a href="#contact" className="cta-button secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToAbout} aria-label="Scroll down">
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;