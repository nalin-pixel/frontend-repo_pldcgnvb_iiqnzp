import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Vision from './components/Vision';
import GalleryContact from './components/GalleryContact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
            <span className="text-sm font-semibold tracking-wide">UFO CLOTHING™</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#collection" className="hover:text-white">Collection</a>
            <a href="#lookbook" className="hover:text-white">Lookbook</a>
            <a href="#contact" className="hover:text-white">Join</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Collection />
        <Vision />
        <GalleryContact />
      </main>
    </div>
  );
}

export default App;
