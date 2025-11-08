const notifications = [
  {
    id: 'notif-1',
    title: 'Report ready',
    body: 'Weekly engagement report completed',
    category: 'reports'
  },
  {
    id: 'notif-2',
    title: 'New comment',
    body: 'Ananya mentioned you in Saturn Transit reading',
    category: 'collaboration'
  }
];

export default function NotificationsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
        <p className="text-slate-600">Unified multi-channel inbox with snooze and preferences.</p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">{notification.title}</h2>
                  <p className="text-sm text-slate-600">{notification.body}</p>
                </div>
                <span className="text-xs uppercase text-slate-400">{notification.category}</span>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="rounded-md border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                  Snooze 1h
                </button>
                <button className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                  Mark as read
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
