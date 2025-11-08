'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto max-w-6xl rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <SwaggerUI url="/developer/openapi.json" docExpansion="list" />
      </div>
    </main>
  );
}
