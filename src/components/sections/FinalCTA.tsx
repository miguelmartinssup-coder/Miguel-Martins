import { useSplitTextReveal } from '../../hooks/useSplitTextReveal';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../../config/contact';

export default function FinalCTA() {
  const h2Ref = useSplitTextReveal();

  return (
    <section id="contact" className="relative py-32 md:py-64 px-6 md:px-24 bg-zinc-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em] block mb-12">Próximo Passo</span>
        
        <h2
          ref={h2Ref as React.RefObject<HTMLHeadingElement>}
          className="font-display text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold tracking-[-0.04em] leading-[1.1] mb-16 text-white text-balance"
        >
          VAMOS ESCALAR SUA <br />
          <span className="text-zinc-800">OPERAÇÃO?</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-6 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3 text-xl">
              SOLICITAR DIAGNÓSTICO
              <ArrowUpRight size={24} />
            </span>
          </a>
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Resposta imediata via WhatsApp</span>
            <span className="text-zinc-400 font-medium">{CONTACT.email}</span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
