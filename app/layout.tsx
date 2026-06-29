import type { Metadata } from "next";
import { Inter, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "小松 | フリーランスITコンサルタント",
  description:
    "IBM・日系コンサルファーム出身。製造・金融・人材など幅広い業界のプロジェクトマネジメント・ITコンサルティングをご支援します。英語対応可。",
  keywords: "ITコンサルタント, プロジェクトマネージャー, PMO, フリーランス, 英語対応, 生成AI",
  openGraph: {
    title: "小松 | フリーランスITコンサルタント",
    description: "IBM・日系コンサルファーム出身のITコンサルタント。幅広い業界経験と英語力でプロジェクトを推進します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
