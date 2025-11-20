import React from 'react';
import Image from 'next/image';
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  previewImage: string;
}
export function ProjectCard({
  title,
  description,
  techStack,
  link,
  previewImage
}: ProjectCardProps) {
  return <div className="border-2 border-black p-6 space-y-4 bg-white hover:bg-gray-50 transition-colors">
      {/* ASCII Title - Responsive */}
      <div className="space-y-2">
        {/* Mobile: Shorter border */}
        <pre className="text-xs text-gray-400 md:hidden">
          ┌{'─'.repeat(20)}┐
        </pre>
        {/* Desktop: Full border */}
        <pre className="text-xs text-gray-400 hidden md:block">
          ┌{'─'.repeat(40)}┐
        </pre>

        <h3 className="text-lg md:text-xl font-bold px-2">{title}</h3>

        {/* Mobile: Shorter border */}
        <pre className="text-xs text-gray-400 md:hidden">
          └{'─'.repeat(20)}┘
        </pre>
        {/* Desktop: Full border */}
        <pre className="text-xs text-gray-400 hidden md:block">
          └{'─'.repeat(40)}┘
        </pre>
      </div>

      {/* Preview Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 border-2 border-gray-300 overflow-hidden">
        <Image 
          src={previewImage} 
          alt={`${title} preview`} 
          fill
          className="object-cover transition-transform duration-300 hover:scale-110" 
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map(tech => <span key={tech} className="px-3 py-1 text-xs border border-black bg-white font-medium">
            {tech}
          </span>)}
      </div>

      {/* Link */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-bold border-b-2 border-black hover:bg-black hover:text-white px-2 py-1 transition-colors">
        VIEW LIVE SITE →
      </a>
    </div>;
}