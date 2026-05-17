import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "项目 | Bridge",
  description: "Bridge 的项目实践、练手作品和长期开发记录。",
};

type Project = {
  title: string;
  status: string;
  description: string;
  techStack: string[];
  progress: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "个人网站",
    status: "进行中",
    description:
      "一个用于记录技术成长、项目实践、学习日志和个人作品集的长期项目。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Git"],
    progress: [
      "完成项目初始化",
      "完成基础路由",
      "完成首页和 About 页面",
      "开始整理项目展示页",
      "创建个人网站项目详情页",
    ],
    href: "/projects/personal-site",
  },
  {
    title: "学习日志系统",
    status: "计划中",
    description:
      "用于整理每天的学习记录，后续会逐步升级为 Markdown 内容系统。",
    techStack: ["Markdown", "Next.js", "Content System"],
    progress: ["整理学习日志格式", "规划文章列表和详情页"],
  },
  {
    title: "作品集页面",
    status: "计划中",
    description:
      "用于展示课程项目、练手项目和长期作品，帮助形成可展示的技术档案。",
    techStack: ["React", "UI Design", "Project Documentation"],
    progress: ["设计项目卡片结构", "规划项目详情页"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section>
        <h1 className="text-4xl font-bold">项目</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          这里会记录我的练手项目、长期作品和技术实践。每个项目都会尽量保留目标、
          技术栈、开发进度和复盘记录。
        </p>
      </section>

      <section className="mt-12 grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-gray-200 p-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {project.status}
              </span>
            </div>

            <p className="mt-4 leading-7 text-gray-600">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">当前进度</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                {project.progress.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            {project.href ? (
              <Link
                href={project.href}
                className="mt-6 inline-block rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
              >
                查看详情
              </Link>
            ) : (
              <span className="mt-6 inline-block text-sm text-gray-400">
                详情页规划中
              </span>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}