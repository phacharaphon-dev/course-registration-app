import { createClient } from '@supabase/supabase-js'

// TODO: ไปเอา URL กับ KEY ของคุณมาจากหน้าเว็บ Supabase (เมนู Project Settings > API)
const supabaseUrl = 'https://hofziopcoimjevmelbuh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvZnppb3Bjb2ltamV2bWVsYnVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MzkzMTIsImV4cCI6MjA5MDExNTMxMn0.txOTK_T3kMhBksKRtfnFyyIHe02rDZTX5Gai82YwEVk'

export const supabase = createClient(supabaseUrl, supabaseKey)
hofziopcoimjevmelbuh.supabase.co

