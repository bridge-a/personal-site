import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bridge | Personal Site",
  description: "Bridge 的个人网站，记录技术成长、项目实践和学习思考。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="border-b border-gray-200">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold">
              Bridge
            </Link>

            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/about">关于我</Link>
              <Link href="/projects">项目</Link>
              <Link href="/blog">文章</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
