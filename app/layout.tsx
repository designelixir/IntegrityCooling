import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Navigation from "./components/Navigation";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper"; // create this if not already
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Integrity Cooling | Homepage",
  description: "Delivering trusted HVAC solutions on the Treasure Coast — “Your Comfort, Our Integrity.” Reliable service for your home or business with excellence and care.",
  verification: {
    google: "nHmzA21aOfWdwuc2zE4sSbamXcglxB9PX1451xL_ckE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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