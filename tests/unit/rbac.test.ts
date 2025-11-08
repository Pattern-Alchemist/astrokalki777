import { describe, expect, it } from 'vitest';
import { can } from '@/lib/rbac';

describe('rbac', () => {
  it('allows owner to manage all', () => {
    expect(can('owner', 'manage:billing')).toBe(true);
  });

  it('prevents viewer from writing', () => {
    expect(can('viewer', 'write:readings')).toBe(false);
  });
});
