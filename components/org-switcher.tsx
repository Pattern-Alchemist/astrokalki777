'use client';

import { useState } from 'react';
import { organizations } from '@/lib/demo-data';

export function OrgSwitcher() {
  const [activeOrg, setActiveOrg] = useState(organizations[0]);

  return (
    <div className="relative">
      <select
        aria-label="Switch organization"
        className="rounded-md border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
        value={activeOrg.id}
        onChange={(event) => {
          const org = organizations.find((item) => item.id === event.target.value);
          if (org) {
            setActiveOrg(org);
          }
        }}
      >
        {organizations.map((org) => (
          <option key={org.id} value={org.id}>
            {org.name}
          </option>
        ))}
      </select>
    </div>
  );
}
