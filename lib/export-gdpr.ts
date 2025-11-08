import { getPool } from './db';

export async function exportGdprData(userId: string) {
  const pool = getPool();
  const { rows } = await pool.query('select * from readings where user_id = $1', [userId]);
  return { readings: rows };
}
