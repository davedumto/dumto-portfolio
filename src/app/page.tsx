import { Header } from '@/components/Header';
import { ASCIIDivider } from '@/components/ASCIIDivider';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceItem } from '@/components/ExperienceItem';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div id="home">
          <Header />
        </div>

        <section className="mb-16">
          <div className="py-8">
            <pre className="text-sm md:text-base font-bold mb-4 dark:text-white">[ ABOUT ]</pre>
            <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed max-w-4xl">
              Frontend Web Developer with 3+ years of experience building
              responsive, user-focused web applications using modern JavaScript
              frameworks. Proven track record delivering high-quality products
              in fast-paced environments and contributing to open-source
              projects.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <div className="mb-8">
            <div className="md:hidden space-y-0">
              <pre className="text-base font-bold dark:text-white">╔═══════════════════╗</pre>
              <pre className="text-base font-bold dark:text-white">║ FEATURED PROJECTS ║</pre>
              <pre className="text-base font-bold dark:text-white">╚═══════════════════╝</pre>
            </div>

            <div className="hidden md:block">
              <pre className="text-lg font-bold mb-2 dark:text-white">
                ╔═══════════════════════════════════════╗
              </pre>
              <pre className="text-lg font-bold mb-2 dark:text-white">
                ║ FEATURED PROJECTS ║
              </pre>
              <pre className="text-lg font-bold dark:text-white">
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
              link="https://www.youngandskilled.org" 
              previewImage="/young and skilled.png" 
            />
          </div>
        </section>

        <section id="experience" className="mb-16">
          <div className="mb-8">
            <div className="md:hidden space-y-2">
              <pre className="text-base font-bold dark:text-white">{'─'.repeat(25)}</pre>
              <pre className="text-base font-bold dark:text-white">EXPERIENCE</pre>
              <pre className="text-base font-bold dark:text-white">{'─'.repeat(25)}</pre>
            </div>

            <div className="hidden md:block">
              <pre className="text-lg font-bold dark:text-white">{'─'.repeat(50)}</pre>
              <pre className="text-lg font-bold my-2 dark:text-white"> EXPERIENCE</pre>
              <pre className="text-lg font-bold dark:text-white">{'─'.repeat(50)}</pre>
            </div>
          </div>

          <div className="space-y-8">
            <ExperienceItem 
              title="Lead Frontend Developer" 
              company="Fominance" 
              period="Dec 2023 - Aug 2024" 
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
              period=" Dec 2024 - Present" 
              description="Top-rated contributor making massive contributions to major Web3 and blockchain projects, collaborating with global development teams." 
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6">
            <div className="md:hidden space-y-0">
              <pre className="text-base font-bold dark:text-white">╭{'─'.repeat(22)}╮</pre>
              <pre className="text-base font-bold dark:text-white">│ TECHNICAL SKILLS │</pre>
              <pre className="text-base font-bold dark:text-white">╰{'─'.repeat(22)}╯</pre>
            </div>

            <div className="hidden md:block">
              <pre className="text-lg font-bold dark:text-white">╭{'─'.repeat(48)}╮</pre>
              <pre className="text-lg font-bold dark:text-white">│ TECHNICAL SKILLS │</pre>
              <pre className="text-lg font-bold dark:text-white">╰{'─'.repeat(48)}╯</pre>
            </div>
          </div>

          <div className="bg-black dark:bg-white text-white dark:text-black p-6 md:p-8 font-mono text-xs md:text-sm space-y-3">
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-gray-400 dark:text-gray-600 min-w-[100px]">Frontend:</span>
              <span>
                JavaScript | HTML5 | CSS3 | React | Next.js | Nuxt.js | Redux
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-gray-400 dark:text-gray-600 min-w-[100px]">Styling:</span>
              <span>Tailwind CSS | Bootstrap | Sass | Responsive Design</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-gray-400 dark:text-gray-600 min-w-[100px]">Tools:</span>
              <span>Git | GitHub | API Integration | REST APIs</span>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6">
            <div className="md:hidden space-y-0">
              <pre className="text-base font-bold dark:text-white">┏━━━━━━━━━━━┓</pre>
              <pre className="text-base font-bold dark:text-white">┃ BEYOND CODE ^_^</pre>
              <pre className="text-base font-bold dark:text-white">┗━━━━━━━━━━━┛</pre>
            </div>

            <div className="hidden md:block">
              <pre className="text-lg font-bold dark:text-white">
                ┏━━━━━━━━━━┓
              </pre>
              <pre className="text-lg font-bold dark:text-white">┃ BEYOND CODE ^_^</pre>
              <pre className="text-lg font-bold dark:text-white">
                ┗━━━━━━━━━━┛
              </pre>
            </div>
          </div>

          <div className="border-4 border-black dark:border-white p-6 md:p-8 bg-gray-50 dark:bg-gray-800">
            <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
              I&apos;m not your typical developer—I&apos;m also a passionate public
              speaker sharing insights on web development, tech innovation, and
              building scalable products. Check out my speaking portfolio to see
              talks and presentations I&apos;ve delivered.
            </p>

            <a 
              href="https://www.ejere.site" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-sm md:text-base font-bold border-4 border-black dark:border-white bg-white dark:bg-gray-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-6 py-3 transition-colors"
            >
              Speaker Portfolio → www.ejere.site
            </a>
          </div>
        </section>

        <footer className="border-t-2 border-black dark:border-white pt-8">
          <div className="py-8 space-y-6">
            <pre className="text-sm md:text-base font-bold dark:text-white">[ CONNECT ]</pre>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <a 
                  href="https://github.com/davedumto/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:underline font-medium dark:text-white"
                >
                  → GitHub: github.com/davedumto
                </a>
                <a 
                  href="https://app.onlydust.com/u/davedumto" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:underline font-medium dark:text-white"
                >
                  → OnlyDust: app.onlydust.com/u/davedumto
                </a>
              </div>

              <div className="space-y-2">
                <a 
                  href="https://www.ejere.site" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:underline font-medium dark:text-white"
                >
                  → Speaker Portfolio: www.ejere.site
                </a>
                <a 
                  href="mailto:contact@ejere.site" 
                  className="block hover:underline font-medium dark:text-white"
                >
                  → Email: contact@ejere.site
                </a>
              </div>
            </div>

          </div>

          <ASCIIDivider variant="double" />

          <div className="text-center text-xs text-gray-600 dark:text-gray-400 mt-6">
            <pre>© {new Date().getFullYear()} EJERE DAVID · FULLSTACK DEVELOPER</pre>
          </div>
        </footer>
      </div>
    </div>
  );
}