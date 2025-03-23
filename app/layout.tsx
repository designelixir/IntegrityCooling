import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";



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
      <body>
        <Navigation></Navigation>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
