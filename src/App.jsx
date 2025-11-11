import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Cloud, Briefcase, Award, BookOpen, ChevronDown, Moon, Sun, Menu, X } from 'lucide-react';

// Portfolio Configuration - EDIT THIS SECTION TO UPDATE YOUR PORTFOLIO
const portfolioConfig = {
  personal: {
    name: "Tejas Gowda T R",
    title: "Full Stack Developer & AI Enthusiast",
    tagline: "Transforming ideas into intelligent, scalable solutions",
    location: "Bangalore, Karnataka",
    email: "tejaspavithra2002@gmail.com",
    phone: "+91 8296082806",
    github: "https://github.com/Tejas1024",
    linkedin: "https://www.linkedin.com/in/tejasgowda-t-064b41283",
    portfolioOld: "https://kypaauui.manus.space/",
    resumePdf: "https://drive.google.com/file/d/1ByVQcJFvOfw2fyrP3IWOCNgUkIvqnFUB/view"
  },
  summary: "Creative and results-driven developer with strong skills in full-stack development, databases, and AI-driven solutions. Experienced in Python, SQL, JavaScript, and frameworks like Django and React.js. Hands-on exposure to cloud (AWS), Linux/Windows platforms, and API integration.",
  
  skills: {
    "Programming": ["Python", "SQL", "JavaScript", "Shell Scripting"],
    "Databases": ["PostgreSQL", "MongoDB", "Excel", "REST API"],
    "Frontend": ["React.js", "HTML", "CSS", "Streamlit"],
    "Backend": ["Django", "REST APIs"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "Jenkins", "AWS (EC2, S3, IAM)", "Linux", "CI/CD"],
    "Tools": ["Git", "GitHub", "VS Code", "Jupyter", "GitHub Copilot"]
  },

  projects: [
    {
      title: "Personal AI Advisor",
      description: "Document-retrieval AI system with LLM integration enabling non-technical users to create personalized, domain-specific AI advisors",
      tech: ["Python", "Streamlit", "LLM", "NLP"],
      highlights: [
        "Reduce research time from hours to seconds",
        "Deployed across Finance, Legal, and Healthcare sectors",
        "Automated document-to-knowledge conversion"
      ],
      liveDemo: "https://personal-ai-advisor-ftulhqxgxxn6jspu8xxw6f.streamlit.app/",
      github: ""
    },
    {
      title: "Smart Expense Tracker with AI",
      description: "Full-stack expense management platform with AI-powered insights and OCR integration",
      tech: ["React.js", "Django", "OCR", "Machine Learning"],
      highlights: [
        "80% reduction in manual entry through OCR",
        "AI-powered budget recommendations",
        "Secure, mobile-responsive design"
      ],
      liveDemo: "https://smart-expense-tracker-with-ai-insig-eight.vercel.app/login",
      github: ""
    },
    {
      title: "AI Resume & Job Matching System",
      description: "Automated resume analysis system with intelligent job recommendations",
      tech: ["Python", "Streamlit", "MongoDB", "NLP"],
      highlights: [
        "70% reduction in recruiter screening time",
        "85% matching precision using TF-IDF & KNN",
        "Analyzed 200+ candidate profiles"
      ],
      liveDemo: "",
      github: ""
    }
  ],

  experience: [
    {
      role: "Python Full Stack Development Intern",
      company: "Pentagon Space Pvt. Ltd",
      location: "Bengaluru",
      duration: "Oct 2024 - Apr 2025",
      description: "Completed intensive 6-month internship gaining expertise in Core & Advanced Python, Django, REST APIs, ReactJS, SQL, DSA, and building real-world applications.",
      certificate: "https://drive.google.com/file/d/1ByVQcJFvOfw2fyrP3IWOCNgUkIvqnFUB/view?usp=sharing"
    },
    {
      role: "DevOps Intern",
      company: "Robowaves",
      location: "Remote",
      duration: "Jun 2025 - Present",
      description: "Gaining exposure to CI/CD pipelines, Docker, Kubernetes, Jenkins, AWS, and Linux while contributing to automation and cloud-based deployments.",
      certificate: ""
    }
  ],

  education: {
    degree: "Master of Computer Applications",
    institution: "Global Institute of Management Sciences",
    year: "2025"
  },

  certifications: [
    {
      name: "JavaScript",
      issuer: "HackerRank",
      link: "https://drive.google.com/file/d/1C8icroWne4_SB4-gcmklA-VVBCyC-ljS/view?usp=sharing"
    },
    {
      name: "Python",
      issuer: "Scaler Topics",
      link: "https://drive.google.com/file/d/1CAYpVV8WD7GeZVkIiDDcXfoQm1H8uDYd/view?usp=sharing"
    },
    {
      name: "Data Structures",
      issuer: "Scaler Topics",
      link: "https://drive.google.com/file/d/1CB5kOAOWv1LaGPMlgKzokwDnqK_Na8uY/view?usp=sharing"
    }
  ]
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-lg border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              TG
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-500'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-500 text-white'
                      : darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8 inline-block">
              <div className={`w-32 h-32 rounded-full ${darkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'} flex items-center justify-center text-4xl font-bold mx-auto shadow-2xl`}>
                {portfolioConfig.personal.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              {portfolioConfig.personal.name}
            </h1>
            
            <p className="text-2xl md:text-3xl mb-4 text-gray-400">
              {portfolioConfig.personal.title}
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-gray-500 max-w-2xl mx-auto">
              {portfolioConfig.personal.tagline}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href={portfolioConfig.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href={portfolioConfig.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href={portfolioConfig.personal.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce inline-block"
            >
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {portfolioConfig.summary}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>{portfolioConfig.personal.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a href={`mailto:${portfolioConfig.personal.email}`} className="hover:text-blue-500">
                    {portfolioConfig.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>{portfolioConfig.personal.phone}</span>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-500">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold">{portfolioConfig.education.degree}</span>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {portfolioConfig.education.institution}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Graduating: {portfolioConfig.education.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(portfolioConfig.skills).map(([category, skills]) => (
              <div
                key={category}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all transform hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.includes('Programming') && <Code className="w-6 h-6 text-blue-500" />}
                  {category.includes('Database') && <Database className="w-6 h-6 text-green-500" />}
                  {category.includes('Cloud') && <Cloud className="w-6 h-6 text-purple-500" />}
                  {!category.includes('Programming') && !category.includes('Database') && !category.includes('Cloud') && <Code className="w-6 h-6 text-orange-500" />}
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioConfig.projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl`}
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className={`mb-4 space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg text-sm transition-all`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="space-y-8">
            {portfolioConfig.experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-blue-500" />
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-500">{exp.company}</p>
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 md:mt-0`}>
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm transition-all"
                  >
                    <Award className="w-4 h-4" />
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioConfig.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-green-500 transition-all transform hover:scale-105 text-center`}
                >
                  <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.issuer}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect!</h2>
          <p className={`text-lg mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-6 h-6" />
              Send Email
            </a>
            <a
              href={portfolioConfig.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-800 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
            <a
              href={portfolioConfig.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-700 hover:bg-gray-800'} rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg`}
            >
              <Github className="w-6 h-6" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 {portfolioConfig.personal.name}. Built with React & Tailwind CSS.
          </p>
          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Deployed with ❤️ on GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
}