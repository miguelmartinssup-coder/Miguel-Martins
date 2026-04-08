import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT } from '../../config/contact';
import { Send, CheckCircle2, AlertCircle, Mail, MessageCircle, Linkedin } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Automação Financeira', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Olá Miguel,\n\nMeu nome é ${formData.name}.\n\n${formData.message}`)}`;
    
    window.open(gmailUrl, '_blank');
    
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`;

  return (
    <section id="contact" className="py-24 md:py-48 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-8 block">VAMOS CONVERSAR</span>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.85]">
              PRONTO PARA <br />
              <span className="text-zinc-800">EVOLUIR?</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-tight tracking-tight mb-16 max-w-md">
              Seja para uma consultoria estratégica ou engenharia de automação, estou pronto para o próximo desafio.
            </p>
            
            <div className="flex items-center gap-6">
              {[
                { icon: Mail, href: gmailComposeUrl, label: "Email" },
                { icon: MessageCircle, href: CONTACT.whatsapp, label: "WhatsApp" },
                { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-xl border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <SpotlightCard>
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">Nome</label>
                  <input
                    required
                    type="text"
                    placeholder="Seu nome"
                    className="w-full bg-transparent border-b border-zinc-800 focus:border-white py-3 text-lg outline-none transition-colors placeholder:text-zinc-800"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">E-mail</label>
                  <input
                    required
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full bg-transparent border-b border-zinc-800 focus:border-white py-3 text-lg outline-none transition-colors placeholder:text-zinc-800"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">Assunto</label>
                <select
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-white py-3 text-lg outline-none transition-colors appearance-none cursor-pointer"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                >
                  <option className="bg-zinc-950">Automação Financeira</option>
                  <option className="bg-zinc-950">Análise Administrativa</option>
                  <option className="bg-zinc-950">Consultoria</option>
                  <option className="bg-zinc-950">Outro</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Como posso ajudar?"
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-white py-3 text-lg outline-none transition-colors placeholder:text-zinc-800 resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-5 rounded-xl text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-4 transition-all ${
                  status === 'success' ? 'bg-green-500 text-white' : 
                  status === 'error' ? 'bg-red-500 text-white' : 
                  'bg-white text-black hover:bg-zinc-200'
                }`}
              >
                {status === 'idle' && <>ENVIAR MENSAGEM <Send size={16} /></>}
                {status === 'loading' && <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />}
                {status === 'success' && <>MENSAGEM ENVIADA <CheckCircle2 size={16} /></>}
                {status === 'error' && <>ERRO AO ENVIAR <AlertCircle size={16} /></>}
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
