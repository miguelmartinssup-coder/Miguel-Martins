import { motion } from 'motion/react';

const TIMELINE = [
  { year: '2022', title: 'Primeiro Sistema', description: 'Desenvolvimento da primeira automação para gestão de dados.' },
  { year: '2023', title: 'Quote Evolution v1', description: 'Lançamento do MVP de automação de cotações.' },
  { year: '2024', title: 'Quote Evolution v2', description: 'Evolução para plataforma completa com Supabase.' },
  { year: 'HOJE', title: 'Foco em IA', description: 'Integração de LLMs para análise preditiva financeira.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-64 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-12 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
          <img 
            src="https://picsum.photos/seed/miguel/200/200" 
            alt="Miguel Martins" 
            width={128} 
            height={128}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
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

          <div className="relative">
            <div className="absolute left-0 top-0 w-px h-full bg-white/5" />
            <div className="flex flex-col gap-16">
              {TIMELINE.map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-white transition-colors duration-500" />
                  <span className="text-[10px] font-mono text-zinc-600 mb-2 block tracking-widest">{item.year}</span>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
