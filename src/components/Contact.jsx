import { Mail, Github, Linkedin, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/Namita-sha',
      color: '#333'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/namita-sharma-0755ba2a6',
      color: '#0077b5'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let’s Work Together</h2>
            <p className="contact-description">
              I’m always open to discussing new projects, software engineering
              opportunities, or collaborations.
            </p>
          </div>

          <div className="contact-info">
            <a
              href="mailto:namitasharma1124@gmail.com"
              className="email-link"
            >
              <Mail size={28} />
              <span>namitasharma1124@gmail.com</span>
            </a>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  style={{ '--hover-color': link.color }}
                >
                  {link.icon}
                  <span className="social-label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-cta">
            <p className="cta-text">Have a project or role in mind?</p>
            <a
              href="mailto:namitasharma1124@gmail.com"
              className="cta-button"
            >
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
