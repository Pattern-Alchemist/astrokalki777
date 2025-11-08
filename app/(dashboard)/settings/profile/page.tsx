export default function ProfileSettingsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
        <p className="text-slate-600">Manage your account details and time zone preferences.</p>
      </header>
      <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-slate-700" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          type="text"
          defaultValue="Asha Patel"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          defaultValue="asha@celestial.insights"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <button className="mt-6 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
          Save changes
        </button>
      </form>
    </section>
  );
}
