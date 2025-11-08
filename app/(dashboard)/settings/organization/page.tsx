export default function OrganizationSettingsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Organization</h1>
        <p className="text-slate-600">Update your organization name, locale, and currency defaults.</p>
      </header>
      <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-slate-700" htmlFor="org-name">
          Organization name
        </label>
        <input
          id="org-name"
          type="text"
          defaultValue="Celestial Insights"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="locale">
          Default locale
        </label>
        <select
          id="locale"
          defaultValue="hi"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
        <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="currency">
          Default currency
        </label>
        <select
          id="currency"
          defaultValue="INR"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
        <button className="mt-6 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
          Save organization
        </button>
      </form>
    </section>
  );
}
