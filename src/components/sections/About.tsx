import { useSplitTextReveal } from '../../hooks/useSplitTextReveal';

export default function About() {
  const h2Ref = useSplitTextReveal({ stagger: 0.05 });

  return (
    <section id="about" className="relative py-32 md:py-48 px-6 md:px-24 overflow-x-hidden">
      {/* Decorative Number */}
      <div className="absolute top-0 right-0 text-[20rem] md:text-[40rem] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
        02
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em] block mb-8">Sobre a Operação</span>
            <h2
              ref={h2Ref as React.RefObject<HTMLHeadingElement>}
              className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.2] mb-12 text-balance"
            >
              ENGENHARIA DE <span className="text-zinc-800">ALTA PRECISÃO</span>
            </h2>
            
            <div className="space-y-8 text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              <p>
                Com background em engenharia e foco em resultados financeiros, eu não apenas escrevo código; eu projeto <span className="text-white font-medium">máquinas digitais de lucro</span>.
              </p>
              <p>
                Minha abordagem combina análise de processos industriais com desenvolvimento de software moderno para criar soluções que se pagam em poucos meses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 lg:pt-32">
            {[
              { label: 'Processos Automatizados', value: '+200' },
              { label: 'Economia Gerada', value: '1000h' },
              { label: 'Sistemas Ativos', value: '5' },
              { label: 'Eficiência Média', value: '85%' },
            ].map((stat, i) => (
              <div key={i} className="p-8 border border-zinc-900 bg-zinc-950/50 backdrop-blur-sm rounded-2xl group hover:border-zinc-700 transition-colors">
                <span className="font-display text-4xl font-bold text-white block mb-2 tracking-tighter group-hover:text-zinc-300 transition-colors">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
