import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="large icon" sizes="96x96" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
