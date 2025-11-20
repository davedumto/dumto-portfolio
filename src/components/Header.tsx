import React from 'react';
import Image from 'next/image';
export function Header() {
  return <header className="border-b-2 border-black pb-8 mb-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
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

          <div className="space-y-1 text-xs md:text-sm text-gray-600">
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

      <nav className="mt-8 flex gap-6 text-sm md:text-base">
        <a href="#home" className="hover:underline font-medium">
          Home
        </a>
        <a href="#projects" className="hover:underline font-medium">
          Projects
        </a>
        <a href="#experience" className="hover:underline font-medium">
          Experience
        </a>
        <a href="#contact" className="hover:underline font-medium">
          Contact
        </a>
      </nav>
    </header>;
}