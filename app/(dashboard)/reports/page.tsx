import { Metadata } from 'next';
import { reports } from '@/lib/demo-data';

export const metadata: Metadata = { title: 'Reports - AstroKalki' };

export default function ReportsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Reports</h1>
        <p className="text-slate-600">Design reusable analytics pipelines with scheduling and exports.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => (
          <article key={report.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800">{report.name}</h2>
            <p className="mt-2 text-sm text-slate-600">Cron: {report.schedule_cron}</p>
            <p className="mt-1 text-xs text-slate-400">Last run {report.last_run_at}</p>
            <button className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              Run now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
