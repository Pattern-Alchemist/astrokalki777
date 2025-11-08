'use client';

import { useState } from 'react';

export default function BrandingSettingsPage() {
  const [primary, setPrimary] = useState('#10b981');

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Branding</h1>
        <p className="text-slate-600">Customize logos, colors, and typography per organization.</p>
      </header>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">Primary color</label>
        <input
          type="color"
          value={primary}
          onChange={(event) => setPrimary(event.target.value)}
          className="mt-2 h-12 w-20"
        />
        <div className="mt-6 rounded-lg border border-slate-200 p-4" style={{ backgroundColor: primary }}>
          <p className="text-sm font-semibold text-white">Live preview</p>
        </div>
      </div>
    </section>
  );
}
