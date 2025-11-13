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

      {/* Hero Section - Advanced Design */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl top-1/4 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-3xl -bottom-48 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* 3D Floating Avatar */}
            <div className="mb-12 inline-block perspective-1000">
              <div className="relative group">
                <div className={`w-40 h-40 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500' : 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400'} flex items-center justify-center text-5xl font-bold mx-auto shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-float`}>
                  {portfolioConfig.personal.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={`absolute inset-0 w-40 h-40 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500' : 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400'} blur-xl opacity-50 animate-pulse`}></div>
              </div>
            </div>

            {/* Glitch Effect Title */}
            <div className="relative inline-block mb-6">
              <h1 className="text-5xl md:text-8xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                {portfolioConfig.personal.name}
              </h1>
              <div className="absolute inset-0 text-5xl md:text-8xl font-black opacity-30 blur-sm animate-glitch">
                {portfolioConfig.personal.name}
              </div>
            </div>
            
            {/* Typing Effect Subtitle */}
            <div className="relative mb-4 h-12 flex items-center justify-center">
              <p className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {portfolioConfig.personal.title}
              </p>
              <span className="inline-block w-1 h-8 bg-blue-400 ml-2 animate-blink"></span>
            </div>
            
            <p className="text-lg md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto font-light tracking-wide">
              {portfolioConfig.personal.tagline}
            </p>

            {/* Holographic Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={portfolioConfig.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gray-900 rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-3 text-white font-semibold">
                  <Github className="w-5 h-5" />
                  GitHub
                </div>
              </a>
              
              <a
                href={portfolioConfig.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-3 text-white font-semibold">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </div>
              </a>
              
              <a
                href={portfolioConfig.personal.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-3 text-white font-semibold">
                  <Download className="w-5 h-5 animate-bounce" />
                  Download Resume
                </div>
              </a>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="group inline-block animate-bounce-slow"
            >
              <div className="relative">
                <ChevronDown className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </button>
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* About Section - Bento Grid Style */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'} relative overflow-hidden`}>
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Info Card */}
            <div className="group relative">
              <div className={`p-8 rounded-3xl backdrop-blur-xl ${darkMode ? 'bg-white/5' : 'bg-white/80'} border ${darkMode ? 'border-white/10' : 'border-gray-200'} hover:border-blue-500/50 transition-all duration-500 h-full`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {portfolioConfig.summary}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group/item">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover/item:scale-110 transition-transform">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                        <p className="font-semibold">{portfolioConfig.personal.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group/item">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 group-hover/item:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                        <a href={`mailto:${portfolioConfig.personal.email}`} className="font-semibold hover:text-blue-400 transition-colors">
                          {portfolioConfig.personal.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group/item">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover/item:scale-110 transition-transform">
                        <Phone className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                        <p className="font-semibold">{portfolioConfig.personal.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="group relative">
              <div className={`p-8 rounded-3xl backdrop-blur-xl ${darkMode ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50' : 'bg-gradient-to-br from-blue-50 to-purple-50'} border ${darkMode ? 'border-blue-500/30' : 'border-blue-200'} hover:border-purple-500/50 transition-all duration-500 h-full overflow-hidden`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.5)_50%,transparent_75%)] bg-[length:20px_20px] animate-gradient-x"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Education
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className={`p-4 rounded-2xl ${darkMode ? 'bg-white/5' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
                      <p className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {portfolioConfig.education.degree}
                      </p>
                      <p className={`text-lg mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {portfolioConfig.education.institution}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        Graduating: {portfolioConfig.education.year}
                      </div>
                    </div>
                    
                    {/* Achievement Badges */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className={`p-4 rounded-xl text-center ${darkMode ? 'bg-blue-500/10' : 'bg-blue-100'} border ${darkMode ? 'border-blue-500/30' : 'border-blue-300'}`}>
                        <p className="text-3xl font-black text-blue-400 mb-1">3+</p>
                        <p className="text-xs text-gray-500 uppercase">Projects</p>
                      </div>
                      <div className={`p-4 rounded-xl text-center ${darkMode ? 'bg-purple-500/10' : 'bg-purple-100'} border ${darkMode ? 'border-purple-500/30' : 'border-purple-300'}`}>
                        <p className="text-3xl font-black text-purple-400 mb-1">2</p>
                        <p className="text-xs text-gray-500 uppercase">Internships</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Hexagon Grid */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(portfolioConfig.skills).map(([category, skills], index) => (
              <div
                key={category}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glassmorphism Card */}
                <div className={`relative p-8 rounded-3xl backdrop-blur-xl ${darkMode ? 'bg-white/5' : 'bg-black/5'} border ${darkMode ? 'border-white/10' : 'border-black/10'} overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with Glow */}
                  <div className="relative z-10 mb-6">
                    <div className="relative inline-block">
                      {category.includes('Programming') && <Code className="w-12 h-12 text-blue-400" />}
                      {category.includes('Database') && <Database className="w-12 h-12 text-green-400" />}
                      {category.includes('Cloud') && <Cloud className="w-12 h-12 text-purple-400" />}
                      {!category.includes('Programming') && !category.includes('Database') && !category.includes('Cloud') && <Code className="w-12 h-12 text-orange-400" />}
                      <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-100 transition-opacity">
                        {category.includes('Programming') && <Code className="w-12 h-12 text-blue-400" />}
                        {category.includes('Database') && <Database className="w-12 h-12 text-green-400" />}
                        {category.includes('Cloud') && <Cloud className="w-12 h-12 text-purple-400" />}
                        {!category.includes('Programming') && !category.includes('Database') && !category.includes('Cloud') && <Code className="w-12 h-12 text-orange-400" />}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="relative z-10 text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {category}
                  </h3>
                  
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${darkMode ? 'bg-white/10 text-gray-200 hover:bg-white/20' : 'bg-black/10 text-gray-800 hover:bg-black/20'} border ${darkMode ? 'border-white/20' : 'border-black/20'} transition-all hover:scale-110 cursor-default`}
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - 3D Cards */}
      <section id="projects" className={`py-20 relative ${darkMode ? 'bg-gray-800/30' : 'bg-white/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioConfig.projects.map((project, index) => (
              <div
                key={index}
                className="group perspective-1000"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full p-8 rounded-3xl backdrop-blur-xl ${darkMode ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90' : 'bg-gradient-to-br from-white/90 to-gray-50/90'} border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transform-gpu`}>
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Project Number Badge */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-2xl shadow-lg">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    
                    <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-3`}>
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className={`mb-6 space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-sm font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
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
                          className={`flex items-center justify-center gap-2 px-4 py-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-xl text-sm font-semibold transition-all transform hover:scale-105`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full opacity-50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {portfolioConfig.experience.map((exp, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl backdrop-blur-xl ${darkMode ? 'bg-white/5' : 'bg-white/80'} border ${darkMode ? 'border-white/10' : 'border-gray-200'} hover:border-blue-500/50 transition-all duration-500`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      {exp.role}
                    </h3>
                    <p className="text-lg md:text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">{exp.company}</p>
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 md:mt-0 md:text-right`}>
                    <p className="font-semibold">{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {exp.description}
                </p>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-xl text-sm font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Award className="w-4 h-4" />
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Certifications
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioConfig.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-8 rounded-3xl backdrop-blur-xl ${darkMode ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30' : 'bg-gradient-to-br from-yellow-50 to-orange-50'} border ${darkMode ? 'border-yellow-500/30' : 'border-yellow-200'} hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 text-center`}
                >
                  <div className="mb-6 inline-block relative">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg group-hover:scale-110 transition-transform">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-100 transition-opacity">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {cert.name}
                  </h4>
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
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white'} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          
          <p className={`text-lg md:text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-3 text-white font-semibold text-lg">
                <Mail className="w-6 h-6" />
                Send Email
              </div>
            </a>
            
            <a
              href={portfolioConfig.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-3 text-white font-semibold text-lg">
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </div>
            </a>
            
            <a
              href={portfolioConfig.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-8 py-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-700'} rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className={`absolute inset-0 ${darkMode ? 'bg-gray-700' : 'bg-gray-800'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative flex items-center gap-3 text-white font-semibold text-lg">
                <Github className="w-6 h-6" />
                GitHub
              </div>
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