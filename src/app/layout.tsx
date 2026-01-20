import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles.css";
import "@/components.css";
import "@/responsive.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import IconsSprite from "@/components/IconsSprite";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CÔNG TY ABC MEDICAL - Thiết Bị Y Khoa Chuyên Nghiệp",
  description: "Nhà cung cấp thiết bị y khoa chuyên nghiệp - Phân phối thiết bị y tế chính hãng theo tiêu chuẩn Bộ Y tế Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.variable}>
        <IconsSprite />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
