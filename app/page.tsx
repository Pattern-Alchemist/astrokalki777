import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight">
          AstroKalki empowers astrologers with collaborative analytics.
        </h1>
        <p className="text-lg text-slate-200">
          Real-time insights, powerful automation, and multi-tenant workspaces ready for scale.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/(dashboard)"
            className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Launch Demo
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-100 hover:bg-slate-800"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
