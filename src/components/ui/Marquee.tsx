import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const WORDS = [
  "AUTOMAÇÃO FINANCEIRA",
  "PROCESSOS EFICIENTES",
  "REACT",
  "SUPABASE",
  "ANÁLISE DE DADOS",
  "SISTEMAS PROPRIETÁRIOS",
];

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(1000);

  useEffect(() => {
    if (marqueeRef.current) {
      // O conteúdo é triplicado, então 1/3 do total = 1 repetição
      setContentWidth(marqueeRef.current.scrollWidth / 3);
    }
  }, []);

  return (
    <div className="py-12 md:py-24 border-y border-zinc-800/50 overflow-hidden bg-zinc-950">
      <div className="flex whitespace-nowrap">
        <motion.div
          ref={marqueeRef}
          animate={{ x: [0, -contentWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-12 md:gap-32 items-center"
        >
          {[...WORDS, ...WORDS, ...WORDS].map((word, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-32">
              <span className="text-4xl md:text-8xl font-black tracking-tighter text-transparent stroke-zinc-900 stroke-1 hover:text-zinc-800 transition-all duration-700 cursor-default uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}>
                {word}
              </span>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-zinc-900 rounded-full opacity-20" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
