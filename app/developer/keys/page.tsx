const snippets = {
  js: `import { AstroKalki } from '@astrokalki/sdk';

const client = new AstroKalki({ apiKey: process.env.ASTROKALKI_KEY! });
const readings = await client.readings.list();
console.log(readings);`,
  python: `from astrokalki import AstroKalki

client = AstroKalki(api_key=os.environ["ASTROKALKI_KEY"])
readings = client.readings.list()
print(readings)`
};

export default function DeveloperKeysPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Developer Keys & SDKs</h1>
      <p className="mt-2 text-slate-600">
        Generate scoped API keys and bootstrap integrations using our TypeScript and Python SDKs.
      </p>
      <section className="mt-8 space-y-6">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">TypeScript SDK</h2>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-emerald-200">
            <code>{snippets.js}</code>
          </pre>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">Python SDK</h2>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-emerald-200">
            <code>{snippets.python}</code>
          </pre>
        </article>
      </section>
    </main>
  );
}
