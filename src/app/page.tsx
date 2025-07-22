"use client";

import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Menu, X, Download } from 'lucide-react';
import Image from 'next/image';

// Main Page Component
const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            Sachin Maurya
          </a>
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors">{link.label}</a>
            ))}
            <a href="/2022424_Sachin_Maurya_02.pdf" download="Sachin_Maurya_Resume.pdf" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition-colors flex items-center space-x-2">
              <Download size={18} />
              <span>Resume</span>
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-cyan-400">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors">{link.label}</a>
              ))}
              <a href="/2022424_Sachin_Maurya_02.pdf" download="Sachin_Maurya_Resume.pdf" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition-colors flex items-center space-x-2">
                <Download size={18} />
                <span>Resume</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-6 pt-24">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center">
          <div className="text-center md:text-left w-full">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
              Hi, I&apos;m <span className="text-cyan-400">Sachin Maurya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto md:mx-0">
              A passionate Full-Stack Developer and Machine Learning enthusiast, creating innovative solutions and building beautiful, responsive web applications.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a href="https://github.com/sachin-maurya-17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github size={32} /></a>
              <a href="https://www.linkedin.com/in/sachin-maurya-iiitd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Linkedin size={32} /></a>
              <a href="mailto:sachin22424@iiitd.ac.in" className="text-gray-400 hover:text-cyan-400 transition-colors"><Mail size={32} /></a>
            </div>
            <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
              View My Work
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                    <Image
                      src="https://placehold.co/400x400/1a202c/76e4f7?text=SM"
                      alt="Sachin Maurya"
                      width={320}
                      height={320}
                      className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 mx-auto border-4 border-cyan-400"
                    />
                </div>
                <div className="md:w-2/3 text-lg text-gray-300">
                    <p className="mb-4">
                        I am a B.Tech student at IIIT Delhi, majoring in Computer Science and Biosciences. My journey in technology has been driven by a deep curiosity for both web development and machine learning. I thrive on solving complex problems and enjoy turning ideas into tangible, high-quality products.
                    </p>
                    <p className="mb-4">
                        With a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming, I have hands-on experience in building full-stack applications using modern technologies like React, Next.js, Node.js, and MongoDB. I am also proficient in machine learning, with experience in implementing models for tasks like object detection and data analysis.
                    </p>
                    <p>
                        I am a quick learner, a collaborative team player, and I am always eager to take on new challenges and expand my skill set.
                    </p>
                </div>
            </div>
        </section>


        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Work Experience</h2>
          <div className="relative border-l-2 border-cyan-500 pl-8 space-y-12">
            {/* Experience Item */}
            <div className="relative">
              <div className="absolute -left-10 bg-cyan-500 h-5 w-5 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-2xl font-bold text-cyan-400">ML Intern</h3>
              <p className="font-semibold text-lg text-white">ScrapUncle <span className="text-gray-400 text-sm ml-2">(June 2025 - Present)</span></p>
              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                <li>Implemented a Scrap Verification System with automated classification, weight detection, and inventory validation.</li>
                <li>Built an OCR-based weight detection system using OpenCV.</li>
                <li>Fine-tuned YOLO object detection models for custom scrap item datasets.</li>
                <li>Created RESTful APIs with FastAPI to integrate ML models into production.</li>
              </ul>
            </div>
            {/* Experience Item */}
            <div className="relative">
              <div className="absolute -left-10 bg-cyan-500 h-5 w-5 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-2xl font-bold text-cyan-400">Full-stack Developer</h3>
              <p className="font-semibold text-lg text-white">The Space Stylist <span className="text-gray-400 text-sm ml-2">(Freelance, July 2025 - Present)</span></p>
              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                <li>Developed a responsive website for an interior design startup using Next.js, TypeScript, and Tailwind CSS.</li>
                <li>Implemented dynamic animations, floating images, and interactive carousels.</li>
                <li>Created a user-friendly CMS for seamless content updates.</li>
                <li>Optimized for performance with image compression, lazy loading, and SSR.</li>
              </ul>
            </div>
             {/* Experience Item */}
            <div className="relative">
              <div className="absolute -left-10 bg-cyan-500 h-5 w-5 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-2xl font-bold text-cyan-400">Full-stack Developer</h3>
              <p className="font-semibold text-lg text-white">Yasham Foundation <span className="text-gray-400 text-sm ml-2">(Aug 2024 - Dec 2024)</span></p>
              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                <li>Developed a comprehensive web platform for an NGO with a responsive design.</li>
                <li>Built a robust CMS for non-technical administrators to manage content.</li>
                <li>Tech stack included React.js, Node.js, Express.js, and MongoDB.</li>
              </ul>
            </div>
             {/* Experience Item */}
             <div className="relative">
              <div className="absolute -left-10 bg-cyan-500 h-5 w-5 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-2xl font-bold text-cyan-400">Frontend Developer</h3>
              <p className="font-semibold text-lg text-white">The Dot Store <span className="text-gray-400 text-sm ml-2">(May 2024 - July 2024)</span></p>
              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                <li>Designed and implemented a responsive Home Page using React.</li>
                <li>Utilized interactive UI components, state management, and routing.</li>
                <li>Contributed to an e-commerce startup at IIIT Delhi.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Chit Chat</h3>
                <p className="text-gray-400 mb-4">A real-time chat application with user authentication and chat room management.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">React</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">Node.js</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">MongoDB</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">Socket.io</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/sachin-maurya-17/Chit-Chat-App" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github size={24} /></a>
                  {/* Add live link when available */}
                </div>
              </div>
            </div>
            {/* Project Card */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Gift Store: DBMS</h3>
                <p className="text-gray-400 mb-4">A fully functional e-commerce web application demonstrating core DBMS concepts.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">Flask</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">SQLAlchemy</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">MySQL</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">HTML/CSS</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/sachin-maurya-17/DBMS-Project" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github size={24} /></a>
                  {/* Add live link when available */}
                </div>
              </div>
            </div>
             {/* Project Card */}
             <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">The Space Stylist</h3>
                <p className="text-gray-400 mb-4">A responsive website for a Dubai-based architecture startup with a custom CMS.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">Next.js</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">Tailwind CSS</span>
                  <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-2 py-1 rounded">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.thespacestylist.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><ExternalLink size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Languages</h3>
                <p className="text-gray-300">C, C++, Java, Python, SQL, HTML, CSS, JavaScript</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Frontend</h3>
                <p className="text-gray-300">Next.js, React.js, Tailwind CSS, Bootstrap</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Backend & DB</h3>
                <p className="text-gray-300">Node.js, Express.js, Flask, MongoDB, MySQL</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">ML & Data</h3>
                <p className="text-gray-300">Scikit-learn, Pandas, Matplotlib, OpenCV</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
          </p>
          <a href="mailto:sachin22424@iiitd.ac.in" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-transform transform hover:scale-105 inline-block">
            Say Hello
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Sachin Maurya. All Rights Reserved.</p>
        <p className="text-sm">Built with Next.js, Tailwind CSS, and love ❤️</p>
      </footer>
    </div>
  );
};

export default Page;
