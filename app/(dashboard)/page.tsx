import { Metadata } from 'next';
import { readings } from '@/lib/demo-data';
import { OverviewWidgets } from '@/components/overview-widgets';

export const metadata: Metadata = { title: 'Dashboard - AstroKalki' };

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Overview</h1>
      <OverviewWidgets />
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800">Recent Readings</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {readings.slice(0, 5).map((reading) => (
            <li key={reading.id} className="flex items-center justify-between">
              <span>{reading.title}</span>
              <span className="text-xs uppercase text-emerald-500">{reading.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
