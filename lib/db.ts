import { Pool } from 'pg';

let pool: Pool | undefined;

export function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/postgres';
    pool = new Pool({ connectionString });
  }
  return pool;
}
