import { motion } from 'motion/react';
import { PROJECTS } from '../../config/projects';
import { ArrowUpRight, CheckCircle2, Target, Zap } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-20"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">PORTFÓLIO DE ENGENHARIA</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              ESTUDOS DE <span className="text-zinc-800">CASO.</span>
            </h2>
            <p className="text-lg text-zinc-400">
              Soluções reais entregues para problemas reais. Foco total em ROI e eficiência operacional.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-zinc-500 font-mono text-sm">
            [ 01 — 02 ]
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className={`${index === 0 ? 'md:col-span-8' : 'md:col-span-4'} group`}
            >
              <SpotlightCard className="h-full">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">{project.category}</span>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">{project.title}</h3>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <div className="relative mb-8 group/img">
                    {/* Browser Mockup Header */}
                    <div className="bg-zinc-900/80 backdrop-blur-md border-t border-x border-zinc-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      </div>
                      <div className="mx-auto bg-zinc-950/50 rounded-md px-3 py-1 border border-zinc-800/50">
                        <div className="w-32 h-1.5 bg-zinc-800/50 rounded-full" />
                      </div>
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-b-xl border border-zinc-800 bg-zinc-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ 
                          objectPosition: project.imagePosition || 'center',
                          imageRendering: '-webkit-optimize-contrast'
                        }}
                        className="w-full h-full object-cover transition-all duration-500 group-hover/img:brightness-110 contrast-[1.05] saturate-[1.05] brightness-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent" />
                      
                      {/* Glass Overlay on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 bg-white/[0.02] pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 gap-4 pt-4 border-t border-zinc-800/50">
                      <div className="flex items-start gap-3">
                        <Target className="w-4 h-4 text-zinc-500 mt-1 shrink-0" />
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Problema</span>
                          <p className="text-xs text-zinc-300">{project.caseStudy.problem}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-zinc-500 mt-1 shrink-0" />
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Solução</span>
                          <p className="text-xs text-zinc-300">{project.caseStudy.solution}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500/70 mt-1 shrink-0" />
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Impacto</span>
                          <p className="text-xs text-green-400/90 font-medium">{project.caseStudy.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono bg-zinc-800/30 border border-zinc-800/50 px-2 py-1 rounded text-zinc-400 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
