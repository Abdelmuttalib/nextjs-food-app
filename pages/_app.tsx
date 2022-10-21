import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "../styles/globals.css";
import { UIProvider } from "../src/components/Providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
