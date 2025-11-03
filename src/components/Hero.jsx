import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle vignette and gradient overlays to enhance contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Revive Your Kicks. <span className="text-zinc-200">Renew Your Style.</span>
          </h1>
          <p className="mt-6 text-zinc-200/90 md:text-lg max-w-xl">
            Professional shoe care for the modern city dweller. Hand-finished craftsmanship, premium formulations, and an urban-first experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
            >
              Schedule Your Pickup
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-black/40 px-6 py-3 text-sm font-semibold text-white hover:bg-black/70 transition-colors"
            >
              Discover Our Craft
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
