import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Services />

        {/* Final CTA Section */}
        <section id="contact" className="relative overflow-hidden bg-white text-black">
          <div className="absolute inset-0 -z-0 opacity-[0.06]" aria-hidden>
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Give Your Footwear the Attention It Deserves.</h2>
                <p className="mt-4 text-zinc-600 max-w-prose">
                  Book a pickup or drop by our studio. We’ll handle the rest with care, precision, and an urban standard of clean.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    Schedule Your Pickup
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-100 transition-colors"
                  >
                    View Services
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=&sat=-100&grayscale"
                  alt="Craftsmanship in action"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-black text-zinc-400">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-zinc-100 text-black flex items-center justify-center font-black">MB</div>
            <span className="text-sm">Mr. Bob's Shoes & Care</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Mr. Bob's. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
