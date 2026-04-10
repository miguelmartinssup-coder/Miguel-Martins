import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSplitTextReveal } from '../../hooks/useSplitTextReveal';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "DIAGNÓSTICO",
    description: "Mapeamento completo dos gargalos operacionais e identificação de oportunidades de automação com maior ROI."
  },
  {
    title: "ARQUITETURA",
    description: "Desenho técnico da solução, garantindo escalabilidade, segurança e integração fluida com seus sistemas atuais."
  },
  {
    title: "EXECUÇÃO",
    description: "Desenvolvimento ágil com entregas incrementais, permitindo que você veja o valor sendo gerado desde a primeira semana."
  },
  {
    title: "OTIMIZAÇÃO",
    description: "Monitoramento contínuo e ajustes finos para garantir que a máquina digital opere em sua performance máxima."
  }
];

export default function Method() {
  const h2Ref = useSplitTextReveal();
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(lineRef.current, 
        { scaleX: 0 },
        { 
          scaleX: 1, 
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
          }
        }
      );
    }
  }, []);

  return (
    <section id="method" ref={containerRef} className="relative py-32 md:py-48 px-6 md:px-24 bg-black overflow-x-hidden">
      {/* Decorative Number */}
      <div className="absolute top-0 left-0 text-[20rem] md:text-[40rem] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none -translate-x-1/4 -translate-y-1/4">
        03
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em] block mb-8">Metodologia</span>
          <h2
            ref={h2Ref as React.RefObject<HTMLHeadingElement>}
            className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.2] text-balance"
          >
            O MÉTODO POR TRÁS DO <br />
            <span className="text-zinc-800">ALTO DESEMPENHO</span>
          </h2>
        </div>

        <div className="relative">
          {/* Animated Progress Line */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-px bg-zinc-900 origin-left" />
          <div ref={lineRef} className="hidden md:block absolute top-0 left-0 w-full h-px bg-white origin-left z-20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-12">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <span className="font-mono text-xs text-zinc-600 mb-6 block">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight group-hover:text-zinc-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
