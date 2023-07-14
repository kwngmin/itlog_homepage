import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import MainWrapper from "@/components/MainWrapper";
import localFont from "next/font/local";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
const spoqaHanSans = localFont({
  src: [
    {
      path: "../fonts/SpoqaHanSansNeo-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={spoqaHanSans.className}>
      <body className={`flex flex-col h-screen`}>
        <Header />
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
