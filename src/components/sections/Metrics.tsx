import { motion } from 'motion/react';
import { METRICS } from '../../config/skills';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Metrics() {
  return (
    <section className="border-y border-zinc-900 bg-zinc-950">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-900"
      >
        {METRICS.map((metric) => (
          <motion.div 
            key={metric.label} 
            variants={itemVariants}
            className="p-8 md:p-16 flex flex-col gap-4 group hover:bg-zinc-900/30 transition-colors duration-500"
          >
            <span className="text-4xl md:text-7xl font-black tracking-tighter text-white group-hover:text-zinc-200 transition-colors">
              {metric.value}
            </span>
            <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] leading-relaxed max-w-[120px]">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
