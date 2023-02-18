// https://docs.google.com/presentation/d/1TqO_7a5kOBiqOalXSDIsClMdpLDjJMBUKznFbzBjkFQ/edit#slide=id.g18575835451_0_57
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://fbyqwokxjqgdafkypwbw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZieXF3b2t4anFnZGFma3lwd2J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3NDUxMzgsImV4cCI6MTk5MjMyMTEzOH0.X06HbGicH8Njeu0wNsw1zGDnQr6ltcEa25ixWxw4x5w'

export default supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});