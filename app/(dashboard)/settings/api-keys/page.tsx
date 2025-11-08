const apiKeys = [
  { name: 'Production SDK', lastUsed: '3 days ago', scopes: ['read:readings', 'write:reports'] }
];

export default function ApiKeysSettingsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">API Keys</h1>
        <p className="text-slate-600">Manage hashed API keys with scoped permissions.</p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-600">Name</th>
              <th className="px-4 py-3 font-semibold text-slate-600">Scopes</th>
              <th className="px-4 py-3 font-semibold text-slate-600">Last used</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {apiKeys.map((key) => (
              <tr key={key.name}>
                <td className="px-4 py-3 text-slate-700">{key.name}</td>
                <td className="px-4 py-3 text-slate-700">{key.scopes.join(', ')}</td>
                <td className="px-4 py-3 text-slate-700">{key.lastUsed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
          Generate key
        </button>
      </div>
    </section>
  );
}
