import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "个人网站项目 | Bridge",
  description: "Bridge 个人网站项目的目标、技术栈、开发进度和学习记录。",
};

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"];

const milestones = [
  "创建 Next.js 项目",
  "完成首页",
  "完成基础路由",
  "完成 About 页面",
  "完成 Projects 页面",
  "创建个人网站项目详情页",
];

const lessons = [
  "理解 app 目录下的文件路由规则",
  "学会使用 layout.tsx 组织公共结构",
  "学会用数组和 map 渲染重复内容",
  "开始用 Git 记录项目变化",
];

export default function PersonalSiteProjectPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/projects" className="text-sm text-gray-500">
        返回项目列表
      </Link>

      <section className="mt-8">
        <p className="text-sm font-medium text-gray-500">进行中</p>
        <h1 className="mt-3 text-4xl font-bold">个人网站</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          这是我的第一个长期练手项目。它不只是一个展示页面，
          也是我记录技术成长、项目实践、学习日志和作品集的地方。
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">项目目标</h2>
        <p className="mt-5 leading-8 text-gray-600">
          通过持续建设这个个人网站，我希望逐步掌握现代 Web 开发的基础能力，
          包括页面结构、路由、组件、样式、内容系统、部署和项目复盘。
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">开发进度</h2>
        <ul className="mt-5 space-y-3 text-gray-600">
          {milestones.map((milestone) => (
            <li key={milestone}>- {milestone}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">目前学到的东西</h2>
        <ul className="mt-5 space-y-3 text-gray-600">
          {lessons.map((lesson) => (
            <li key={lesson}>- {lesson}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}