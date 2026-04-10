import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const nameRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let count = 0;
    const target = 100;
    const duration = 1800; // ms
    const interval = duration / target;
    
    const timer = setInterval(() => {
      count += 1;
      if (counterRef.current) counterRef.current.textContent = `${count}`;
      if (count >= target) {
        clearInterval(timer);
        // Animate out: curtain panels saindo para cima em stagger
        gsap.to(panelsRef.current, {
          y: '-100%',
          duration: 0.7,
          stagger: 0.06,
          ease: 'power4.inOut',
          delay: 0.2,
          onComplete: () => {
            // Fade out do container inteiro
            gsap.to(containerRef.current, {
              opacity: 0,
              duration: 0.3,
              onComplete,
            });
          },
        });
      }
    }, interval);

    // Animar o nome letra por letra
    if (nameRef.current) {
      const letters = nameRef.current.querySelectorAll('.letter');
      gsap.from(letters, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power3.out',
        delay: 0.2,
      });
    }

    return () => clearInterval(timer);
  }, [onComplete]);

  const name = 'MIGUEL MARTINS';
  const PANELS = 5; // número de painéis do curtain

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Curtain panels */}
      {Array.from({ length: PANELS }).map((_, i) => (
        <div
          key={i}
          ref={el => { if (el) panelsRef.current[i] = el; }}
          className="absolute top-0 h-full bg-zinc-950"
          style={{
            left: `${(i / PANELS) * 100}%`,
            width: `${100 / PANELS + 0.5}%`, // +0.5% para evitar gap
          }}
        />
      ))}

      {/* Conteúdo central */}
      <div className="relative z-10 text-center">
        {/* Nome animado letra por letra */}
        <div ref={nameRef} className="font-display font-extrabold text-2xl tracking-[0.3em] text-white mb-8 overflow-hidden">
          {name.split('').map((char, i) => (
            <span key={i} className="letter inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {/* Counter */}
        <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest flex items-center justify-center gap-3">
          <div className="w-8 h-[1px] bg-zinc-800" />
          <span ref={counterRef} className="tabular-nums">0</span>
          <div className="w-8 h-[1px] bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
