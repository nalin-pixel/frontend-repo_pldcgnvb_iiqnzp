import { motion } from 'framer-motion';

const products = [
  {
    title: 'Nebula Hoodie',
    img: 'https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1820&auto=format&fit=crop',
  },
  {
    title: 'Quantum Tee',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1820&auto=format&fit=crop',
  },
  {
    title: 'Orbit Jacket',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1820&auto=format&fit=crop',
  },
  {
    title: 'Lunar Cap',
    img: 'https://images.unsplash.com/photo-1520975934976-72c3e24fd1f4?q=80&w=1820&auto=format&fit=crop',
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-4xl">Drop 001</h3>
          <p className="text-white/60">Hover to preview</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <span className="text-sm font-medium tracking-wide">{p.title}</span>
                <span className="rounded-full bg-[#d4af37]/20 px-3 py-1 text-xs text-[#d4af37] backdrop-blur">Drop 001</span>
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 via-transparent to-[#800020]/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
