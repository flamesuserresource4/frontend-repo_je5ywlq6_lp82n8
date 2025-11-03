import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black text-white">
      {/* 3D Sneaker Background (interactive) */}
      <div className="absolute inset-0">
        <Spline
          // Sneaker scene inspired by Nike-like hero interactions
          scene="https://prod.spline.design/0qkRdtqvOB0fOkH0/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradients for contrast; they don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200/90 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Interactive 3D — drag to rotate
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Precision Care for Iconic Kicks
          </h1>
          <p className="mt-6 text-zinc-200/90 md:text-lg max-w-xl">
            Premium cleaning, restoration, and protection crafted for the sneakers you actually wear. Urban-ready, detail-obsessed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
            >
              Book Your Clean
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-black/40 px-6 py-3 text-sm font-semibold text-white hover:bg-black/70 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
