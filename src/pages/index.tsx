import Head from "next/head";
import { Inter } from "next/font/google";
import About from "@/components/about";
import Stats from "@/components/stats";
import Features from "@/components/features";
import Prices from "@/components/prices";
import Cats from "@/components/cats";
import Faq from "@/components/faq";
import ContactUs from "@/components/contactUs";
import LineChart from "@/components/lineChart";

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
      <main className="px-8 pb-10">
        <About />
        <LineChart />
        <Stats />
        <Features />
        <Prices />
        <Cats />
        <Faq />
        <ContactUs />
      </main>
    </>
  );
}
