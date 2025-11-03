import React from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#difference', label: 'Services' },
  { href: '#services', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-black/40 text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-400 text-black flex items-center justify-center font-black tracking-tight">
            MB
          </div>
          <div className="leading-tight">
            <p className="font-extrabold uppercase tracking-widest">Mr. Bob's</p>
            <p className="text-xs text-zinc-300">Shoes & Care</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-200 hover:text-white transition-colors relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 hover:after:scale-x-100 after:origin-left after:bg-zinc-200 after:transition-transform"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-500/60 bg-black/30 px-4 py-2 text-sm font-semibold text-white hover:border-zinc-300 hover:bg-zinc-900 transition-colors"
        >
          Book Your Clean
        </a>
      </div>
    </header>
  );
}
