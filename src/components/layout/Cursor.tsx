import { motion, AnimatePresence } from 'motion/react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useCursor } from '../../context/CursorContext';

export default function Cursor() {
  const { x, y } = useMousePosition();
  const { variant } = useCursor();
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  if (isTouch) return null;

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'transparent',
    },
    link: {
      scale: 1.2,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    project: {
      scale: 2.5,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    button: {
      scale: 0.5,
      opacity: 0.5,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999]"
        animate={{ x: x - 2, y: y - 2 }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
        animate={{ 
          x: x - 16, 
          y: y - 16,
          ...variants[variant]
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 150, mass: 0.8 }}
      >
        <AnimatePresence>
          {variant === 'project' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[4px] font-mono uppercase tracking-tighter text-white"
            >
              VER
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
