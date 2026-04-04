import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-64 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-8 block">FILOSOFIA DE TRABALHO</span>
            <h2 
              style={{ fontSize: 'var(--text-section)' }}
              className="font-black mb-10 leading-[0.85] tracking-tighter"
            >
              EFICIÊNCIA <br />
              <span className="text-zinc-700">COMO PADRÃO.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed tracking-tight max-w-2xl">
              Transformo processos complexos em fluxos de trabalho simplificados e automatizados, 
              garantindo que a tecnologia trabalhe para o seu negócio, e não o contrário.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
