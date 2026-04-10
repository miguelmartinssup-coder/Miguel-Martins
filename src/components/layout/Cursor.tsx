import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { useCursor } from '../../context/CursorContext';

export default function Cursor() {
  const { isHovering, cursorLabel } = useCursor();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Dot segue imediatamente
      gsap.set(dotRef.current, { x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Ring com lag elástico (lerp via gsap ticker)
    const xSet = gsap.quickSetter(ringRef.current, "x", "px");
    const ySet = gsap.quickSetter(ringRef.current, "y", "px");

    let ringPos = { x: 0, y: 0 };

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
      ringPos.x += (mouse.current.x - ringPos.x) * dt;
      ringPos.y += (mouse.current.y - ringPos.y) * dt;
      xSet(ringPos.x);
      ySet(ringPos.y);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;

    // Animação de escala do ring ao dar hover
    gsap.to(ringRef.current, {
      scale: isHovering ? 2.5 : 1,
      backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
      duration: 0.3,
      ease: 'power3.out'
    });
    gsap.to(dotRef.current, {
      opacity: isHovering ? 0 : 1,
      duration: 0.2
    });
  }, [isHovering, isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hidden md:flex"
      >
        {isHovering && cursorLabel && (
          <span className="text-[8px] font-bold text-black uppercase tracking-tighter whitespace-nowrap scale-[0.4]">
            {cursorLabel}
          </span>
        )}
      </div>
    </>
  );
}
