import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-zinc-950 text-white">
      <div className="absolute inset-x-0 -top-24 pointer-events-none" aria-hidden>
        <div className="mx-auto h-48 max-w-5xl rounded-full bg-gradient-to-r from-indigo-600/20 via-fuchsia-500/10 to-amber-500/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something great</h2>
          <p className="mt-3 text-white/70">Have a project in mind or just want to say hi? I’m open to freelance and collaboration opportunities.</p>

          <div className="mt-8 grid gap-4 sm:flex sm:items-center">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
              <Mail className="w-4 h-4" />
              Email me
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.02] px-5 py-3 hover:bg-white/[0.06] transition">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.02] px-5 py-3 hover:bg-white/[0.06] transition">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} MyPortfolio. Crafted with care — animations, 3D, and love for details.</p>
        </motion.div>
      </div>
    </section>
  );
}
