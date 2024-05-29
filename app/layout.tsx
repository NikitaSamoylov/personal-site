import type { Metadata } from "next";
import { Ubuntu, PT_Sans_Narrow, Roboto } from "next/font/google";
import "./globals.scss";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: '400' });
const ptsans = PT_Sans_Narrow({ subsets: ["latin"], weight: '400' });
const roboto = Roboto({ subsets: ["latin"], weight: '400' });

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
      <body className={ roboto.className }>
        { children }
      </body>
    </html>
  );
}
