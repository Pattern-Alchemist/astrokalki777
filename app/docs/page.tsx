import Link from 'next/link';

export default function DocsLandingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Developer Docs</h1>
      <p className="mt-2 text-slate-600">
        Integrate AstroKalki into your astrology applications using the OpenAPI spec, SDKs, and webhook guides.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link href="/developer/docs" className="rounded-lg border border-slate-200 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Swagger UI</h2>
          <p className="mt-2 text-slate-600">Browse the REST API powered by Supabase with JWT secured multi-tenancy.</p>
        </Link>
        <Link href="/developer/keys" className="rounded-lg border border-slate-200 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">SDKs & Keys</h2>
          <p className="mt-2 text-slate-600">Generate API keys, install the JS/Python SDKs, and trigger webhook events.</p>
        </Link>
      </div>
    </main>
  );
}
