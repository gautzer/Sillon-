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
  SUPABASE_URL: "COLLEZ_VOTRE_URL_ICI",
  SUPABASE_ANON_KEY: "COLLEZ_VOTRE_CLE_ANON_ICI",
  VAPID_PUBLIC_KEY: "COLLEZ_VOTRE_CLE_VAPID_PUBLIQUE_ICI",
};
