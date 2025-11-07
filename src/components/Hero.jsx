import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft radial gradient to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center sm:py-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-violet-300" />
          AI Agents Consulting • Future of Ops
        </span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Automate repetitive work with intelligent agents
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          Your team spends hours each week on copy-paste tasks, manual triage, and status updates. We design AI agent systems that eliminate the busywork and scale precision.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="group inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Book a discovery call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Explore solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
