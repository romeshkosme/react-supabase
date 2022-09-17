import { createClient } from "@supabase/supabase-js";

// Provide a custom `fetch` implementation as an option
export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY,
  {
    fetch: (...args) => fetch(...args),
  }
);
