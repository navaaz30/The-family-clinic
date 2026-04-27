import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hygsazovlzjdlmfrcthh.supabase.co"
const supabaseKey = "sb_publishable_fPl1PSmcaWwE6bmMJwzDQw_Q0NQgA5N"

export const supabase = createClient(supabaseUrl, supabaseKey)