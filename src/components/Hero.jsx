import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for depth - non-interactive so Spline remains usable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          <span className="[text-shadow:_0_2px_18px_rgba(255,255,255,0.25)]">UFO CLOTHING™</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: 'easeOut' }}
          className="mt-3 max-w-2xl text-base text-white/80 sm:mt-5 sm:text-xl"
        >
          From Space to Your Closet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
          className="mt-8"
        >
          <a
            href="#collection"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7f1d1d] via-[#8b0000] to-[#5a0010] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
          >
            <span className="relative">
              Explore Collection
              <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="h-2 w-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
