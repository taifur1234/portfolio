import { useState, useEffect } from "react";
import "./Portfolio.css";

const DATA = {
  name: "Taifur Ahmad",
  title: "MERN Stack Developer",
  email: "taifurahmad24@gmail.com",
  linkedin: "https://www.linkedin.com/in/taifur-ahmad-558a29341",
  github: "https://github.com/taifur1234",
  location: "Khargone, India",
  about:
    "I'm a MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I focus on creating scalable, user-friendly, and high-performance applications. I enjoy solving real-world problems and continuously improving my development skills.",
  experience: [
    {
      company: "Digital Savers",
      role: "Junior Website Developer (Intern)",
      duration: "6 Months",
      achievements: [
        "Built and maintained responsive web interfaces using HTML, CSS, and JavaScript.",
        "Assisted in developing React-based frontend components for client projects.",
        "Collaborated with senior developers to integrate REST APIs and improve site performance.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Abhyuday University, Khargone",
      year: "2023 – 2026",
    },
  ],
  skills: [
    "MongoDB", "Express.js", "React", "Node.js",
    "JavaScript", "HTML5", "CSS3", "REST APIs",
    "Git & GitHub", "Responsive Design", "Tailwind CSS", "VS Code",
  ],
  projects: [
    {
      name: "Full-Stack E-Commerce App",
      desc: "A complete MERN-based e-commerce platform with authentication, product listings, cart, and order management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/taifur1234",
    },
    {
      name: "Task Manager Dashboard",
      desc: "A real-time task management application with user authentication, drag-and-drop tasks, and status tracking.",
      tech: ["React", "Node.js", "MongoDB", "REST API"],
      link: "https://github.com/taifur1234",
    },
    {
      name: "Blog Platform",
      desc: "Full-featured blogging platform with rich text editor, user profiles, comment system, and admin panel.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      link: "https://github.com/taifur1234",
    },
    {
      name: "Portfolio Website",
      desc: "Personal developer portfolio with dark mode toggle, smooth scroll, animations, and fully responsive design.",
      tech: ["React", "CSS3", "JavaScript"],
      link: "https://github.com/taifur1234",
    },
  ],
};

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useScrollAnimation();



  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["home", "about", "skills", "experience", "projects", "education", "contact"];

  return (
    <div className={`app ${dark ? "dark" : "light"}`}>
      {/* NAV */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => scrollTo("home")}>
          <span className="logo-text">TA</span>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((n) => (
            <li key={n}>
              <button
                className={`nav-btn ${activeSection === n ? "active" : ""}`}
                onClick={() => scrollTo(n)}
              >
                {n.charAt(0).toUpperCase() + n.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="toggle theme">
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-blob blob1"></div>
          <div className="hero-blob blob2"></div>
          <div className="grid-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll">👋 Available for Opportunities</div>
          <h1 className="hero-name animate-on-scroll">
            {DATA.name.split(" ").map((w, i) => (
              <span key={i} className="name-word" style={{ animationDelay: `${i * 0.15}s` }}>{w} </span>
            ))}
          </h1>
          <div className="hero-title animate-on-scroll">
            <span className="title-text">{DATA.title}</span>
          </div>
          <p className="hero-location animate-on-scroll">📍 {DATA.location}</p>
          <div className="hero-actions animate-on-scroll">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>View Projects</button>
            <button className="btn-secondary" onClick={() => scrollTo("contact")}>Get In Touch</button>
          </div>
          <div className="hero-social animate-on-scroll">
            <a href={DATA.github} target="_blank" rel="noreferrer" className="social-link">
              <GithubIcon /> GitHub
            </a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="social-link">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={`mailto:${DATA.email}`} className="social-link">
              <MailIcon /> Email
            </a>
          </div>
        </div>
        <div className="scroll-hint animate-on-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container">
          <SectionHeader label="About" title="Who I Am" />
          <div className="about-grid animate-on-scroll">
            <div className="about-avatar">
              <div className="avatar-ring">
                <div className="avatar-initials"><img src="/profile.jpg" alt="profile"/></div>
              </div>
              <div className="avatar-glow"></div>
            </div>
            <div className="about-text">
              <p className="about-para">{DATA.about}</p>
              <div className="about-stats">
                <StatCard number="1+" label="Years Experience" />
                <StatCard number="4+" label="Projects Built" />
                <StatCard number="10+" label="Skills Mastered" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <SectionHeader label="Skills" title="Tech Stack" />
          <div className="skills-grid animate-on-scroll">
            {DATA.skills.map((skill, i) => (
              <div
                key={skill}
                className="skill-chip"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <SectionHeader label="Experience" title="Work History" />
          <div className="timeline">
            {DATA.experience.map((exp, i) => (
              <div key={i} className="timeline-item animate-on-scroll">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                  <ul className="exp-achievements">
                    {exp.achievements.map((a, j) => (
                      <li key={j}><span className="ach-bullet">▸</span>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <SectionHeader label="Projects" title="What I've Built" />
          <div className="projects-grid">
            {DATA.projects.map((proj, i) => (
              <div
                key={i}
                className="project-card animate-on-scroll"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="project-top">
                  <div className="project-icon">
                    <CodeIcon />
                  </div>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="project-ext">
                    <ExtIcon />
                  </a>
                </div>
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-techs">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="container">
          <SectionHeader label="Education" title="Academic Background" />
          <div className="edu-grid animate-on-scroll">
            {DATA.education.map((edu, i) => (
              <div key={i} className="edu-card">
                <div className="edu-icon">🎓</div>
                <div className="edu-info">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-college">{edu.college}</p>
                  <span className="edu-year">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <SectionHeader label="Contact" title="Let's Connect" />
          <div className="contact-wrapper animate-on-scroll">
            <p className="contact-sub">
              I'm open to new opportunities, collaborations, and interesting projects. Let's build something great together!
            </p>
            <div className="contact-cards">
              <a href={`mailto:${DATA.email}`} className="contact-card">
                <MailIcon />
                <span>{DATA.email}</span>
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="contact-card">
                <LinkedinIcon />
                <span>LinkedIn Profile</span>
              </a>
              <a href={DATA.github} target="_blank" rel="noreferrer" className="contact-card">
                <GithubIcon />
                <span>GitHub Profile</span>
              </a>
              <div className="contact-card no-link">
                <span>📍</span>
                <span>{DATA.location}</span>
              </div>
            </div>
            <a href={`mailto:${DATA.email}`} className="btn-primary contact-btn">
              Send Me an Email →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Designed & Built by <span className="footer-name">Taifur Ahmad</span></p>
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

function SectionHeader({ label, title }) {
  return (
    <div className="section-header animate-on-scroll">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line"></div>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

function ExtIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}