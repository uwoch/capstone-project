import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import Header from "@/components/Header";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Kids Log - Capstone Project</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
      <Header />
      <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
