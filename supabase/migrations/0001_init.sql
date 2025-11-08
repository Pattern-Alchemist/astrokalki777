create extension if not exists pgcrypto;

create table if not exists organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  subdomain text unique,
  custom_domain text,
  brand_json jsonb default '{}'::jsonb,
  email_from text,
  locale_default text default 'en',
  currency_default text default 'INR',
  created_at timestamptz default now()
);

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  organization_id uuid references organizations(id) on delete cascade,
  role text check (role in ('owner','admin','analyst','editor','viewer')),
  created_at timestamptz default now()
);

create table if not exists credits_ledger (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  delta integer not null,
  reason text,
  meta_json jsonb,
  created_at timestamptz default now()
);

create table if not exists readings (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  user_id uuid references users(id) on delete set null,
  title text,
  data_json jsonb default '{}'::jsonb,
  status text,
  search_tsv tsvector,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  name text,
  config_json jsonb,
  schedule_cron text,
  last_run_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists report_runs (
  id uuid primary key default gen_random_uuid(),
  report_id uuid references reports(id) on delete cascade,
  run_started_at timestamptz,
  run_status text,
  artifact_url text
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  target_type text,
  target_id uuid,
  author_id uuid references users(id) on delete set null,
  body text,
  mentions int[],
  created_at timestamptz default now()
);

create table if not exists activities (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  actor_id uuid,
  verb text,
  object_type text,
  object_id uuid,
  meta_json jsonb,
  ip inet,
  ua text,
  created_at timestamptz default now()
);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  actor_id uuid,
  action text,
  entity_type text,
  entity_id uuid,
  diff_json jsonb,
  ip inet,
  ua text,
  created_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  channel text,
  title text,
  body text,
  data_json jsonb,
  read_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists api_keys (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  name text,
  hashed_key text,
  scopes text[],
  last_used_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists webhooks (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  url text,
  secret text,
  events text[],
  created_at timestamptz default now()
);

create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  amount_minor integer,
  currency text,
  provider text,
  status text,
  external_id text,
  created_at timestamptz default now()
);

create table if not exists domains (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  hostname text,
  verified boolean default false,
  created_at timestamptz default now()
);

create index if not exists readings_search_idx on readings using gin(search_tsv);

create or replace function auth.org_ids() returns uuid[] language sql stable as $$
  select coalesce(nullif(current_setting('request.jwt.claims', true), '')::json->>'org_ids', '[]')::json->uuid[];
$$;

create or replace function auth.role() returns text language sql stable as $$
  select coalesce(nullif(current_setting('request.jwt.claims', true), '')::json->>'role', 'viewer');
$$;

alter table organizations enable row level security;
alter table memberships enable row level security;
alter table readings enable row level security;
alter table reports enable row level security;
alter table report_runs enable row level security;
alter table comments enable row level security;
alter table activities enable row level security;
alter table audit_logs enable row level security;
alter table notifications enable row level security;
alter table api_keys enable row level security;
alter table webhooks enable row level security;
alter table invoices enable row level security;
alter table domains enable row level security;
alter table credits_ledger enable row level security;

create policy "Org read access" on readings for select using (organization_id = any(auth.org_ids()));
create policy "Org read access reports" on reports for select using (organization_id = any(auth.org_ids()));
create policy "Org read access comments" on comments for select using (organization_id = any(auth.org_ids()));
create policy "Org read access notifications" on notifications for select using (organization_id = any(auth.org_ids()));
create policy "Org read access invoices" on invoices for select using (organization_id = any(auth.org_ids()));

create policy "Owners manage invoices" on invoices for all using (
  auth.role() in ('owner','admin')
) with check (
  auth.role() in ('owner','admin')
);

create policy "Editors write readings" on readings for insert with check (auth.role() in ('owner','admin','editor'));
create policy "Editors update readings" on readings for update using (auth.role() in ('owner','admin','editor'));
