import { useEffect, useState } from "react";
import { supabase } from "../assets/supabase";

export function Auth() {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({data}) => {
      setUser(data.session?.user ?? null);
      setSession(data.session);
      setLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setSession(session);
  });

    return () => subscription?.subscription.unsubscribe();
  }, []);

  return { user, session, loading };
}