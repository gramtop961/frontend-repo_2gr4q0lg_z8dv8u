import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-24 bg-gradient-to-b from-zinc-950 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  I’m a front-end engineer focused on creating interactive, high-quality web experiences. My work blends motion, 3D, and accessibility to deliver engaging interfaces that feel alive and perform beautifully on any device.
                </p>
                <p className="mt-4 text-white/70">
                  When I’m not building, I explore visual design systems, experiment with generative art, and contribute to open-source.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-600/20 via-fuchsia-500/10 to-amber-400/10 blur-2xl" aria-hidden />
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <ul className="grid grid-cols-2 gap-4 text-sm">
                    <li className="rounded-lg bg-white/5 p-4">
                      <p className="text-white/60">Expertise</p>
                      <p className="mt-1 font-semibold">React, Motion, 3D</p>
                    </li>
                    <li className="rounded-lg bg-white/5 p-4">
                      <p className="text-white/60">Tooling</p>
                      <p className="mt-1 font-semibold">Vite, Tailwind, Radix</p>
                    </li>
                    <li className="rounded-lg bg-white/5 p-4">
                      <p className="text-white/60">Backend</p>
                      <p className="mt-1 font-semibold">FastAPI, MongoDB</p>
                    </li>
                    <li className="rounded-lg bg-white/5 p-4">
                      <p className="text-white/60">Focus</p>
                      <p className="mt-1 font-semibold">Performance & UX</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
