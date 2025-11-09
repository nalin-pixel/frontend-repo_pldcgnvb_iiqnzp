import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          src="https://cdn.coverr.co/videos/coverr-stars-in-the-night-sky-1205/1080p.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-2xl leading-relaxed sm:text-4xl"
        >
          “We don’t make clothes. We make arrivals.”
        </motion.blockquote>
      </div>
    </section>
  );
}
