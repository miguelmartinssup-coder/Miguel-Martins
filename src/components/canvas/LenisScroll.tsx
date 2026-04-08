import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../../lib/gsap';

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Integração correta: lenis alimenta o ticker do GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Desabilita o lag smoothing do GSAP (o Lenis já cuida disso)
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after fonts are ready
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return null;
}
