const channels = [
  { name: 'Email', description: 'Transactional and digest emails', enabled: true },
  { name: 'Web Push', description: 'Browser push notifications', enabled: false },
  { name: 'SMS', description: 'Twilio-powered alerts', enabled: false }
];

export default function NotificationSettingsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Notification Preferences</h1>
        <p className="text-slate-600">Select your preferred channel per event type.</p>
      </header>
      <div className="space-y-4">
        {channels.map((channel) => (
          <div key={channel.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">{channel.name}</h2>
                <p className="text-sm text-slate-600">{channel.description}</p>
              </div>
              <span className="text-xs uppercase text-slate-400">
                {channel.enabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
