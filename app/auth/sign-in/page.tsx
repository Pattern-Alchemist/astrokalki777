export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md rounded-2xl bg-slate-900/70 p-8 shadow-xl">
        <h1 className="text-3xl font-bold">Sign in to AstroKalki</h1>
        <p className="mt-2 text-sm text-slate-300">
          Demo login is disabled; continue as a guest to explore seeded data.
        </p>
        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
          />
          <button className="w-full rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
