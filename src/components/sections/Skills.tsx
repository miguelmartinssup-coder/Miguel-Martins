import { motion } from 'motion/react';
import { SKILLS } from '../../config/skills';
import SpotlightCard from '../ui/SpotlightCard';
import { Code2, Cpu, Database, Layout, Terminal } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const iconMap: Record<string, any> = {
  "Frontend": Layout,
  "Backend": Database,
  "Automação": Cpu,
  "Ferramentas": Terminal,
  "Default": Code2
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block text-center md:text-left">COMPETÊNCIAS TÉCNICAS</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center md:text-left">STACK DE ENGENHARIA</h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          {Object.entries(SKILLS).map(([category, items], index) => {
            const Icon = iconMap[category] || iconMap.Default;
            const isLarge = index === 0 || index === 1;
            
            return (
              <motion.div 
                key={category} 
                variants={itemVariants}
                className={`${isLarge ? 'md:col-span-3' : 'md:col-span-2'}`}
              >
                <SpotlightCard className="h-full">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-400">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">
                        {category}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 rounded-md border border-zinc-800/50 bg-zinc-900/30 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
