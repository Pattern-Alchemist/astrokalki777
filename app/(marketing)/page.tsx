import Link from 'next/link';

export default function MarketingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="rounded-2xl bg-slate-900 p-12 text-white shadow-lg">
        <h1 className="text-5xl font-bold">AstroKalki</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Multi-tenant SaaS for modern astrologers. Seamlessly manage readings, collaborate with your
          team, and monetize reports with integrated PayPal and UPI payments.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/pricing" className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-900">
            Explore Pricing
          </Link>
          <Link href="/(dashboard)" className="rounded-lg border border-slate-400 px-6 py-3 font-semibold">
            View Dashboard Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
