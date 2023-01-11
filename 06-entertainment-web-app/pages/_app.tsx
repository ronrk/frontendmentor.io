import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/layout/Layout";
import MediaContextProvider from "../src/context/media-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MediaContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediaContextProvider>
  );
}
