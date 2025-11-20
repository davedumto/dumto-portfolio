import { Header } from '@/components/Header';
import { ASCIIDivider } from '@/components/ASCIIDivider';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceItem } from '@/components/ExperienceItem';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Header />

        {/* About Section */}
        <section className="mb-16">
          <ASCIIDivider variant="double" />
          <div className="py-8">
            <pre className="text-sm md:text-base font-bold mb-4">[ ABOUT ]</pre>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed max-w-4xl">
              Frontend Web Developer with 3+ years of experience building
              responsive, user-focused web applications using modern JavaScript
              frameworks. Proven track record delivering high-quality products
              in fast-paced environments and contributing to open-source
              projects.
            </p>
          </div>
          <ASCIIDivider variant="double" />
        </section>

        {/* Featured Projects */}
        <section id="projects" className="mb-16">
          <div className="mb-8">
            {/* Mobile: Simpler header */}
            <div className="md:hidden space-y-2">
              <pre className="text-base font-bold">╔═══════════════════╗</pre>
              <pre className="text-base font-bold">║ FEATURED PROJECTS ║</pre>
              <pre className="text-base font-bold">╚═══════════════════╝</pre>
            </div>

            {/* Desktop: Full decorative header */}
            <div className="hidden md:block">
              <pre className="text-lg font-bold mb-2">
                ╔═══════════════════════════════════════╗
              </pre>
              <pre className="text-lg font-bold mb-2">
                ║ FEATURED PROJECTS ║
              </pre>
              <pre className="text-lg font-bold">
                ╚═══════════════════════════════════════╝
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProjectCard 
              title="BridgeAfrica" 
              description="Infrastructure tracking platform documenting Africa's major development projects with real-time data visualization. Implemented complex data filtering systems and interactive project mapping features." 
              techStack={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']} 
              link="https://www.bridgeafricahq.com" 
              previewImage="/bridge africa.png" 
            />

            <ProjectCard 
              title="PHS Interiors" 
              description="Full-service interior design platform featuring portfolio galleries, service booking, and design academy registration. Built responsive design with optimized image loading and integrated contact forms." 
              techStack={['Next.js', 'React', 'Tailwind CSS', 'Image Optimization']} 
              link="https://www.phsinteriors.com/" 
              previewImage="/phs.png" 
            />

            <ProjectCard 
              title="Young and Skilled" 
              description="Youth empowerment platform connecting young professionals with skill development opportunities and career advancement resources. Built responsive interface with interactive features for skill tracking." 
              techStack={['React', 'JavaScript', 'Responsive Design', 'UI/UX']} 
              link="#" 
              previewImage="/young and skilled.png" 
            />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <div className="mb-8">
            {/* Mobile: Shorter dashes */}
            <div className="md:hidden space-y-2">
              <pre className="text-base font-bold">{'─'.repeat(25)}</pre>
              <pre className="text-base font-bold">EXPERIENCE</pre>
              <pre className="text-base font-bold">{'─'.repeat(25)}</pre>
            </div>

            {/* Desktop: Full dashes */}
            <div className="hidden md:block">
              <pre className="text-lg font-bold">{'─'.repeat(50)}</pre>
              <pre className="text-lg font-bold my-2"> EXPERIENCE</pre>
              <pre className="text-lg font-bold">{'─'.repeat(50)}</pre>
            </div>
          </div>

          <div className="space-y-8">
            <ExperienceItem 
              title="Lead Frontend Developer" 
              company="Fominance" 
              period="Dec 2023 - Present" 
              description="Leading frontend development initiatives, architecting scalable React applications, and mentoring junior developers." 
            />

            <ASCIIDivider variant="dotted" align="left" />

            <ExperienceItem 
              title="Frontend Developer" 
              company="Travel Avatar" 
              period="Oct 2023 - Dec 2023" 
              description="User-focused frontend developer who helped move web product to significant milestones through iterative development and user feedback integration." 
            />

            <ASCIIDivider variant="dotted" align="left" />

            <ExperienceItem 
              title="Frontend Development Intern" 
              company="Tenece Enugu Tech Hub" 
              period="May 2023 - Sep 2023" 
              description="Outstanding intern expressing skillset in HTML, CSS, and JavaScript through completed projects, demonstrating rapid learning and practical application." 
            />

            <ASCIIDivider variant="dotted" align="left" />

            <ExperienceItem 
              title="Open Source Contributor" 
              company="OnlyDust" 
              period="2023 - Present" 
              description="Top-rated contributor making massive contributions to major Web3 and blockchain projects, collaborating with global development teams." 
            />
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="mb-6">
            {/* Mobile: Shorter box */}
            <div className="md:hidden space-y-0">
              <pre className="text-base font-bold">╭{'─'.repeat(22)}╮</pre>
              <pre className="text-base font-bold">│ TECHNICAL SKILLS │</pre>
              <pre className="text-base font-bold">╰{'─'.repeat(22)}╯</pre>
            </div>

            {/* Desktop: Full box */}
            <div className="hidden md:block">
              <pre className="text-lg font-bold">╭{'─'.repeat(48)}╮</pre>
              <pre className="text-lg font-bold">│ TECHNICAL SKILLS │</pre>
              <pre className="text-lg font-bold">╰{'─'.repeat(48)}╯</pre>
            </div>
          </div>

          <div className="bg-black text-white p-6 md:p-8 font-mono text-xs md:text-sm space-y-3">
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-gray-400 min-w-[100px]">Frontend:</span>
              <span>
                JavaScript | HTML5 | CSS3 | React | Next.js | Nuxt.js | Redux
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-gray-400 min-w-[100px]">Styling:</span>
              <span>Tailwind CSS | Bootstrap | Sass | Responsive Design</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-gray-400 min-w-[100px]">Tools:</span>
              <span>Git | GitHub | API Integration | REST APIs</span>
            </div>
          </div>
        </section>

        {/* Beyond Code */}
        <section className="mb-16">
          <div className="mb-6">
            {/* Mobile: Shorter box */}
            <div className="md:hidden space-y-0">
              <pre className="text-base font-bold">┏━━━━━━━━━━━━━━━━━━┓</pre>
              <pre className="text-base font-bold">┃ BEYOND CODE ┃</pre>
              <pre className="text-base font-bold">┗━━━━━━━━━━━━━━━━━━┛</pre>
            </div>

            {/* Desktop: Full box */}
            <div className="hidden md:block">
              <pre className="text-lg font-bold">
                ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
              </pre>
              <pre className="text-lg font-bold">┃ BEYOND CODE ┃</pre>
              <pre className="text-lg font-bold">
                ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
              </pre>
            </div>
          </div>

          <div className="border-4 border-black p-6 md:p-8 bg-gray-50">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
              I&apos;m not your typical developer—I&apos;m also a passionate public
              speaker sharing insights on web development, tech innovation, and
              building scalable products. Check out my speaking portfolio to see
              talks and presentations I&apos;ve delivered.
            </p>

            <a 
              href="https://www.ejere.site" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-sm md:text-base font-bold border-4 border-black bg-white hover:bg-black hover:text-white px-6 py-3 transition-colors"
            >
              Speaker Portfolio → www.ejere.site
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t-2 border-black pt-8">
          <ASCIIDivider variant="double" />

          <div className="py-8 space-y-6">
            <pre className="text-sm md:text-base font-bold">[ CONNECT ]</pre>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <a 
                  href="https://github.com/davedumto/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:underline font-medium"
                >
                  → GitHub: github.com/davedumto
                </a>
                <a 
                  href="https://app.onlydust.com/u/davedumto" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:underline font-medium"
                >
                  → OnlyDust: app.onlydust.com/u/davedumto
                </a>
              </div>

              <div className="space-y-2">
                <a 
                  href="https://www.ejere.site" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:underline font-medium"
                >
                  → Speaker Portfolio: www.ejere.site
                </a>
                <a 
                  href="mailto:Ejeredavid2001@gmail.com" 
                  className="block hover:underline font-medium"
                >
                  → Email: Ejeredavid2001@gmail.com
                </a>
              </div>
            </div>
          </div>

          <ASCIIDivider variant="double"  />

          <div className="text-center text-xs text-gray-600 mt-6">
            <pre>© 2024 EJERE DAVID · FRONTEND DEVELOPER</pre>
          </div>
        </footer>
      </div>
    </div>
  );
}