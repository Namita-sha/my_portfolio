// import { Code2, Palette, Rocket, Database } from 'lucide-react';
// import './About.css';

// const About = () => {
//   const skills = [
//     {
//       icon: <Code2 size={32} />,
//       title: 'Frontend Development',
//       description: 'React, Next.js, TypeScript, Tailwind CSS'
//     },
//     {
//       icon: <Database size={32} />,
//       title: 'Backend Development',
//       description: 'Node.js, Express, MongoDB, PostgreSQL'
//     },
//     {
//       icon: <Palette size={32} />,
//       title: 'UI/UX Design',
//       description: 'Figma, Adobe XD, Responsive Design'
//     },
//     {
//       icon: <Rocket size={32} />,
//       title: 'Deployment & Tools',
//       description: 'Git, Docker, AWS, Vercel'
//     }
//   ];

//   return (
//     <section className="about" id="about">
//       <div className="container">
//         <div className="about-header">
//           <span className="section-label">About Me</span>
//           <h2 className="section-title">Passionate Developer & Designer</h2>
//         </div>

//         <div className="about-content">
//           <div className="about-bio">
//             <p className="bio-text">
//               I'm a full-stack developer who loves creating beautiful, functional web applications. 
//               With a keen eye for design and a passion for clean code, I transform ideas into 
//               digital experiences that users love.
//             </p>
//             <p className="bio-text">
//               I specialize in modern JavaScript frameworks and have a strong foundation in both 
//               frontend and backend technologies. Every project is an opportunity to learn, grow, 
//               and deliver exceptional results.
//             </p>
//           </div>

//           <div className="skills-grid">
//             {skills.map((skill, index) => (
//               <div 
//                 key={index} 
//                 className="skill-card"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="skill-icon">{skill.icon}</div>
//                 <h3 className="skill-title">{skill.title}</h3>
//                 <p className="skill-description">{skill.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { Code2, Database, Cpu, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      description: 'React, JavaScript, TypeScript, Tailwind CSS, HTML, CSS'
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB, SQL, REST APIs'
    },
    {
      icon: <Cpu size={32} />,
      title: 'Core CS & Problem Solving',
      description: 'C++, Data Structures & Algorithms, OOPs, DBMS, OS'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Tools & Deployment',
      description: 'Git, GitHub, Vercel'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Software Engineer & Problem Solver</h2>
        </div>

        <div className="about-content">
          <div className="about-bio">
            <p className="bio-text">
              I’m a software engineer who enjoys building scalable, reliable, and
              user-focused applications. I care deeply about writing clean,
              maintainable code and designing systems that perform well in real-world
              scenarios.
            </p>

            <p className="bio-text">
              My experience spans frontend, backend, and core computer science
              fundamentals. I actively work on problem-solving using data structures
              and algorithms, while continuously improving my understanding of system
              design and software architecture.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
