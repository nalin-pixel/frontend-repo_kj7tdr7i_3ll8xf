import React from 'react';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Solutions from './components/Solutions';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Hero />
      <Metrics />
      <Solutions />
      <CTA />
      <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Flux Agents Consulting. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
