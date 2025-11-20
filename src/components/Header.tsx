'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
export function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', ];
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

  return <header className="border-2 border-black dark:border-white p-8 mb-12 mt-20">
      <nav className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-black z-50 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base justify-center md:justify-end flex-1">
            <a 
              href="#home" 
              className={`px-2 sm:px-3 py-1 border border-black dark:border-white transition-colors font-medium ${
                activeSection === 'home' 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : 'hover:underline dark:text-white'
              }`}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className={`px-2 sm:px-3 py-1 border border-black dark:border-white transition-colors font-medium ${
                activeSection === 'projects' 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : 'hover:underline dark:text-white'
              }`}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className={`px-2 sm:px-3 py-1 border border-black dark:border-white transition-colors font-medium ${
                activeSection === 'experience' 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : 'hover:underline dark:text-white'
              }`}
            >
              Experience
            </a>
          </div>
          <div className="ml-2 sm:ml-4 md:ml-6">
            <ThemeToggle />
          </div>
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
            <h1 className="text-xl md:text-2xl font-bold dark:text-white">
              Fullstack Web Developer | React & Next.js Specialist
            </h1>
          </div>

          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-2xl">
            Results-driven developer with 3+ years building responsive,
            user-focused web applications
          </p>

          <div className="space-y-1 text-sm md:text-base text-gray-600">
            <h3 className='text-xl font-bold text-black dark:text-white'>[ email:  Contact@ejere.site ]</h3>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 rounded-full bg-gray-200 dark:bg-black border-2 border-black dark:border-white overflow-hidden flex-shrink-0">
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