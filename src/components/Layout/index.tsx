import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dastan's Homepage" />
        <meta name="author" content="Dastan Ozgeldi" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Dastan Ozgeldi" />
        <meta name="og:title" content="Dastan Ozgeldi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Dastan Ozgeldi - Homepage</title>
      </Head>
      <Header />
      {children}
    </main>
  );
}