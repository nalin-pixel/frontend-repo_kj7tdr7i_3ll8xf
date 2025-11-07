import React from 'react';
import { Workflow, MessageSquare, Database, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    title: 'Ops Automation Agents',
    description:
      'Triage requests, update CRMs, route tickets, and generate follow-ups with human-in-the-loop approvals.',
    icon: <Workflow className="h-6 w-6 text-violet-300" />,
  },
  {
    title: 'Voice + Chat Concierge',
    description:
      'Natural voice/chat agents for intake, qualification, scheduling, and status updates across channels.',
    icon: <MessageSquare className="h-6 w-6 text-blue-300" />,
  },
  {
    title: 'Data & Systems Integration',
    description:
      'Connect ERPs, CRMs, email, and databases. Build reliable automations with observability and rollbacks.',
    icon: <Database className="h-6 w-6 text-emerald-300" />,
  },
  {
    title: 'Governance & Safety',
    description:
      'Guardrails, red-teaming, and policy enforcement so your agents are compliant and auditable.',
    icon: <ShieldCheck className="h-6 w-6 text-amber-300" />,
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Practical systems, real outcomes</h2>
          <p className="mt-3 text-white/70">
            We build and operate agent workflows tailored to your stack—measurable, safe, and observable.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
