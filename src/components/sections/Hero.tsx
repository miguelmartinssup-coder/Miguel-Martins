import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      '.reveal-text',
      { y: '110%' },
      {
        y: '0%',
        duration: 1.4,
        ease: 'power4.out',
        stagger: 0.15,
      }
    ).fromTo(
      subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=1'
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100svh] flex flex-col justify-center px-6 sm:px-10 md:px-24">
      <div className="max-w-6xl">
        <h1 
          style={{ fontSize: 'var(--text-hero)' }}
          className="font-black leading-[0.85] mb-12 tracking-tighter"
        >
          <div className="overflow-hidden">
            <span className="reveal-text block">MIGUEL</span>
          </div>
          <div className="overflow-hidden">
            <span className="reveal-text block text-zinc-700">MARTINS</span>
          </div>
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <p ref={subRef} className="text-base sm:text-xl md:text-3xl text-zinc-400 max-w-2xl font-light leading-snug uppercase tracking-tight">
            Analista Administrativo & Financeiro{' '}
            <span className="text-white">Especialista em Processos de Alta Eficiência</span>
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                DISPONÍVEL PARA NOVOS PROJETOS
              </span>
            </div>
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
              CUBATÃO, SP — UTC-3
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-8 md:right-24 flex flex-col items-end gap-4">
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest [writing-mode:vertical-rl]">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white origin-top animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
