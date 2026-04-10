import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const WORDS = [
  "AUTOMAÇÃO DE PROCESSOS",
  "ENGENHARIA DE SISTEMAS",
  "EFICIÊNCIA OPERACIONAL",
  "ROI GARANTIDO",
  "PYTHON & NODE.JS",
  "DASHBOARDS REAL-TIME",
  "INTEGRAÇÃO DE APIs",
  "MÁQUINAS DIGITAIS",
  "ESCALABILIDADE",
  "ESTRUTURAÇÃO DE DADOS"
];

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(1000);

  useEffect(() => {
    if (marqueeRef.current) {
      setContentWidth(marqueeRef.current.scrollWidth / 3);
    }
  }, []);

  return (
    <div className="py-12 md:py-24 border-y border-zinc-900 overflow-hidden bg-zinc-950">
      <div className="flex whitespace-nowrap">
        <motion.div
          ref={marqueeRef}
          animate={{ x: [0, -contentWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-12 md:gap-32 items-center"
        >
          {[...WORDS, ...WORDS, ...WORDS].map((word, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-32">
              <span className="text-4xl md:text-8xl font-display font-black text-zinc-900 tracking-tighter hover:text-zinc-800 transition-all duration-700 cursor-default uppercase">
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
