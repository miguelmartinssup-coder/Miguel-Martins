import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CONTACT } from '../../config/contact';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-12 md:p-24 text-center overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-6 block">PRÓXIMO PASSO</span>
          <h2 className="text-4xl md:text-7xl font-black text-black tracking-tighter leading-[0.9] mb-8">
            PRONTO PARA ESCALAR <br />
            SUA OPERAÇÃO?
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12 font-light">
            Agende um diagnóstico gratuito de 15 minutos. Vamos mapear seus gargalos e desenhar o caminho para a automação total.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:miguelmartins.sup@gmail.com"
              className="w-full md:w-auto px-12 py-6 bg-black text-white font-bold rounded-full hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              SOLICITAR DIAGNÓSTICO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={CONTACT.whatsapp} 
              target="_blank"
              className="w-full md:w-auto px-12 py-6 bg-transparent border border-zinc-200 text-black font-bold rounded-full hover:bg-zinc-50 transition-all duration-300"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
          
          <div className="mt-16 pt-16 border-t border-zinc-100 flex flex-wrap justify-center gap-12 grayscale opacity-50">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Segurança de Dados</span>
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Escalabilidade</span>
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Suporte 24/7</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
