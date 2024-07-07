// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionWrapper from './sessionWrapper'
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortalOne",
  description: "Empowering Minds, Shaping Futures.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      {/* <link rel="icon" href=""></link> */}

      <body className={`${inter.className} bg-zinc-800`}>
        <SessionWrapper>
          {children}
        </SessionWrapper>


      </body>

    </html>
  );
}
