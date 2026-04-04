import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../../config/projects';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.project-card');

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            end: 'top center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-48 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-8">
        <div>
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4 block">PROJETOS EM DESTAQUE</span>
          <h2 
            style={{ fontSize: 'var(--text-projects)' }}
            className="font-black tracking-tighter leading-none"
          >
            SOLUÇÕES DE IMPACTO
          </h2>
        </div>
        <div className="text-zinc-500 font-mono text-xl hidden md:block">01 — 02</div>
      </div>

      <div className="grid grid-cols-1 gap-24 md:gap-48">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="project-card group cursor-pointer">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-zinc-900">
                <picture>
                  <source srcSet={project.image} type="image/webp" />
                  <img
                    src={project.image}
                    alt={`Screenshot do sistema ${project.title} — ${project.description}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div className="max-w-full md:max-w-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">{project.category}</span>
                      <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                      <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4 tracking-tighter">{project.title}</h3>
                    <p className="text-white/60 text-sm md:text-lg font-light line-clamp-2 md:line-clamp-none">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded-sm text-zinc-500 uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-12 right-12 text-6xl font-black text-white/5 font-mono group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
