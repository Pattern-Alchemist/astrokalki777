const domains = [
  { hostname: 'celestial.astrokalki.com', verified: true },
  { hostname: 'astro-customer.com', verified: false }
];

export default function DomainSettingsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Domains</h1>
        <p className="text-slate-600">Connect custom domains and verify DNS records.</p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-600">Domain</th>
              <th className="px-4 py-3 font-semibold text-slate-600">Verified</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {domains.map((domain) => (
              <tr key={domain.hostname}>
                <td className="px-4 py-3 text-slate-700">{domain.hostname}</td>
                <td className="px-4 py-3 text-slate-700">{domain.verified ? 'Yes' : 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
          Add domain
        </button>
      </div>
    </section>
  );
}
