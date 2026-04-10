import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SF ORÇAMENTOS",
    category: "Automação Inteligente",
    description: "Automação inteligente de orçamentos técnicos e substituição de ativos via IA.",
    image: "https://picsum.photos/id/20/800/600",
    tags: ["AI", "Automation", "Quotes"],
    link: "https://quote-evolution-pro.lovable.app"
  },
  {
    title: "DASHBOARD OPERACIONAL REAL-TIME",
    category: "Visualização de Dados",
    description: "Monitoramento de KPIs industriais com latência zero, integrando sensores IoT.",
    image: "https://picsum.photos/id/180/800/600",
    tags: ["React", "Three.js", "WebSockets"],
    link: "#"
  },
  {
    title: "SISTEMA MARTINS",
    category: "Infraestrutura Digital",
    description: "Infraestrutura full-stack escalável para ecossistemas digitais.",
    image: "https://picsum.photos/id/119/800/600",
    tags: ["Full-stack", "Database", "Performance"],
    link: "https://martins-server-rs.vercel.app"
  },
  {
    title: "SISTEMA DE LOGÍSTICA PREDITIVA",
    category: "Inteligência Artificial",
    description: "Algoritmo de otimização de rotas que reduziu custos de combustível em 15%.",
    image: "https://picsum.photos/id/1073/800/600",
    tags: ["AI", "Optimization", "Python"],
    link: "#"
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { setHovering } = useCursor();

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    // Scroll horizontal apenas em desktop
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
      const scrollWidth = section.offsetWidth - window.innerWidth;
      
      const ctx = gsap.context(() => {
        gsap.to(section, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${scrollWidth}`,
            invalidateOnRefresh: true,
          }
        });

        // Revelação dos cards
        gsap.from('.project-card', {
          opacity: 0,
          y: 100,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: trigger,
            start: 'top 50%',
          }
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={triggerRef} className="relative bg-black">
      {/* Header fixo ou que scrolla junto */}
      <div className="px-6 md:px-24 pt-32 pb-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.2] mb-4 text-balance">
          PROJETOS QUE <br />
          <span className="text-zinc-800">GERAM VALOR</span>
        </h2>
      </div>

      <div className="overflow-x-auto md:overflow-hidden no-scrollbar">
        <div
          ref={sectionRef}
          className="flex gap-6 md:gap-8 px-6 md:px-24 pb-32 w-max"
        >
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative w-[85vw] md:w-[45vw] aspect-[4/5] md:aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden block"
              onMouseEnter={() => setHovering(true, 'VIEW')}
              onMouseLeave={() => setHovering(false)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block mb-4">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 border border-white/10 rounded text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}

          {/* CTA Card no final do scroll */}
          <div className="w-[85vw] md:w-[30vw] flex flex-col justify-center items-center text-center px-12 bg-zinc-950 border border-zinc-900 rounded-2xl">
            <h3 className="font-display text-3xl font-bold mb-6">SEU PROJETO PODE SER O PRÓXIMO</h3>
            <a
              href="#contact"
              className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ArrowUpRight size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
