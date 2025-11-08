import { Metadata } from 'next';
import { PayPalButton } from '@/components/payments/paypal-button';
import { UpiOptions } from '@/components/payments/upi-options';

export const metadata: Metadata = { title: 'Billing - AstroKalki' };

const invoices = [
  { id: 'inv-001', amount: 4900, currency: 'INR', status: 'paid', provider: 'PayPal' },
  { id: 'inv-002', amount: 12900, currency: 'INR', status: 'pending', provider: 'UPI' }
];

export default function BillingPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Billing</h1>
        <p className="text-slate-600">Usage-based credits with PayPal and UPI payment adapters.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Purchase Credits</h2>
          <p className="mt-2 text-sm text-slate-600">Buy credits via PayPal sandbox checkout.</p>
          <PayPalButton amount={49} currency="USD" />
          <div className="mt-6">
            <UpiOptions amount={1999} />
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Invoices</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {invoices.map((invoice) => (
              <li key={invoice.id} className="flex items-center justify-between">
                <span>
                  {invoice.id} • {invoice.provider}
                </span>
                <span className="font-semibold text-emerald-500">
                  {invoice.currency} {(invoice.amount / 100).toFixed(2)} - {invoice.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
