import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mpfndogzdwfyomtuhjti.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wZm5kb2d6ZHdmeW9tdHVoanRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3MTE2MDcsImV4cCI6MjA0MTI4NzYwN30.bo7pDZX4GbBpO7T9vOyvf54qlT4WdP8CqW6Ttp2nldk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
