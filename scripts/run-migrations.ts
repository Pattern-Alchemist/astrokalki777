import fs from 'fs';
import path from 'path';
import { getPool } from '../lib/db';

async function run() {
  const pool = getPool();
  const migrationsDir = path.join(process.cwd(), 'supabase', 'migrations');
  const files = fs.readdirSync(migrationsDir).sort();

  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    console.log(`Applying migration ${file}`);
    await pool.query(sql);
  }
}

run()
  .then(() => {
    console.log('Migrations applied');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
