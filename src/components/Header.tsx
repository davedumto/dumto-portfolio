'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
export function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <header className="border-b-2 border-black pb-8 mb-12">
      <nav className="fixed top-0 left-0 right-0 w-full bg-white z-50 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex gap-6 text-sm md:text-base justify-end">
          <a 
            href="#home" 
            className={`px-3 py-1 transition-colors font-medium ${
              activeSection === 'home' 
                ? 'bg-black text-white' 
                : 'hover:underline'
            }`}
          >
            Home
          </a>
          <a 
            href="#projects" 
            className={`px-3 py-1 transition-colors font-medium ${
              activeSection === 'projects' 
                ? 'bg-black text-white' 
                : 'hover:underline'
            }`}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className={`px-3 py-1 transition-colors font-medium ${
              activeSection === 'experience' 
                ? 'bg-black text-white' 
                : 'hover:underline'
            }`}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className={`px-3 py-1 transition-colors font-medium ${
              activeSection === 'contact' 
                ? 'bg-black text-white' 
                : 'hover:underline'
            }`}
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="pt-16 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <pre className="text-sm font-bold md:hidden">
              EJERE DAVID ═══════════════
            </pre>
            <pre className="text-sm md:text-base font-bold hidden md:block">
              EJERE DAVID ═══════════════════════════════════
            </pre>
            <h1 className="text-xl md:text-2xl font-bold">
              Frontend Web Developer | React & Next.js Specialist
            </h1>
          </div>

          <p className="text-sm md:text-base text-gray-700 max-w-2xl">
            Results-driven developer with 3+ years building responsive,
            user-focused web applications
          </p>

          <div className="space-y-1 text-sm md:text-base text-gray-600">
            <div>Ejeredavid2001@gmail.com</div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-32 h-32 md:w-60 md:h-60 rounded-full bg-gray-200 border-2 border-black overflow-hidden flex-shrink-0">
            <Image 
              src="/david.jpeg" 
              alt="Ejere David - Frontend Developer" 
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </header>;
}