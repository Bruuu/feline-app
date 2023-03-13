import Head from "next/head";
import { Inter } from "next/font/google";
import About from "@/components/about";
import Stats from "@/components/stats";
import Features from "@/components/features";
import Prices from "@/components/prices";
import Cats from "@/components/cats";
import Faq from "@/components/faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Feline App</title>
        <meta name="description" content="Landing page about cats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-8">
        <About />
        <Stats />
        <Features />
        <Prices />
        <Cats />
        <Faq />
      </main>
    </>
  );
}
