/* =====================================================================
   SILLON — CONFIGURATION
   ---------------------------------------------------------------------
   Trois valeurs à remplir :

     1. SUPABASE_URL        ->  Réglages Supabase > API > Project URL
     2. SUPABASE_ANON_KEY   ->  Réglages Supabase > API > anon public key
     3. VAPID_PUBLIC_KEY    ->  pour les notifications push (voir LISEZ-MOI,
                                section "Notifications push"). Laissez tel
                                quel si vous n'activez pas les notifs.
   ===================================================================== */

window.SILLON_CONFIG = {
  SUPABASE_URL: "https://azrqmafulstbiepcqytp.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6cnFtYWZ1bHN0YmllcGNxeXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMjAxNDEsImV4cCI6MjA5NTg5NjE0MX0.sXwHU198GDqkkcPKJZnq3VM7xeEoI6Xh9wM7e8RcCP0",
  VAPID_PUBLIC_KEY: "COLLEZ_VOTRE_CLE_VAPID_PUBLIQUE_ICI",
};
