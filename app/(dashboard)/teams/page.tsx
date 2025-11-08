const members = [
  { name: 'Asha Patel', role: 'Owner' },
  { name: 'Rahul Singh', role: 'Admin' },
  { name: 'Mira Kapoor', role: 'Analyst' }
];

export default function TeamsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Teams</h1>
        <p className="text-slate-600">Manage organization members, invitations, and roles.</p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-600">Member</th>
              <th className="px-4 py-3 font-semibold text-slate-600">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {members.map((member) => (
              <tr key={member.name}>
                <td className="px-4 py-3 text-slate-700">{member.name}</td>
                <td className="px-4 py-3 text-slate-700">{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
          Invite Member
        </button>
      </div>
    </section>
  );
}
