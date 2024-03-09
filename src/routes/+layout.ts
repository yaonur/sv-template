// src/routes/+layout.ts
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_ANON_KEY_LOCAL, PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_URL_LOCAL,PUBLIC_MODE } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_MODE === "beta" ? PUBLIC_SUPABASE_URL : PUBLIC_SUPABASE_URL_LOCAL,
		supabaseKey: PUBLIC_MODE === "beta" ? PUBLIC_SUPABASE_ANON_KEY : PUBLIC_SUPABASE_ANON_KEY_LOCAL,
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}