import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/layout/Layout";
import SlideshowProvider from "../src/store/slideshow-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SlideshowProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SlideshowProvider>
  );
}
