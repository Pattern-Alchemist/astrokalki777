export type Role = 'owner' | 'admin' | 'analyst' | 'editor' | 'viewer';

export const roleHierarchy: Role[] = ['viewer', 'analyst', 'editor', 'admin', 'owner'];

export function canPerform(role: Role, allowed: Role[]) {
  return allowed.includes(role);
}
