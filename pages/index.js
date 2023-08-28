import Head from "next/head";
import styled from "styled-components";
import KidsList from "@/components/KidsList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kids Log</title>
        <meta name="description" content="Ulrikes Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kidslog.ico" />
      </Head>
      <main>
        <Header>
        </Header>
        <KidsList />
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
