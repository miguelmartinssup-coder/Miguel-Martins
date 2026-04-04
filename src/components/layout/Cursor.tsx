import { motion } from 'motion/react';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function Cursor() {
  const { x, y } = useMousePosition();
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: x - 2, y: y - 2 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{ x: x - 20, y: y - 20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 0.8 }}
      />
    </>
  );
}
