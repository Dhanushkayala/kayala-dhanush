import { createClient, type SupabaseClient, type User } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
}

export const supabase: SupabaseClient = createClient(supabaseUrl || '', supabaseAnonKey || '');

export async function getCurrentUser(): Promise<User | null> {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
}

export async function signInWithEmail(email: string) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/admin/auth/callback`
    }
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function isAdminUser(email: string): Promise<boolean> {
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
  if (!adminEmail) {
    console.warn('VITE_ADMIN_EMAIL not configured');
    return false;
  }
  return email.toLowerCase() === adminEmail.toLowerCase();
}

export async function checkAdminAccess(): Promise<{ authorized: boolean; user: User | null }> {
  const user = await getCurrentUser();
  if (!user) return { authorized: false, user: null };

  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
  if (!adminEmail) return { authorized: false, user };

  const authorized = user.email?.toLowerCase() === adminEmail.toLowerCase();
  return { authorized, user };
}

export function onAuthStateChange(callback: (event: string, session: unknown) => void) {
  return supabase.auth.onAuthStateChange(callback);
}

export { supabase as default };