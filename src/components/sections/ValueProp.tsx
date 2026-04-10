import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, TrendingUp, Clock, ShieldAlert, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ValueProp() {
  const pains = [
    {
      icon: <Clock className="w-6 h-6 text-red-500/70" />,
      title: "Processos Lentos",
      description: "Sua equipe gasta horas em tarefas repetitivas que poderiam ser automatizadas em segundos."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-500/70" />,
      title: "Erros Humanos",
      description: "Falhas em planilhas e processos manuais geram prejuízos financeiros e retrabalho constante."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500/70" />,
      title: "Falta de Dados",
      description: "Decisões baseadas em 'feeling' porque os dados estão espalhados e desorganizados."
    }
  ];

  const solutions = [
    {
      icon: <Zap className="w-6 h-6 text-green-500/70" />,
      title: "Automação Inteligente",
      description: "Sistemas que trabalham por você 24/7, eliminando o trabalho braçal e repetitivo."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500/70" />,
      title: "Precisão Absoluta",
      description: "Regras de negócio blindadas em código, garantindo 100% de integridade nos seus processos."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500/70" />,
      title: "Escalabilidade Real",
      description: "Sua operação cresce sem precisar aumentar o headcount na mesma proporção."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-y border-zinc-900">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-24"
      >
        {/* Problem Side */}
        <div className="space-y-12">
          <div>
            <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">O CENÁRIO ATUAL</span>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-black tracking-tighter leading-snug mb-6">
              O CUSTO DA <span className="text-zinc-600">INEFICIÊNCIA</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Manter processos manuais não é apenas lento — é caro. Cada minuto gasto em tarefas burocráticas é um minuto a menos focado no crescimento do seu negócio.
            </p>
          </div>

          <div className="space-y-8">
            {pains.map((pain, i) => (
              <motion.div key={i} variants={itemVariants} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center">
                  {pain.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{pain.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{pain.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Side */}
        <div className="space-y-12">
          <div>
            <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">A MINHA ENTREGA</span>
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-black tracking-tighter leading-snug mb-6 break-normal">
              ENGENHARIA DE <span className="text-white">ALTO IMPACTO</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Eu não apenas escrevo código. Eu desenho soluções estratégicas que atacam a raiz do problema e geram retorno sobre o investimento imediato.
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((sol, i) => (
              <motion.div key={i} variants={itemVariants} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-green-500/5 border border-green-500/10 flex items-center justify-center">
                  {sol.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{sol.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{sol.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
