import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Day 1：创建个人网站 | Bridge",
  description: "记录 Bridge 创建个人网站项目的第一天学习过程。",
};

export default function DayOneCreateSitePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="text-sm text-gray-500">
        返回文章列表
      </Link>

      <article className="mt-8">
        <p className="text-sm text-gray-500">2026-05-11</p>
        <h1 className="mt-3 text-4xl font-bold">Day 1：创建个人网站</h1>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">今天完成了什么</h2>
          <p className="mt-5 leading-8 text-gray-600">
            今天我创建了自己的个人网站项目，使用 create-next-app 初始化了
            Next.js 项目，并成功启动了本地 development server。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">我学到了什么</h2>
          <ul className="mt-5 space-y-3 text-gray-600">
            <li>- npx 可以临时运行 npm 工具</li>
            <li>- create-next-app 可以快速创建 Next.js 项目</li>
            <li>- npm run dev 可以启动本地开发服务器</li>
            <li>- app/page.tsx 对应网站首页</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">我的感受</h2>
          <p className="mt-5 leading-8 text-gray-600">
            这是我长期建设个人网站的第一步。虽然页面还很简单，
            但我已经开始拥有一个真正可以持续迭代的项目。
          </p>
        </section>
      </article>
    </main>
  );
}