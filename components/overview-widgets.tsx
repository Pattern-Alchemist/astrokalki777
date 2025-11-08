'use client';

import { useMemo } from 'react';
import { readings, reports } from '@/lib/demo-data';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export function OverviewWidgets() {
  const chartData = useMemo(() => {
    const labels = readings.slice(0, 7).map((item) => new Date(item.created_at).toLocaleDateString());
    return {
      labels,
      datasets: [
        {
          label: 'Readings Created',
          data: readings.slice(0, 7).map((_, index) => 20 - index * 2),
          fill: true,
          borderColor: 'rgb(16, 185, 129)',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          tension: 0.35
        }
      ]
    };
  }, []);

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Activity Pulse</h2>
        <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Reports</h2>
        <p className="mt-4 text-sm text-slate-600">
          {reports.length} scheduled reports across tenants. Last run {reports[0]?.last_run_at}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {reports.map((report) => (
            <li key={report.id} className="flex items-center justify-between">
              <span>{report.name}</span>
              <span className="text-xs uppercase text-slate-400">{report.schedule_cron}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
