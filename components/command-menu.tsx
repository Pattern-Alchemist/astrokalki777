'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';

const commands = [
  { id: 'dashboard', label: 'Open Dashboard', href: '/(dashboard)' },
  { id: 'readings', label: 'Go to Readings', href: '/(dashboard)/readings' },
  { id: 'reports', label: 'Go to Reports', href: '/(dashboard)/reports' },
  { id: 'teams', label: 'Manage Teams', href: '/(dashboard)/teams' },
  { id: 'billing', label: 'Open Billing', href: '/(dashboard)/billing' },
  { id: 'notifications', label: 'Notifications Center', href: '/(dashboard)/notifications' },
  { id: 'api', label: 'API Keys', href: '/(dashboard)/settings/api-keys' }
];

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/40 p-4">
      <Command className="w-full max-w-xl rounded-xl bg-white shadow-2xl">
        <Command.Input autoFocus placeholder="Type a command or search" className="w-full border-b p-4" />
        <Command.List className="max-h-64 overflow-y-auto">
          <Command.Empty className="p-4 text-sm text-slate-500">No results found.</Command.Empty>
          <Command.Group heading="Navigation">
            {commands.map((item) => (
              <Command.Item
                key={item.id}
                onSelect={() => {
                  router.push(item.href);
                  setOpen(false);
                }}
                className="cursor-pointer px-4 py-3 text-sm text-slate-700 aria-selected:bg-emerald-100"
              >
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
