import { getPool } from './db';

export async function searchGlobal(query: string, organizationId: string) {
  const pool = getPool();
  const { rows } = await pool.query(
    `select id, title, 'reading' as type from readings where organization_id = $1 and title ilike $2 limit 10`,
    [organizationId, `%${query}%`]
  );
  return rows;
}
