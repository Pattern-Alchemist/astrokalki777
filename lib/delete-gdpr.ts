import { getPool } from './db';

export async function deleteGdprData(userId: string) {
  const pool = getPool();
  await pool.query('delete from readings where user_id = $1', [userId]);
}
