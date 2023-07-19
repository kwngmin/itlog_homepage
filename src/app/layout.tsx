import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import MainWrapper from "@/components/MainWrapper";
import Head from "next/head";
import Footer from "@/components/Footer";
// import favicon from "../../public/favicon.ico";

export const metadata: Metadata = {
  title: "itlog - (주)아이티로그",
  description:
    "(주)아이티로그 - 건설은안전하게,안전은스마트하게,건설안전관리의파트너",
  openGraph: {
    title: "itlog - (주)아이티로그",
    description:
      "(주)아이티로그 - 건설은안전하게,안전은스마트하게,건설안전관리의파트너",
    url: "https://itlog-homepage.vercel.app/",
    siteName: "itlog 홈페이지",
    images: [
      {
        url: "../../public/images/opengraph_800.png",
        width: 800,
        height: 600,
      },
      {
        url: "../../public/images/opengraph_1600.png",
        width: 1800,
        height: 1600,
        alt: "itlog logo",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <meta name="format-detection" content="telephone=no" />
        {/* <link rel="shortcut icon" href="../../public/favicon.ico" /> */}
      </head>
      <body className={`flex flex-col h-screen relative`}>
        <Header />
        <MainWrapper>
          {children}
          <Footer />
        </MainWrapper>
      </body>
    </html>
  );
}
