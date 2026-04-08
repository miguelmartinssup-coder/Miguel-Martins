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
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-8 block">FILOSOFIA DE ENGENHARIA</span>
          <h2 className="text-4xl md:text-7xl font-black leading-[0.8] tracking-tighter mb-8">
            EFICIÊNCIA <br />
            <span className="text-zinc-800">COMO PADRÃO.</span>
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
              Minha abordagem combina <span className="text-white">rigor técnico</span> com uma visão estratégica de produto. Acredito que a automação não deve apenas substituir tarefas, mas sim <span className="text-white">amplificar o potencial humano</span>.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Especializado em arquiteturas modernas e fluxos de dados otimizados, entrego soluções que reduzem a fricção operacional e maximizam o ROI tecnológico.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-zinc-900">
              <div>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-2">Foco Principal</span>
                <span className="text-sm text-zinc-300">Automação de Processos</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-2">Metodologia</span>
                <span className="text-sm text-zinc-300">Data-Driven Design</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
