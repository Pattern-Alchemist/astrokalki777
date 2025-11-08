import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Changelog - AstroKalki' };

const releases = [
  {
    version: '2024.05.01',
    highlights: ['Initial SaaS release', 'Dashboard widgets', 'PayPal + UPI billing']
  },
  {
    version: '2024.05.15',
    highlights: ['Realtime collaboration', 'Command palette shortcuts', 'OpenAPI + SDKs']
  }
];

export default function ChangelogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Changelog</h1>
      <p className="mt-2 text-slate-600">Follow the journey as AstroKalki evolves.</p>
      <div className="mt-8 space-y-6">
        {releases.map((release) => (
          <article key={release.version} className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold">Release {release.version}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {release.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
