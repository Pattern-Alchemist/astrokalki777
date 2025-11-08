import { getPool } from '../lib/db';

async function seed() {
  const pool = getPool();
  await pool.query(`insert into organizations (id, name, slug, subdomain) values
    ('11111111-1111-1111-1111-111111111111','Celestial Insights','celestial-insights','celestial'),
    ('22222222-2222-2222-2222-222222222222','Kalki Collective','kalki-collective','kalki')
    on conflict (id) do nothing`);

  await pool.query(`insert into users (id, email, name) values
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa','asha@celestial.insights','Asha Patel'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb','rahul@kalki.collective','Rahul Singh')
    on conflict (id) do nothing`);

  await pool.query(`insert into memberships (user_id, organization_id, role) values
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa','11111111-1111-1111-1111-111111111111','owner'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb','22222222-2222-2222-2222-222222222222','admin')
  on conflict do nothing`);
}

seed()
  .then(() => {
    console.log('Seed completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
