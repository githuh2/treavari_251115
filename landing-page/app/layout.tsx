import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERD Impact Analyzer - 30분을 5분으로",
  description: "ERD 기반 영향도 분석으로 SI 개발팀의 정확한 견적과 재계약률 향상을 지원하는 도구",
  keywords: ["ERD", "영향도 분석", "공수 산정", "SI", "개발 관리", "DBML"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
