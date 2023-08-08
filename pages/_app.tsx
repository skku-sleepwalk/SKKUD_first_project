import { AppShell } from "@/components/Common/AppShell/AppShell";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}

export default MyApp;
