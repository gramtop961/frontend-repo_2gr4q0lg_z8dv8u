import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 animate-pulse">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-tight">MyPortfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#projects" className="hover:text-white/90 text-white/70 transition">Projects</a>
            <a href="#about" className="hover:text-white/90 text-white/70 transition">About</a>
            <a href="#contact" className="hover:text-white/90 text-white/70 transition">Contact</a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-3 py-2 rounded-md font-medium hover:bg-white/90 transition">
                <Mail className="w-4 h-4" /> Hire me
              </a>
            </div>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            <a onClick={() => setOpen(false)} href="#projects" className="block py-2 text-white/80">Projects</a>
            <a onClick={() => setOpen(false)} href="#about" className="block py-2 text-white/80">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block py-2 text-white/80">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
