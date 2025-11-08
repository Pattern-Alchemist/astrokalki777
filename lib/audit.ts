import { getPool } from './db';

export async function recordAuditLog(entry: {
  organization_id: string;
  actor_id: string;
  action: string;
  entity_type: string;
  entity_id: string;
  diff_json: Record<string, unknown>;
}) {
  const pool = getPool();
  await pool.query(
    `insert into audit_logs (organization_id, actor_id, action, entity_type, entity_id, diff_json)
     values ($1, $2, $3, $4, $5, $6)`,
    [
      entry.organization_id,
      entry.actor_id,
      entry.action,
      entry.entity_type,
      entry.entity_id,
      entry.diff_json
    ]
  );
}
