import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import { CONTACT } from '../../config/contact';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { cn } from '../../lib/utils';

const NAV_LINKS = [
  { id: 'work', label: 'PROJETOS' },
  { id: 'skills', label: 'HABILIDADES' },
  { id: 'about', label: 'SOBRE' },
  { id: 'contact', label: 'CONTATO' },
];

const SECTION_IDS = NAV_LINKS.map(l => l.id);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setVariant } = useCursor();
  const activeSection = useActiveSection(SECTION_IDS);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-24 py-6 md:py-10 mix-blend-difference">
        <a 
          href="/" 
          className="text-xl font-black tracking-tighter"
          onMouseEnter={() => setVariant('link')}
          onMouseLeave={() => setVariant('default')}
        >
          MIGUEL MARTINS
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-16 text-[10px] font-bold tracking-[0.3em] uppercase">
          {NAV_LINKS.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onMouseEnter={() => setVariant('link')}
              onMouseLeave={() => setVariant('default')}
              className={cn(
                "transition-opacity hover:opacity-100 relative",
                activeSection === link.id ? "opacity-100" : "opacity-40"
              )}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-white"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <MagneticButton 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={() => setVariant('button')}
            onMouseLeave={() => setVariant('default')}
            className="hidden md:flex items-center gap-2 scale-90 bg-white text-black border-none"
          >
            CONTATO <ArrowUpRight size={16} />
          </MagneticButton>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu}
            onMouseEnter={() => setVariant('link')}
            onMouseLeave={() => setVariant('default')}
            className="md:hidden p-2 text-white"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[45] bg-[#050505] flex flex-col justify-center px-12 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-black tracking-tighter"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <div className="absolute bottom-12 left-12 flex gap-8">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 font-bold text-xs tracking-widest">LINKEDIN</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
