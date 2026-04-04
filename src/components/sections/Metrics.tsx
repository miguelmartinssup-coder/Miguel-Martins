import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { METRICS } from '../../config/skills';

gsap.registerPlugin(ScrollTrigger);

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const metrics = gsap.utils.toArray<HTMLElement>('.metric-item');
    
    metrics.forEach((metric) => {
      const value = metric.querySelector('.metric-value');
      if (!value) return;

      const targetValue = value.getAttribute('data-value') || '0';
      const isPercentage = targetValue.includes('%');
      const isCurrency = targetValue.includes('R$');
      const hasPlus = targetValue.includes('+');
      const numericValue = parseInt(targetValue.replace(/[^\d]/g, '')) || 0;

      gsap.to(value, {
        innerText: numericValue,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: metric,
          start: 'top bottom-=50',
        },
        onUpdate: function() {
          const current = Math.floor(Number(this.targets()[0].innerText));
          let formatted = current.toLocaleString('pt-BR');
          
          if (isPercentage) {
            value.innerHTML = `${formatted}%`;
          } else if (targetValue.toLowerCase().includes('anos')) {
            value.innerHTML = `${formatted} Anos`;
          } else if (isCurrency) {
            value.innerHTML = `R$ ${formatted}${hasPlus ? '+' : ''}`;
          } else {
            value.innerHTML = `${formatted}${hasPlus ? '+' : ''}`;
          }
        }
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="border-y border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
        {METRICS.map((metric) => (
          <div key={metric.label} className="metric-item bg-[#050505] p-8 md:p-12 flex flex-col gap-3">
            <span 
              className="metric-value text-4xl md:text-6xl font-black tracking-tighter"
              data-value={metric.value}
            >
              0
            </span>
            <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
