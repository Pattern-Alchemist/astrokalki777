import { ReactNode } from 'react';
import Link from 'next/link';
import { OrgSwitcher } from '@/components/org-switcher';
import { CommandMenu } from '@/components/command-menu';

const navLinks = [
  { href: '/(dashboard)', label: 'Overview' },
  { href: '/(dashboard)/readings', label: 'Readings' },
  { href: '/(dashboard)/reports', label: 'Reports' },
  { href: '/(dashboard)/teams', label: 'Teams' },
  { href: '/(dashboard)/notifications', label: 'Notifications' },
  { href: '/(dashboard)/billing', label: 'Billing' },
  { href: '/(dashboard)/settings/profile', label: 'Settings' }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <CommandMenu />
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/(dashboard)" className="text-xl font-semibold text-slate-900">
            AstroKalki
          </Link>
          <nav className="hidden gap-4 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-600 hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <OrgSwitcher />
            <Link
              href="/developer/keys"
              className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700"
            >
              API Keys
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
