import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealOptions {
  type?: 'lines' | 'words' | 'chars';
  delay?: number;
  stagger?: number;
  triggerStart?: string;
  once?: boolean;
}

export function useSplitTextReveal(options: SplitTextRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const {
    type = 'lines',
    delay = 0,
    stagger = 0.08,
    triggerStart = 'top 85%',
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Importar SplitText dinamicamente (GSAP Club, mas vamos simular com CSS)
    // Técnica alternativa sem SplitText Club: wrap manual por linha
    const text = el.textContent || '';
    const words = text.split(' ');
    
    // Recursive function to split text nodes while preserving element structure
    const splitNode = (node: Node, parent: HTMLElement) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        const words = text.split(/(\s+)/);
        
        words.forEach(word => {
          if (word.trim() === '') {
            parent.appendChild(document.createTextNode(word));
          } else {
            const wrap = document.createElement('span');
            wrap.className = 'word-wrap';
            wrap.style.display = 'inline-block';
            wrap.style.overflow = 'hidden';
            wrap.style.verticalAlign = 'bottom';
            
            const inner = document.createElement('span');
            inner.className = 'word-inner';
            inner.style.display = 'inline-block';
            inner.style.transform = 'translateY(110%)';
            inner.textContent = word;
            
            wrap.appendChild(inner);
            parent.appendChild(wrap);
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const clone = node.cloneNode(false) as HTMLElement;
        parent.appendChild(clone);
        Array.from(node.childNodes).forEach(child => splitNode(child, clone));
      }
    };

    const originalNodes = Array.from(el.childNodes);
    el.innerHTML = '';
    originalNodes.forEach(node => splitNode(node, el));

    const inners = el.querySelectorAll('.word-inner');
    
    const ctx = gsap.context(() => {
      gsap.to(inners, {
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger,
        delay,
        scrollTrigger: el !== document.querySelector('h1') ? {
          trigger: el,
          start: triggerStart,
          once,
        } : undefined,
      });
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, triggerStart, once]);

  return ref;
}
