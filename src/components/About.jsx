import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.09),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(128,0,32,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          Born Beyond Earth.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-3xl text-white/80 text-lg"
        >
          UFO Clothing™ fuses cosmic energy with cultural identity — crafted for creators who wear confidence.
        </motion.p>
      </div>
    </section>
  );
}
