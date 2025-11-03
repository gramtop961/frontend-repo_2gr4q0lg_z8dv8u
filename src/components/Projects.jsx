import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Immersive 3D Landing',
    description: 'A responsive landing page with Spline-driven hero and micro-interactions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Data-rich dashboard with streaming charts and smooth transitions.',
    tags: ['FastAPI', 'WebSockets', 'Charts'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Accessible UI kit with tokens, themes, and animated components.',
    tags: ['Design Tokens', 'Tailwind', 'Radix'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-fuchsia-500/10 to-amber-500/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-white/70 max-w-2xl">A selection of recent work exploring 3D interactions, motion, and robust web apps.</p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 hover:bg-white/[0.06] transition"
            >
              <div className="flex items-start justify-between">
                <div className="p-2 rounded-lg bg-white/10">
                  <Code2 className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/90 transition" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 blur-2xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
