const rolePermissions = {
  owner: ['manage:all'],
  admin: ['manage:billing', 'manage:team'],
  editor: ['write:readings', 'write:reports'],
  analyst: ['read:reports'],
  viewer: ['read:readings']
} as const;

export type Permission = string;
export type RoleKey = keyof typeof rolePermissions;

export function can(role: RoleKey, permission: Permission) {
  return (
    rolePermissions[role]?.includes('manage:all') ||
    rolePermissions[role]?.includes(permission) ||
    false
  );
}
