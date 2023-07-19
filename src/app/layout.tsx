import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import MainWrapper from "@/components/MainWrapper";
import Head from "next/head";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ITLOG",
  description:
    "건설안전 IT기업/건설 CCTV 전문/타워크레인 카메라/풍속계/네트워크공사/방송시스템",
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
