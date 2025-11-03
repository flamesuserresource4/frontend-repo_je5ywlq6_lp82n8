import React from 'react';
import { Brush, FlaskConical, MapPin, Shield } from 'lucide-react';

const items = [
  {
    icon: Brush,
    title: 'Expert Craftsmanship',
    desc: 'Meticulous handwork from seasoned specialists. Every stitch, every brushstroke—purposeful.',
  },
  {
    icon: FlaskConical,
    title: 'Premium Formulations',
    desc: 'Lab-tested cleaning and care solutions balanced for performance and material safety.',
  },
  {
    icon: MapPin,
    title: 'Urban Convenience',
    desc: 'Pickup and return options tailored to your city routine. We meet you where you are.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    desc: 'A results-first promise. If it’s not better, it’s not done.',
  },
];

export default function Highlights() {
  return (
    <section id="difference" className="relative bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Art of Shoe Restoration.</h2>
          <p className="mt-4 text-zinc-600">
            More than just a clean—our process revives shape, color, and character with a modern urban edge.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 hover:bg-zinc-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
