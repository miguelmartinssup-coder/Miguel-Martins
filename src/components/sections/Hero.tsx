import { useSplitTextReveal } from '../../hooks/useSplitTextReveal';
import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { CONTACT } from '../../config/contact';

export default function Hero() {
  const h1Ref = useSplitTextReveal({ delay: 0.8, stagger: 0.05, type: 'words' });
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge deslizando de cima
      gsap.from(badgeRef.current, {
        y: -20, opacity: 0, duration: 0.6, delay: 0.3, ease: 'power3.out'
      });
      // Subtítulo e CTAs em sequência
      gsap.from([subtitleRef.current, ctaRef.current], {
        y: 30, opacity: 0, duration: 0.8, delay: 1.4, stagger: 0.15, ease: 'power3.out'
      });
      // Stats surgindo da direita
      gsap.from(statsRef.current, {
        x: 40, opacity: 0, duration: 0.8, delay: 1.6, ease: 'power3.out'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[95svh] flex flex-col justify-center px-6 md:px-24 pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8 max-w-full">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0 animate-pulse" />
          <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest leading-tight">
            Disponível para novos projetos de automação
          </span>
        </div>

        {/* H1 com split-word reveal */}
        <h1
          ref={h1Ref as React.RefObject<HTMLHeadingElement>}
          className="font-display text-[clamp(1.5rem,6vw,4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] mb-16 text-balance"
        >
          TRANSFORME CAOS EM{' '}
          <span className="text-zinc-400">LUCRO OPERACIONAL</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-zinc-400 font-light leading-tight tracking-tight mb-10"
            >
              Eu projeto e construo{' '}
              <span className="text-white font-medium">sistemas de automação sob medida</span>{' '}
              que eliminam gargalos manuais e escalam a eficiência da sua empresa.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-400 transition-all duration-300 flex items-center gap-3"
              >
                SOLICITAR DIAGNÓSTICO GRATUITO
                <span className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform" />
              </a>
              <a
                href="#work"
                className="px-8 py-4 bg-transparent border border-zinc-400 text-white font-bold rounded-full hover:bg-zinc-400 transition-all duration-300"
              >
                VER RESULTADOS
              </a>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="hidden md:flex flex-col gap-4 text-right">
            <div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Foco em Resultados</span>
              <span className="font-display text-2xl font-bold text-white tracking-tighter">+65% EFICIÊNCIA</span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Tempo Médio de Entrega</span>
              <span className="font-display text-2xl font-bold text-white tracking-tighter">15–30 DIAS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-24 hidden md:flex flex-col items-end gap-4">
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest [writing-mode:vertical-rl]">SCROLL</span>
        <div className="w-[1px] h-16 bg-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-400 animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
