const sessions = [
  { device: 'Chrome on Mac', ip: '103.42.11.9', lastSeen: '2 hours ago' },
  { device: 'Safari on iPhone', ip: '103.42.11.9', lastSeen: 'yesterday' }
];

export default function SecuritySettingsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Security</h1>
        <p className="text-slate-600">Manage 2FA, sessions, and audit trails.</p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Two-factor authentication</h2>
        <p className="mt-2 text-sm text-slate-600">TOTP-based 2FA coming soon. Toggle is stubbed for demo.</p>
        <button className="mt-4 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
          Enable TOTP
        </button>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Active sessions</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {sessions.map((session) => (
            <li key={session.device} className="flex items-center justify-between">
              <span>
                {session.device} • {session.ip}
              </span>
              <span className="text-xs text-slate-400">{session.lastSeen}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
