import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Day 2：理解 Next.js 路由 | Bridge",
  description: "记录 Bridge 对 Next.js App Router、page.tsx 和 layout.tsx 的理解。",
};

const routingRules = [
  {
    file: "app/page.tsx",
    route: "/",
    description: "网站首页",
  },
  {
    file: "app/about/page.tsx",
    route: "/about",
    description: "关于我页面",
  },
  {
    file: "app/projects/page.tsx",
    route: "/projects",
    description: "项目页面",
  },
  {
    file: "app/blog/page.tsx",
    route: "/blog",
    description: "文章页面",
  },
];

export default function DayTwoRoutingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="text-sm text-gray-500">
        返回文章列表
      </Link>

      <article className="mt-8">
        <p className="text-sm text-gray-500">2026-05-12</p>
        <h1 className="mt-3 text-4xl font-bold">Day 2：理解 Next.js 路由</h1>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">今天理解了什么</h2>
          <p className="mt-5 leading-8 text-gray-600">
            今天我开始理解 Next.js 的 App Router。它通过 app 目录下的文件夹结构
            来决定网站路径，每个 page.tsx 文件都会变成一个可以访问的页面。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">路由规则</h2>
          <div className="mt-5 space-y-4">
            {routingRules.map((rule) => (
              <div
                key={rule.file}
                className="rounded-lg border border-gray-200 p-4"
              >
                <p className="font-medium">{rule.file}</p>
                <p className="mt-2 text-sm text-gray-600">
                  对应路径：{rule.route}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  作用：{rule.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">layout.tsx 的作用</h2>
          <p className="mt-5 leading-8 text-gray-600">
            app/layout.tsx 是网站的公共外壳。导航栏写在 layout.tsx 里之后，
            首页、About 页面、Projects 页面和 Blog 页面都会自动拥有同一个导航栏。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">我的总结</h2>
          <p className="mt-5 leading-8 text-gray-600">
            我现在可以把 Next.js 的页面理解成：文件夹决定路径，page.tsx 决定页面内容，
            layout.tsx 决定公共结构。这个规则让网站页面变得更容易组织。
          </p>
        </section>
      </article>
    </main>
  );
}