import type { Metadata } from "next";
import "./globals.css";
import BackgroundBlob from "@/components/BackgroundBlob";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Irina Drugea — Product Designer",
  description:
    "The portfolio of Irina Drugea, a product designer who cares about how things feel, not just how they look.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts are loaded via the Google Fonts stylesheet rather than
          next/font so they resolve at runtime in the browser. (next/font
          fetches at build time over Node, which fails behind TLS-inspecting
          corporate proxies.) The --font-* CSS variables these map to are
          defined in globals.css.

          Fraunces: light/soft display serif with an italic cut.
          Sofia Sans: warm humanist body face.
          Space Mono: tiny utility labels only.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Sofia+Sans:wght@300..700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen bg-cloud font-body text-plum antialiased">
        <BackgroundBlob />
        <Nav />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
