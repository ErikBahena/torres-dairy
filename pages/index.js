import Head from "next/head";
import Image from "next/image";

import NavBar from "../components/home/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Torres Dairy</title>
        <meta name="description" content="Torres Dairy Farm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
    </>
  );
}
