import React from 'react';

const services = [
  {
    name: 'Deep Clean',
    desc: 'Comprehensive cleanse that resets your sneakers to their sharpest form.',
    img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=&sat=-100&grayscale',
  },
  {
    name: 'Color Restore',
    desc: 'Targeted repainting and color correction for faded leather and midsoles.',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=&sat=-100&grayscale',
  },
  {
    name: 'Material Care',
    desc: 'Suede, nubuck, knit—care protocols matched to every fabric and finish.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=&sat=-100&grayscale',
  },
  {
    name: 'Sole Revive',
    desc: 'De-yellowing and sole refresh to bring back that crisp, new-out-the-box look.',
    img: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=&sat=-100&grayscale',
  },
  {
    name: 'Detail Finish',
    desc: 'Edge burnishing, lace replacements, and precision touch-ups.',
    img: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=&sat=-100&grayscale',
  },
  {
    name: 'Protection Coat',
    desc: 'Hydrophobic and anti-stain coatings to extend longevity.',
    img: 'https://images.unsplash.com/photo-1520975682031-d5ee6773725b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=&sat=-100&grayscale',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Tailored Care For Every Step.</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl">
              A curated set of services designed to handle the grit of the city and the nuance of premium materials.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full border border-zinc-600 bg-black/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
          >
            Explore All Services
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.name} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={s.img} alt={s.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-zinc-600 bg-black/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
