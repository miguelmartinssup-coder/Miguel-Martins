import { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CursorProvider } from './context/CursorContext';

// Layout
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Cursor from './components/layout/Cursor';

// Canvas
import LenisScroll from './components/canvas/LenisScroll';
const ThreeBackground = lazy(() => import('./components/canvas/ThreeBackground'));
import VideoBackground from './components/canvas/VideoBackground';

// UI
import Loader from './components/ui/Loader';
import Marquee from './components/ui/Marquee';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

// Sections
import Hero from './components/sections/Hero';
import Metrics from './components/sections/Metrics';
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const About = lazy(() => import('./components/sections/About'));
const Contact = lazy(() => import('./components/sections/Contact'));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <CursorProvider>
      <main className="relative min-h-screen">
        <a 
          href="#work" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-black focus:px-4 focus:py-2"
        >
          Pular para o conteúdo principal
        </a>

        <AnimatePresence mode="wait">
          {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        <LenisScroll />
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
        <Cursor />
        
        <AnimatePresence>
          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <Navigation />

              <div className="relative">
                <VideoBackground 
                  src="/videos/hero-bg.mp4"
                  poster="/videos/hero-poster.webp"
                />
                <Hero />
              </div>

              <Metrics />
              <Marquee />

              <ErrorBoundary>
                <Suspense fallback={<div className="h-screen bg-[#050505]" />}>
                  <Projects />
                  <Skills />
                  <About />
                  <Contact />
                </Suspense>
              </ErrorBoundary>

              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </CursorProvider>
  );
}
