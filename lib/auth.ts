import { createClient } from '@supabase/supabase-js';

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'http://localhost:54321';
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'stub-anon-key';

  return createClient(url, anonKey, {
    auth: {
      persistSession: true
    }
  });
}

export type SessionUser = {
  id: string;
  email: string;
  orgIds: string[];
};

export function getDemoUser(): SessionUser {
  return {
    id: 'user_demo_owner',
    email: 'asha@celestial.insights',
    orgIds: ['org_demo_1']
  };
}
