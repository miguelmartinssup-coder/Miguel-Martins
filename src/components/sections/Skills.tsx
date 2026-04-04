import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '../../config/skills';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const categories = gsap.utils.toArray<HTMLElement>('.skill-category');
    
    categories.forEach((cat) => {
      gsap.fromTo(
        cat.querySelectorAll('.skill-tag'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cat,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-48 px-6 md:px-24 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto">
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-8 block">COMPETÊNCIAS TÉCNICAS</span>
        <h2 className="text-4xl md:text-7xl font-black mb-24 tracking-tighter">STACK DE ALTA PERFORMANCE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="skill-tag px-5 py-3 border border-white/5 bg-white/[0.02] text-sm md:text-base font-medium hover:border-white/20 hover:bg-white/[0.05] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
