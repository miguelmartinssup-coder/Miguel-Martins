import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Diagnóstico e Mapeamento",
    description: "Análise profunda dos seus processos atuais para identificar gargalos e oportunidades de automação de alto ROI."
  },
  {
    number: "02",
    title: "Arquitetura e Design",
    description: "Desenho técnico da solução, focando em escalabilidade, segurança de dados e experiência do usuário final."
  },
  {
    number: "03",
    title: "Desenvolvimento Ágil",
    description: "Implementação robusta com entregas incrementais, garantindo que o sistema atenda exatamente às suas necessidades."
  },
  {
    number: "04",
    title: "Implementação e Suporte",
    description: "Deploy assistido, treinamento da equipe e monitoramento contínuo para garantir a máxima eficiência da solução."
  }
];

export default function Method() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">METODOLOGIA</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
          COMO EU <span className="text-zinc-800">TRABALHO.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="text-5xl font-black text-zinc-900 mb-6 group-hover:text-white transition-colors duration-500">
              {step.number}
            </div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
