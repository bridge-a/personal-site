import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "文章 | Bridge",
  description: "Bridge 的技术文章、学习日志和项目复盘。",
};

type Post = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  href?: string;
};

const posts: Post[] = [
  {
    title: "Day 1：创建个人网站",
    date: "2026-05-11",
    summary: "记录我创建 Next.js 项目、启动开发环境和修改首页的过程。",
    tags: ["Next.js", "Project Setup", "Learning Log"],
    href: "/blog/day-1-create-site",
  },
  {
    title: "Day 2：理解 Next.js 路由",
    date: "2026-05-12",
    summary: "记录我对 app 目录、page.tsx、layout.tsx 和路由规则的理解。",
    tags: ["Next.js", "App Router"],
    href: "/blog/day-2-nextjs-routing",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section>
        <h1 className="text-4xl font-bold">文章</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          这里会记录我的技术笔记、学习日志和项目复盘。文章会随着项目推进逐步增加。
        </p>
      </section>

      <section className="mt-12 space-y-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-lg border border-gray-200 p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <time className="text-sm text-gray-500">{post.date}</time>
            </div>

            <p className="mt-4 leading-7 text-gray-600">{post.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {post.href ? (
              <Link
                href={post.href}
                className="mt-6 inline-block rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
              >
                阅读文章
              </Link>
            ) : (
              <span className="mt-6 inline-block text-sm text-gray-400">
                文章整理中
              </span>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}