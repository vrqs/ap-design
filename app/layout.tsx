import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "@/sass/main.scss";

import Script from "next/script";

import { headers } from "next/headers";

import Header from "./components/Header";

export const metadata: Metadata = {
  title: {
    default: "Web Design & Sites Rápidos, Modernos e Eficientes | APDSN Portugal",
    template: "%s | APDSN",
  },
  description: "Criamos sites rápidos, modernos e eficientes para empresas portuguesas. A APDSN é um estúdio web focado em transformar visitas em clientes através de design funcional e otimizado para resultados.",
  metadataBase: new URL("https://apdsn.pt"),
  openGraph: {
    title: "APDSN | Estúdio Web em Portugal",
    description:
      "Sites rápidos, modernos e eficientes para quem quer vender mais. Transformamos visitas em clientes.",
    url: "https://apdsn.pt",
    siteName: "APDSN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "APDSN - Criação de Sites Profissionais em Portugal",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APDSN | Criação de Sites Profissionais em Portugal",
    description:
      "Sites rápidos, modernos e eficientes para quem quer vender mais. Estúdio web em Portugal.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://apdsn.pt",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathName = headersList.get("x-current");
  const className = pathName === "/" ? "home" : pathName?.replace("/", "");

  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9K0MB309B0"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9K0MB309B0', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`page-${className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
