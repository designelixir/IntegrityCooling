import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper"; // create this if not already
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Integrity Cooling | Homepage",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/adt6kwm.css" />
      </Head>
      <body>
        <Navigation />
        <ClientLayoutWrapper>
          <main>{children}</main>
        </ClientLayoutWrapper>
        <Footer></Footer>
      </body>
    </html>
  );
}