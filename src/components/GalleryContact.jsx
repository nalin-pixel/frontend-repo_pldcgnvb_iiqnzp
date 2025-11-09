import { motion } from 'framer-motion';
import { Instagram, Youtube, MessageCircle, Music2 } from 'lucide-react';

export default function GalleryContact() {
  const gallery = [
    'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1820&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1820&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975960476-7fe3b7a71f04?q=80&w=1820&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548883354-7622d1d31f32?q=80&w=1820&auto=format&fit=crop',
  ];

  return (
    <section id="lookbook" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-4xl">The Fusion — Tradition Meets Orbit.</h3>

        {/* Masonry-ish grid */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mb-4 overflow-hidden rounded-xl border border-white/10"
            >
              <img src={src} alt="Lookbook" className="w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
            </motion.div>
          ))}
        </div>

        {/* Contact / Join the Drop */}
        <div id="contact" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-xl font-semibold sm:text-2xl">Be the first to know our next arrival.</h4>
              <p className="mt-2 text-white/70">Join the drop list — we send only what matters.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-lg gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/10 bg-black/60 px-5 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-[#d4af37]/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                Join
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-white/80">
            <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              <Instagram size={18} /> <span>Instagram</span>
            </a>
            <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              <Youtube size={18} /> <span>YouTube</span>
            </a>
            <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              <MessageCircle size={18} /> <span>Threads</span>
            </a>
            <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              <Music2 size={18} /> <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-white/70">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#800020]" />
              <span className="font-semibold">UFO Clothing™</span>
            </div>
            <p className="text-center text-sm">Wear the Unknown.</p>
            <p className="text-xs">© 2025 UFO Clothing™. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
