import { motion, useReducedMotion } from 'motion/react';

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

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const textVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: prefersReducedMotion ? 0.5 : 1 }
    }
  };
  return (
    <section className="relative min-h-[90svh] flex flex-col justify-center px-6 md:px-24 overflow-hidden pt-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full"
      >
        <div className="space-y-6 mb-12">
          <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-4">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
              Disponível para novos projetos de automação
            </span>
          </motion.div>
          
          <h1 
            className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter"
          >
            <motion.div variants={textVariants} className="block">
              TRANSFORME CAOS EM
            </motion.div>
            <motion.div variants={textVariants} className="block text-zinc-700">
              LUCRO OPERACIONAL.
            </motion.div>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div variants={textVariants} className="max-w-2xl">
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-tight tracking-tight mb-8">
              Eu projeto e construo <span className="text-white font-medium">sistemas de automação sob medida</span> que eliminam gargalos manuais e escalam a eficiência da sua empresa.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 group"
              >
                SOLICITAR DIAGNÓSTICO GRATUITO
                <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform" />
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 bg-transparent border border-zinc-800 text-white font-bold rounded-full hover:bg-zinc-900 transition-all duration-300"
              >
                VER RESULTADOS
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={textVariants} className="hidden md:flex flex-col gap-4 text-right">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block">
                Foco em Resultados
              </span>
              <span className="text-2xl font-bold text-white tracking-tighter">
                +65% EFICIÊNCIA
              </span>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block">
                Tempo Médio de Entrega
              </span>
              <span className="text-2xl font-bold text-white tracking-tighter">
                15-30 DIAS
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
          {!prefersReducedMotion && (
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
          )}
          {prefersReducedMotion && (
            <div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-400" />
          )}
        </div>
      </motion.div>
    </section>
  );
}
