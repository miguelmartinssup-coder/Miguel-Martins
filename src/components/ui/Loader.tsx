import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Checar se a página já carregou antes do componente montar
    if (document.readyState === 'complete') {
      setProgress(100);
      setTimeout(onComplete, 600);
      return;
    }

    let start: number | null = null;
    const DURATION = 2200; // ms mais rápido e honesto

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const eased = 1 - Math.pow(1 - Math.min(elapsed / DURATION, 1), 3); // ease-out-cubic
      setProgress(Math.floor(eased * 90)); // vai até 90% via animação
      if (elapsed < DURATION) requestAnimationFrame(tick);
    };

    const rafId = requestAnimationFrame(tick);

    const handleLoad = () => {
      setProgress(100);
      setTimeout(onComplete, 400);
    };

    window.addEventListener('load', handleLoad);
    const fallback = setTimeout(handleLoad, 3500);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallback);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label={`Carregando: ${progress}%`}
    >
      <div className="relative overflow-hidden h-20 w-full flex justify-center">
        <motion.span
          className="text-6xl md:text-8xl font-black tracking-tighter text-white"
        >
          {progress}%
        </motion.span>
      </div>
      <div className="h-[1px] bg-zinc-800 w-48 mt-4 relative overflow-hidden">
        <motion.div 
          animate={{ width: `${progress}%` }}
          className="absolute inset-0 bg-white"
        />
      </div>
    </motion.div>
  );
}
