import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mxtjdiiwaqlvzgsotows.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dGpkaWl3YXFsdnpnc290b3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTQ2ODcsImV4cCI6MjA0NTUzMDY4N30.qtZqr15Z80dTcCXAJw8qgeTS7mTfStSa_sEbhedp9yM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
