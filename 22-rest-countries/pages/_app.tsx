import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import Layout from "../src/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Where in the world?</title>
        <meta
          name="description"
          content="application to find general stats on all counries"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
