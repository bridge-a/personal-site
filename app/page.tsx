import Link from "next/link";

const focusAreas = [
  "前端基础与 Next.js",
  "Git 与工程化开发",
  "计算机基础知识",
  "长期项目与技术写作",
  "大模型入门",
];

const projectSeeds = [
  {
    name: "个人网站",
    description: "用来记录我的技术成长、项目实践和学习思考。",
  },
  {
    name: "学习日志系统",
    description: "未来会把每天的学习记录整理成可浏览的文章。",
  },
  {
    name: "作品集页面",
    description: "用于展示我完成的练手项目和长期作品。",
  },
];

const plans = [
  "完善个人网站首页",
  "整理 About 页面内容",
  "开始记录第一篇技术学习日志",
  "每日总结复盘",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-gray-500">个人网站成长计划</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          你好，我是 Bridge
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          我是一名计算机类本科生，正在通过个人网站记录自己的技术成长、
          项目实践和学习思考。这个网站会随着我的学习不断迭代。
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white"
          >
            查看项目
          </Link>
          <Link
            href="/blog"
            className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium"
          >
            阅读文章
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold">当前学习方向</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <div key={item} className="rounded-lg border border-gray-200 p-5">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold">项目入口</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {projectSeeds.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-gray-200 p-5"
            >
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold">近期计划</h2>
        <ul className="mt-6 space-y-3 text-gray-600">
          {plans.map((plan) => (
            <li key={plan}>- {plan}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
