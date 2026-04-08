import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { id: 'work', label: 'PROJETOS' },
  { id: 'about', label: 'SOBRE' },
  { id: 'contact', label: 'DIAGNÓSTICO' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map(l => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="/" 
            className="text-lg font-black tracking-tighter z-50"
          >
            MIGUEL <span className="text-zinc-500">MARTINS</span>
          </motion.a>
          
          {/* Desktop Nav - Floating Glass Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-1 p-1 rounded-full glass"
          >
            {NAV_LINKS.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative ${
                  activeSection === link.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a 
              href="#contact"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-[10px] font-bold tracking-widest hover:bg-zinc-200 transition-colors"
            >
              DIAGNÓSTICO GRATUITO <ArrowUpRight size={14} />
            </a>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full glass text-white z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[45] bg-zinc-950/80 md:hidden flex flex-col justify-center px-12"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-black tracking-tighter hover:text-zinc-500 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
