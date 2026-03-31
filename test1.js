import { createClient } from '@supabase/supabase-js'

// 1. กำหนดค่าการเชื่อมต่อ
const supabaseUrl = 'https://hofziopcoimjevmelbuh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvZnppb3Bjb2ltamV2bWVsYnVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MzkzMTIsImV4cCI6MjA5MDExNTMxMn0.txOTK_T3kMhBksKRtfnFyyIHe02rDZTX5Gai82YwEVk'
const supabase = createClient(supabaseUrl, supabaseKey)

// 2. ฟังก์ชันดึงข้อมูล
async function getData() {
  const { data, error } = await supabase
    .from('course')
    .select('*')

  if (error) console.log('Error:', error)
  else console.log('Data:', data)
}

getData()
