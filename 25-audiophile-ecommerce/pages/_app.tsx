import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/layout/Layout";
import AppContextProvider from "../src/context/appContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
