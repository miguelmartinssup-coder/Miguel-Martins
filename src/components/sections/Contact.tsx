import React, { useState } from 'react';
import { motion } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import { CONTACT } from '../../config/contact';
import { Send, CheckCircle2, AlertCircle, Mail, MessageCircle, Linkedin } from 'lucide-react';

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
    <section id="contact" className="py-24 md:py-64 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-8 block">VAMOS CONVERSAR</span>
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.85]">
            PRONTO PARA <br />
            <span className="text-zinc-700">EVOLUIR?</span>
          </h2>
          <p className="text-xl md:text-3xl text-zinc-400 font-light leading-tight tracking-tight mb-16 max-w-xl">
            Seja para uma consultoria, automação de processos ou um novo sistema, estou à disposição.
          </p>
          
          <div className="flex items-center gap-8">
            <a 
              href={gmailComposeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group"
              aria-label="Email"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href={CONTACT.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href={CONTACT.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">Nome</label>
              <input
                required
                type="text"
                placeholder="Seu nome"
                style={{ fontSize: '16px' }}
                className="bg-transparent border-b border-white/10 focus:border-white/40 py-4 text-lg outline-none transition-colors placeholder:text-zinc-800"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">E-mail</label>
              <input
                required
                type="email"
                placeholder="seu@email.com"
                style={{ fontSize: '16px' }}
                className="bg-transparent border-b border-white/10 focus:border-white/40 py-4 text-lg outline-none transition-colors placeholder:text-zinc-800"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">Assunto</label>
            <select
              className="bg-transparent border-b border-white/10 focus:border-white/40 py-4 text-lg outline-none transition-colors appearance-none cursor-pointer"
              value={formData.subject}
              onChange={e => setFormData({...formData, subject: e.target.value})}
            >
              <option className="bg-[#050505]">Automação Financeira</option>
              <option className="bg-[#050505]">Análise Administrativa</option>
              <option className="bg-[#050505]">Consultoria</option>
              <option className="bg-[#050505]">Outro</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">Mensagem</label>
            <textarea
              required
              rows={4}
              placeholder="Como posso ajudar?"
              style={{ fontSize: '16px' }}
              className="bg-transparent border-b border-white/10 focus:border-white/40 py-4 text-lg outline-none transition-colors placeholder:text-zinc-800 resize-none"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <MagneticButton 
            className={`w-full md:w-fit px-16 py-6 text-xl flex items-center justify-center gap-4 transition-all ${
              status === 'success' ? 'bg-green-500 text-white border-none' : 
              status === 'error' ? 'bg-red-500 text-white border-none' : 
              'bg-white text-black border-none'
            }`}
            aria-label="Enviar formulário de contato"
          >
            {status === 'idle' && <>ENVIAR MENSAGEM <Send size={20} /></>}
            {status === 'loading' && <span className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />}
            {status === 'success' && <>MENSAGEM ENVIADA <CheckCircle2 size={20} /></>}
            {status === 'error' && <>ERRO AO ENVIAR <AlertCircle size={20} /></>}
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}
