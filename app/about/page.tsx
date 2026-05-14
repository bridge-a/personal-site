import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我 | Bridge",
  description: "Bridge 的个人介绍、学习方向和长期成长计划。",
};

const learningTracks = [
  "前端开发：HTML、CSS、JavaScript、React、Next.js",
  "工程基础：Git、项目结构、代码规范、部署流程",
  "计算机基础：数据结构、计算机网络、操作系统、数据库",
  "长期输出：技术文章、项目复盘、学习日志",
];

const principles = [
  "先做出来，再逐步优化",
  "每天积累一点可展示的成果",
  "用项目带动技术学习",
  "把学过的东西写下来",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section>
        <h1 className="text-4xl font-bold">关于我</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          我是 Bridge，一名计算机类本科生。现在我正在通过建设个人网站，
          系统记录自己的技术成长、项目实践和学习思考。
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          这个网站不是一次性作品，而是我的长期训练场。我会在这里整理项目、
          记录学习过程、复盘问题，并逐渐形成自己的作品集。
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">当前学习方向</h2>
        <div className="mt-6 space-y-4">
          {learningTracks.map((track) => (
            <div key={track} className="rounded-lg border border-gray-200 p-5">
              {track}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">我的学习原则</h2>
        <ul className="mt-6 space-y-3 text-gray-600">
          {principles.map((principle) => (
            <li key={principle}>- {principle}</li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">接下来我会做什么</h2>
        <p className="mt-6 leading-8 text-gray-600">
          接下来，我会继续完善这个个人网站，包括项目展示、文章系统、
          学习日志和更多可交互的小功能。每一个功能都会作为一次练习，
          帮助我理解真实项目开发的过程。
        </p>
      </section>
    </main>
  );
}
