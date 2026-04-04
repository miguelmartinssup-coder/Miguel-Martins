import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressValue = 0;
    const MAX_WAIT = 4000;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const timeProgress = Math.min((elapsed / MAX_WAIT) * 100, 90);
      
      // Combine time progress with a bit of randomness to simulate loading
      progressValue = Math.max(progressValue, timeProgress);
      setProgress(Math.floor(progressValue));

      if (progressValue < 100) {
        requestAnimationFrame(updateProgress);
      }
    };

    const handleLoad = () => {
      setProgress(100);
      setTimeout(onComplete, 500);
    };

    window.addEventListener('load', handleLoad);
    const animationFrame = requestAnimationFrame(updateProgress);

    // Fallback
    const timer = setTimeout(handleLoad, MAX_WAIT);

    return () => {
      window.removeEventListener('load', handleLoad);
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div className="relative overflow-hidden h-20 w-full flex justify-center">
        <motion.span
          className="text-6xl md:text-8xl font-black tracking-tighter"
        >
          {progress}%
        </motion.span>
      </div>
      <div className="h-[1px] bg-white/20 w-48 mt-4 relative overflow-hidden">
        <motion.div 
          animate={{ width: `${progress}%` }}
          className="absolute inset-0 bg-white"
        />
      </div>
    </motion.div>
  );
}
