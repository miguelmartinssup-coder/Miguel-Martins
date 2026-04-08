import { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Layout
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Cursor from './components/layout/Cursor';

// Canvas
import LenisScroll from './components/canvas/LenisScroll';
import ThreeBackground from './components/canvas/ThreeBackground';
import VideoBackground from './components/canvas/VideoBackground';

// UI
import Loader from './components/ui/Loader';

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
      <ThreeBackground />
      <Cursor />
      
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Navigation />

            <div className="relative">
              <VideoBackground 
                src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-smoke-on-a-black-background-27350-large.mp4"
                poster="https://picsum.photos/seed/bg/1920/1080?blur=10"
              />
              <Hero />
            </div>

            <Metrics />

            <Suspense fallback={<div className="h-screen bg-zinc-950" />}>
              <Projects />
              <Skills />
              <About />
              <Contact />
            </Suspense>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
