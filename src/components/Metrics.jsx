import React from 'react';
import { BarChart3, Timer, Repeat, Frown } from 'lucide-react';

const stats = [
  {
    icon: <Repeat className="h-5 w-5 text-pink-300" />,
    label: 'Repetitive tasks per employee/week',
    before: '120+',
    after: '20-',
    delta: '-83%'
  },
  {
    icon: <Timer className="h-5 w-5 text-blue-300" />,
    label: 'Average turnaround time',
    before: '48h',
    after: '2h',
    delta: '-95%'
  },
  {
    icon: <Frown className="h-5 w-5 text-violet-300" />,
    label: 'Error rate in manual ops',
    before: '7.2%',
    after: '0.6%',
    delta: '-92%'
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-emerald-300" />,
    label: 'Throughput per agent',
    before: '1x',
    after: '10x',
    delta: '+10x'
  }
];

const Metrics = () => {
  return (
    <section id="metrics" className="relative bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),rgba(17,24,39,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">From repetitive and fragile—to autonomous and precise</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          We audit your processes, instrument data, and deploy agent workflows that reduce busywork and increase reliability.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-sm text-white/80">
                {s.icon}
                <span>{s.label}</span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/50">Before</div>
                  <div className="text-2xl font-semibold">{s.before}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wide text-white/50">After</div>
                  <div className="text-2xl font-semibold">{s.after}</div>
                </div>
              </div>
              <div className="mt-3 text-sm font-medium text-emerald-300">Impact: {s.delta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
