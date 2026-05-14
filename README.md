# Bridge Personal Site

这是我的个人网站项目，使用 [Next.js](https://nextjs.org) 和 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 创建。

这个项目会作为我的长期练习项目，用来记录技术成长、项目实践、学习日志和个人作品集。

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- npm

## Getting Started

首先进入项目目录，然后启动 development server：

```bash
npm run dev
```

启动成功后，在浏览器中打开：

[http://localhost:3000](http://localhost:3000)

如果页面可以正常访问，说明本地开发环境已经运行成功。

## Project Structure

当前项目主要使用 Next.js 的 App Router。

```text
app/page.tsx              首页
app/layout.tsx            网站整体布局
app/about/page.tsx        关于我页面
app/projects/page.tsx     项目页面
app/blog/page.tsx         文章页面
app/globals.css           全局样式
```

在 `app` 目录下，文件夹名会对应网站路由：

```text
app/about/page.tsx     -> /about
app/projects/page.tsx  -> /projects
app/blog/page.tsx      -> /blog
```

## Development Notes

修改页面内容时，可以从这些文件开始：

- 首页：`app/page.tsx`
- 关于我：`app/about/page.tsx`
- 项目列表：`app/projects/page.tsx`
- 文章列表：`app/blog/page.tsx`

保存文件后，浏览器页面会自动更新。

这个项目目前处于早期阶段，后续会逐步加入：

- 项目展示
- 技术文章
- 学习日志
- Markdown 内容系统
- 部署上线

## Learn More

如果想继续了解 Next.js，可以参考：

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## Deploy on Vercel

后续可以使用 [Vercel](https://vercel.com/new) 部署这个 Next.js 项目。

部署相关内容可以参考：

[Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
