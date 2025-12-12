import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dpwsoydazopvsfzxgbbs.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwd3NveWRhem9wdnNmenhnYmJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NzAyODEsImV4cCI6MjA4MTA0NjI4MX0.KAmzW39-V8vJ_E9q_wFv_cC2ghJWaYZ3iJ-fQyjwuW4";
export const supabase = createClient(supabaseUrl, supabaseKey);