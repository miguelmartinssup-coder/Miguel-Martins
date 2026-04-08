import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const textVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex flex-col justify-center px-6 md:px-24 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full"
      >
        <div className="space-y-4 mb-12">
          <motion.span 
            variants={textVariants}
            className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em] block"
          >
            Sênior UI/UX Engineer & Automation Specialist
          </motion.span>
          
          <h1 
            style={{ fontSize: 'var(--text-hero)' }}
            className="font-black leading-[0.8] tracking-tighter"
          >
            <motion.div variants={textVariants} className="block">
              MIGUEL
            </motion.div>
            <motion.div variants={textVariants} className="block text-zinc-800">
              MARTINS
            </motion.div>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div variants={textVariants} className="max-w-2xl">
            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-tight tracking-tight">
              Projetando o futuro da <span className="text-white font-medium">automação financeira</span> através de engenharia de software de elite e design centrado no impacto.
            </p>
          </motion.div>
          
          <motion.div variants={textVariants} className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                DISPONÍVEL PARA NOVOS DESAFIOS
              </span>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block">
                SÃO PAULO, BR — UTC-3
              </span>
              <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block">
                EST. 2023
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:right-24 md:translate-x-0 flex flex-col items-center md:items-end gap-4"
      >
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest md:[writing-mode:vertical-rl]">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-16 bg-zinc-800 relative overflow-hidden">
          <motion.div 
            animate={{ 
              y: ["-100%", "100%"],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-0 w-full h-full bg-zinc-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
