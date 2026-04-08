import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-48 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-8 block">SOBRE A MINHA ENTREGA</span>
          <h2 className="text-4xl md:text-7xl font-black leading-[0.8] tracking-tighter mb-8">
            ENGENHARIA COM <br />
            <span className="text-zinc-800">PROPÓSITO.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-end"
        >
          <div className="space-y-6 max-w-xl">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Com mais de 5 anos de experiência no desenvolvimento de sistemas críticos, especializei-me em <span className="text-white">automação de processos administrativos e financeiros</span>.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Minha abordagem une o rigor da engenharia de software com uma visão estratégica de negócio. Não entrego apenas código; entrego <span className="text-white">tempo e previsibilidade</span> para donos de empresa. Já ajudei operações a reduzirem custos operacionais em mais de 60% através de soluções digitais sob medida.
            </p>
            
            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-zinc-900">
              <div>
                <span className="text-2xl font-bold text-white tracking-tighter block mb-1">5+</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Anos Exp.</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tighter block mb-1">50+</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Proc. Aut.</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tighter block mb-1">100%</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Foco ROI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
