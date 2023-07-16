import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import MainWrapper from "@/components/MainWrapper";

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
    <html lang="ko">
      <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css' />
      <body className={`flex flex-col h-screen`} style}>
        <Header />
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
