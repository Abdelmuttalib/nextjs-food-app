import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "../styles/globals.css";
import { UIProvider } from "../src/components/Providers";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
