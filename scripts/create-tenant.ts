import { randomUUID } from 'crypto';
import { getPool } from '../lib/db';

async function createTenant(name: string) {
  const pool = getPool();
  const id = randomUUID();
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  await pool.query(
    `insert into organizations (id, name, slug, subdomain) values ($1, $2, $3, $4)`,
    [id, name, slug, slug]
  );
  console.log(`Created organization ${name} (${id})`);
}

const name = process.argv[2];
if (!name) {
  console.error('Usage: tsx scripts/create-tenant.ts "Org Name"');
  process.exit(1);
}

createTenant(name).then(() => process.exit(0));
