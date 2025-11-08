import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Pricing - AstroKalki' };

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    features: ['Up to 3 team members', 'Realtime dashboard', 'Email support']
  },
  {
    name: 'Growth',
    price: '$79',
    features: ['Everything in Starter', 'Workflow automation', 'Scheduled reports']
  },
  {
    name: 'Scale',
    price: 'Contact us',
    features: ['Unlimited tenants', 'Dedicated success manager', 'Custom SLA']
  }
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="mt-2 text-slate-600">
        Choose a plan that scales with your astrology practice. All plans include secure multi-tenant
        workspaces, Supabase hosting, and PayPal / UPI payments.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{tier.name}</h2>
            <p className="mt-4 text-3xl font-bold text-emerald-500">{tier.price}</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              {tier.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
