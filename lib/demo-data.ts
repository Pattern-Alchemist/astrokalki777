export type Organization = {
  id: string;
  name: string;
  slug: string;
  subdomain: string;
  custom_domain?: string | null;
};

export type Reading = {
  id: string;
  organization_id: string;
  title: string;
  status: 'draft' | 'in_review' | 'approved' | 'published';
  created_at: string;
};

export type Report = {
  id: string;
  organization_id: string;
  name: string;
  schedule_cron: string | null;
  last_run_at: string | null;
};

export const organizations: Organization[] = [
  { id: 'org_demo_1', name: 'Celestial Insights', slug: 'celestial-insights', subdomain: 'celestial' },
  { id: 'org_demo_2', name: 'Kalki Collective', slug: 'kalki-collective', subdomain: 'kalki' }
];

export const readings: Reading[] = Array.from({ length: 12 }).map((_, index) => ({
  id: `reading-${index + 1}`,
  organization_id: index % 2 === 0 ? 'org_demo_1' : 'org_demo_2',
  title: `Monthly Horoscope ${index + 1}`,
  status: (['draft', 'in_review', 'approved', 'published'] as const)[index % 4],
  created_at: new Date(Date.now() - index * 86400000).toISOString()
}));

export const reports: Report[] = [
  {
    id: 'report-1',
    organization_id: 'org_demo_1',
    name: 'Engagement Cohort',
    schedule_cron: '0 9 * * 1',
    last_run_at: new Date().toISOString()
  },
  {
    id: 'report-2',
    organization_id: 'org_demo_2',
    name: 'Revenue Forecast',
    schedule_cron: '0 8 * * *',
    last_run_at: new Date().toISOString()
  }
];
