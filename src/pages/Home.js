import React, { useEffect, useState } from 'react';
import { Code2, Sparkles, Mail, Github, Linkedin, Twitter, ArrowRight, Zap, Layers, Palette } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import '../styles/Home.css';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Arham',
      role: 'Developer',
      image: 'images/arham.jpeg',
      description: 'I haven\'t seen sunlight in years.',
    },
    {
      id: 2,
      name: 'AAron',
      role: 'Documentation and Designer',
      image: 'https://via.placeholder.com/400x400/1a1a1a/00d4ff?text=Member+2',
      description: '⭐⭐⭐⭐⭐ runs great on my setup, super duper vanilla is right.',
    },
    {
      id: 3,
      name: 'Brent',
      role: 'Project Manager',
      image: 'images/brent.png',
      description: 'Busy isn\'t busy enough.',
    },
    {
      id: 4,
      name: 'Eldeston',
      role: 'Developer, Designer, and Documentation',
      image: '/images/the run away criminal.png',
      description: 'Shader developer and web developer in training. 80% water.',
    },
    {
      id: 5,
      name: 'TheAnonymousMau',
      role: 'Designer and Documentation',
      image: 'images/maud.png',
      description: 'If you code and draw and combine that, would you lose? Nah, I\'d win..',
    },
    {
      id: 6,
      name: 'Beanse',
      role: 'Developer and Designer',
      image: 'images/vince.png',
      description: 'Drink more water.',
    },
  ];

  const services = [
    {
      icon: <Code2 className="service-icon" />,
      title: 'Development',
      description: 'Building robust and scalable solutions with cutting-edge technologies',
    },
    {
      icon: <Palette className="service-icon" />,
      title: 'Design',
      description: 'Creating beautiful and intuitive user experiences that captivate',
    },
    {
      icon: <Layers className="service-icon" />,
      title: 'Architecture',
      description: 'Crafting solid technical foundations for long-term success',
    },
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_44f58454-7696-4751-9f19-407f571544fc/artifacts/ijmu9q9w_Team%20Icon2.png" 
              alt="Orion Logo" 
              className="logo"
            />
            <span className="logo-text">Orion</span>
          </div>
          <nav className="nav-menu">
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#team" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a>
            <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="grid-pattern"></div>
          <div className="floating-element" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <Sparkles className="sparkle-icon" />
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={16} />
            <span>Innovators & Creators</span>
          </div>
          <h1 className="hero-title">
            We Are <span className="gradient-text">Orion</span>
          </h1>
          <p className="hero-subtitle">
            A collective of passionate developers and designers crafting exceptional digital experiences
          </p>
          <div className="hero-buttons">
            <Button className="primary-button" onClick={() => scrollToSection('team')}>
              Meet The Team
              <ArrowRight size={20} className="button-icon" />
            </Button>
            <Button variant="outline" className="secondary-button" onClick={() => scrollToSection('contact')}>
              Our Work
            </Button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section animate-on-scroll" style={{ opacity: isVisible.about ? 1 : 0 }}>
        <div className="section-content">
          <div className="section-header">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Building Tomorrow's Solutions Today</h2>
          </div>
          <p className="about-text">
            Orion is a dynamic team of six talented individuals united by a passion for innovation. 
            We combine technical excellence with creative vision to deliver solutions that not only 
            work flawlessly but also inspire and delight.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section animate-on-scroll" style={{ opacity: isVisible.services ? 1 : 0 }}>
        <div className="section-content">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Expertise</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <CardContent className="service-card-content">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section animate-on-scroll" style={{ opacity: isVisible.team ? 1 : 0 }}>
        <div className="section-content">
          <div className="section-header">
            <span className="section-label">The Crew</span>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <Card key={member.id} className="team-card">
                <div className="team-card-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-card-image" />
                  <div className="team-card-overlay">
                    <div className="social-links">
                      <button className="social-link" aria-label="LinkedIn">
                        <Linkedin size={20} />
                      </button>
                      <button className="social-link" aria-label="GitHub">
                        <Github size={20} />
                      </button>
                      <button className="social-link" aria-label="Twitter">
                        <Twitter size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <CardContent className="team-card-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section animate-on-scroll" style={{ opacity: isVisible.contact ? 1 : 0 }}>
        <div className="section-content">
          <div className="contact-content">
            <div className="contact-text">
              <h2 className="contact-title">Let's Create Something Amazing</h2>
              <p className="contact-description">
                Ready to bring your ideas to life? Get in touch with Team Orion.
              </p>
            </div>
            <Button className="contact-button">
              <Mail size={20} />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="https://customer-assets.emergentagent.com/job_44f58454-7696-4751-9f19-407f571544fc/artifacts/ijmu9q9w_Team%20Icon2.png" 
              alt="Orion Logo" 
              className="footer-logo"
            />
            <span className="footer-logo-text">Orion</span>
          </div>
          <div className="footer-links">
            <a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#team" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a>
            <a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
            <a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>
          <div className="footer-social">
            <button className="footer-social-link" aria-label="GitHub">
              <Github size={20} />
            </button>
            <button className="footer-social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </button>
            <button className="footer-social-link" aria-label="Twitter">
              <Twitter size={20} />
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026   Team Orion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;