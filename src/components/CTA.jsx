import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-8 shadow-2xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <PhoneCall className="h-3.5 w-3.5 text-emerald-300" />
                Free 30‑minute discovery call
              </div>
              <h3 className="mt-3 text-2xl font-semibold">Let’s map your automation opportunity</h3>
              <p className="mt-1 text-white/70">
                Share a process that feels repetitive or error‑prone. We’ll estimate impact and outline an agent approach.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-md"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="work@email.com"
                  className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-xs text-white/50">No spam. We reply within one business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
