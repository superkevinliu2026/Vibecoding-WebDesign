import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        navLinks.classList.remove('active');
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', () => {});
      }
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">IvyLeague<span>Thinking</span></a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#admission">Admission</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#" className="btn-nav">Apply Now</a></li>
          </ul>
          <button className="menu-toggle" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Ivy League Thinking Education</h1>
            <p className="hero-subtitle">Cultivating Global Leaders Through Innovative Learning Experiences</p>
            <p className="hero-description">Our programs are designed to inspire critical thinking, cultural awareness, and scientific curiosity in young minds, preparing them for top universities and meaningful careers.</p>
            <div className="hero-buttons">
              <a href="#programs" className="btn-primary">Explore Programs</a>
              <a href="#admission" className="btn-secondary">Admission Info</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students collaborating" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs" id="programs">
        <div className="container">
          <h2 className="section-title">Our Signature Programs</h2>
          <p className="section-subtitle">Designed to challenge, inspire, and transform young learners</p>
          <div className="programs-grid">
            {/* Program 1 */}
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h3 className="program-title">International Camp Program</h3>
              <p className="program-description">Experience immersive residential camps in prestigious locations worldwide. Develop leadership skills, teamwork, and independence while engaging with peers from diverse backgrounds.</p>
              <ul className="program-features">
                <li><i className="fas fa-check-circle"></i> 2‑4 week residential camps</li>
                <li><i className="fas fa-check-circle"></i> Ivy‑League‑style seminars</li>
                <li><i className="fas fa-check-circle"></i> Outdoor leadership activities</li>
                <li><i className="fas fa-check-circle"></i> College‑prep workshops</li>
              </ul>
              <a href="#" className="program-link">Learn more <i className="fas fa-arrow-right"></i></a>
            </div>
            {/* Program 2 */}
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-landmark"></i>
              </div>
              <h3 className="program-title">Immersive Culture Trip</h3>
              <p className="program-description">Journey through historic cities and cultural landmarks. Gain deep understanding of global heritage, arts, and traditions through guided explorations and local interactions.</p>
              <ul className="program-features">
                <li><i className="fas fa-check-circle"></i> Guided tours in Europe/Asia</li>
                <li><i className="fas fa-check-circle"></i> Homestay & local family experiences</li>
                <li><i className="fas fa-check-circle"></i> Museum & historical site visits</li>
                <li><i className="fas fa-check-circle"></i> Cultural workshops & language immersion</li>
              </ul>
              <a href="#" className="program-link">Learn more <i className="fas fa-arrow-right"></i></a>
            </div>
            {/* Program 3 */}
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="program-title">AI Science Trip</h3>
              <p className="program-description">Dive into the forefront of artificial intelligence and cutting‑edge science. Visit tech hubs, research labs, and innovation centers to explore the future of technology.</p>
              <ul className="program-features">
                <li><i className="fas fa-check-circle"></i> Visits to Silicon Valley & MIT labs</li>
                <li><i className="fas fa-check-circle"></i> Hands‑on AI & robotics workshops</li>
                <li><i className="fas fa-check-circle"></i> Meetings with industry pioneers</li>
                <li><i className="fas fa-check-circle"></i> Project‑based learning challenges</li>
              </ul>
              <a href="#" className="program-link">Learn more <i className="fas fa-arrow-right"></i></a>
            </div>
            {/* Program 4 */}
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-language"></i>
              </div>
              <h3 className="program-title">Mandarin Learning Program</h3>
              <p className="program-description">Master Mandarin through intensive language courses combined with cultural immersion. Ideal for students seeking fluency and a deep understanding of Chinese society.</p>
              <ul className="program-features">
                <li><i className="fas fa-check-circle"></i> HSK‑focused curriculum</li>
                <li><i className="fas fa-check-circle"></i> Small‑group conversation practice</li>
                <li><i className="fas fa-check-circle"></i> Calligraphy & cultural arts</li>
                <li><i className="fas fa-check-circle"></i> Business‑Chinese elective</li>
              </ul>
              <a href="#" className="program-link">Learn more <i className="fas fa-arrow-right"></i></a>
            </div>
            {/* Program 5 */}
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="program-title">Community Service</h3>
              <p className="program-description">Make a tangible impact through structured volunteer projects. Develop empathy, social responsibility, and project‑management skills while serving local and global communities.</p>
              <ul className="program-features">
                <li><i className="fas fa-check-circle"></i> Sustainable development projects</li>
                <li><i className="fas fa-check-circle"></i> NGO partnerships & fieldwork</li>
                <li><i className="fas fa-check-circle"></i> Reflective journaling & mentorship</li>
                <li><i className="fas fa-check-circle"></i> Certificate of social impact</li>
              </ul>
              <a href="#" className="program-link">Learn more <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="admission" id="admission">
        <div className="container">
          <h2 className="section-title">Admission Process</h2>
          <p className="section-subtitle">Join our next cohort of future leaders</p>
          <div className="admission-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Application</h3>
              <p className="step-description">Submit online application with academic records and a personal statement.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Interview</h3>
              <p className="step-description">Virtual interview with our admission committee to assess fit and motivation.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Decision</h3>
              <p className="step-description">Admission decision within 2–3 weeks after interview.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3 className="step-title">Enrollment</h3>
              <p className="step-description">Secure your spot with a deposit and complete pre‑program onboarding.</p>
            </div>
          </div>
          <div className="admission-cta">
            <h3>2026 Program Dates & Deadlines</h3>
            <div className="deadlines">
              <div className="deadline-item">
                <h4>Early Decision</h4>
                <p>Application due: January 15, 2026</p>
              </div>
              <div className="deadline-item">
                <h4>Regular Decision</h4>
                <p>Application due: March 30, 2026</p>
              </div>
              <div className="deadline-item">
                <h4>Summer Programs</h4>
                <p>Program start: June – August 2026</p>
              </div>
            </div>
            <a href="#" className="btn-primary">Download Application Packet</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#" className="logo">IvyLeague<span>Thinking</span></a>
              <p className="footer-about">We prepare talented youth for top universities and meaningful careers through innovative, globally‑minded programs.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#admission">Admission</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Programs</h4>
              <ul>
                <li><a href="#">International Camp</a></li>
                <li><a href="#">Culture Trip</a></li>
                <li><a href="#">AI Science Trip</a></li>
                <li><a href="#">Mandarin Learning</a></li>
                <li><a href="#">Community Service</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i> 123 Education Ave, Boston, MA 02134</li>
                <li><i className="fas fa-phone"></i> +1 (617) 555‑0123</li>
                <li><i className="fas fa-envelope"></i> admissions@ivyleaguethinking.edu</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Ivy League Thinking Education. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
          </div>
        </div>
      </footer>


    </>
  )
}

export default App