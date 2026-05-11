export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">你好，我是Bridge</h1>

        <p className="mt-6 text-lg text-gray-600">
          我是一名计算机类本科生，正在通过个人网站记录自己的技术成长、项目实践和学习思考。
        </p>

        <div className="mt-10 space-y-3">
          <p>当前阶段：搭建个人网站第一版</p>
          <p>正在学习：前端基础、Next.js、Git、工程化开发</p>
          <p>长期目标：形成自己的作品集和技术成长档案</p>
        </div>
      </section>
    </main>
  );
}
