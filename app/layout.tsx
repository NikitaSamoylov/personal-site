import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.scss";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Привет, я - Никита",
  description: "Создаю сайты на Javascript, Next, React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ ubuntu.className }>
        { children }
      </body>
    </html>
  );
}
