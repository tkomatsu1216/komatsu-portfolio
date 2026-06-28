import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小松琢昂 | フリーランスITコンサルタント",
  description:
    "IBM・ライズコンサルティング出身。製造・金融・人材など幅広い業界のプロジェクトマネジメント・ITコンサルティングをご支援します。英語対応可。",
  keywords: "ITコンサルタント, プロジェクトマネージャー, PMO, フリーランス, 英語対応, 生成AI",
  openGraph: {
    title: "小松琢昂 | フリーランスITコンサルタント",
    description: "IBM・ライズコンサルティング出身のITコンサルタント。幅広い業界経験と英語力でプロジェクトを推進します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
