# Day 1 学习日志

## 今天完成了什么
- 创建 personal-site 项目
- 跑通 Next.js 本地开发环境
- 修改首页内容
- 第一次看到自己的个人网站在浏览器中运行

## 今天遇到的问题
- create-next-app 的选项和之前教程不完全一样
- 暂时看到 npm audit 提示，但今天先不处理

## 今天学到的东西
- Next.js 项目可以通过 npm run dev 启动

- 首页文件是 app/page.tsx

- 修改代码后浏览器会自动刷新

- Git 可以记录项目变化

- Git走22端口，连接不上的时候，可以切换为443端口

  在C:\Users\你的用户名\.ssh\config里设置

  Host github.com
      HostName ssh.github.com
      User git
      Port 443

  或者powershell直接打开

  notepad $env:USERPROFILE\.ssh\config

  然后修改

  这里记住，一定要是config不能有.txt后缀，否则不会被识别

  这里可以直接在命令行rename：Rename-Item "$env:USERPROFILE\.ssh\config.txt" "config"

- Next.js = 基于 React 的网站开发框架

- 浏览器-->Next.js / React 前端页面--(发送请求)->Spring Boot 或 Django 后端接口-->MySQL / PostgreSQL 数据库

## 明天准备做什么
- 了解项目目录结构
- 修改网站标题
- 开始规划网站的几个基础页面

# Day 2

## 今天完成了什么

修改了layout.tsx文件内容，添加了网页标签名，和四个link索引

Bridge直接返回主界面，

about，关于我界面

projects，项目界面

blog，文章界面

创建了三个新页面的page.tsx放在对应文件夹下边

## 今天遇到的问题

创建projects文件夹时，文件夹名打成了project导致没有对应的链接

## 今天学到的东西

Next.js路由核心，

app下边的文件夹名会变成网址路径，文件里边的page.tsx就是路径对应的页面内容

`app/page.tsx              -> /`
`app/about/page.tsx        -> /about`
`app/projects/page.tsx     -> /projects`
`app/blog/page.tsx         -> /blog`

而且app/layout.tsx是整个网站的公告外壳

```
<header>导航栏</header>

{children}
```

这里children会根据当前的路由自动替换为对应页面

比如访问about时候，就会是

```
<header>导航栏</header>

<AboutPage />
```

所以把导航栏写到layout.tsx里，每个页面都会拥有这个导航栏

metadata是网页的页面信息，主要给浏览器、搜索引擎、社交平台看的，不是直接显示在页面正文里的内容。

比如写的这个

```
export const metadata = {
  title: "Bridge | Personal Site",
  description: "Bridge 的个人网站，记录技术成长、项目实践和学习思考。",
};
```

这里注意：**title 间接可见，description 默认不可见**

title在页面标题那里能看到，description一般不可见，是给机器看的

Next.js会帮我生成类似的HTML:

```
<title>Bridge | Personal Site</title>
<meta
  name="description"
  content="Bridge 的个人网站，记录技术成长、项目实践和学习思考。"
/>
```

metadata作用主要有：

浏览器标签页标题
搜索引擎展示摘要
收藏夹名称
社交平台分享预览
SEO

```
page.tsx       管页面显示什么
layout.tsx     管多个页面共同的结构
metadata       管这个网页对外怎么被描述
Link           管页面之间怎么跳转
```

## 明天准备做什么

首页内容结构升级，从“几行文字”变成真正的个人网站首页雏形。

# Day 3

## 今天完成了什么
- 升级首页结构
- 添加学习方向、项目入口和近期计划
- 学习了数组和 map 渲染页面内容

## 今天学到的东西
- 首页可以由多个 section 组成

- 数据可以先写成数组，再通过 map 显示到页面

- Link 可以用来在不同页面之间跳转

- JSX 负责写页面结构
  Tailwind 负责控制页面样式
  数组 + map 负责把数据批量渲染成页面

- 骨架：JSX
  外观：Tailwind
  内容生成方式：数组 + map

- 今天写的 app/page.tsx 本质上是一个 React 组件：

  ```react
  export default function Home() {
    return (
      <main>
        <section>
          <h1>你好，我是 Bridge</h1>
          <p>我是一名计算机类本科生...</p>
        </section>
      </main>
    );
  }
  ```

  这里function Home()表示一个叫`Home`的组件

  return (...)表示这个组件最终要显示到页面上的内容

  ```
  <main>
  <section>
  <h1>
  <p>
  <div>
  ```

  看起来是html实际上是jsx

  JSX 可以理解为：在 JavaScript / TypeScript 里面写类似 HTML 的页面结构。

  它和普通 HTML 很像，但有几个区别。

   HTML 里写样式类名是：<div class="box"></div>

   JSX 里要写：<div className="box"></div>

   class 在 JavaScript 里是关键字，所以 React 用 className

  再比如，JSX 里想插入 JavaScript 表达式，要用 {}：

  ```
  const name = "Bridge";
  
  <h1>你好，我是 {name}</h1>
  ```

  页面会显示：你好，我是 Bridge

  所以 JSX 的核心是：

  ```
  用组件组织页面
  用标签描述结构
  用 {} 插入 JavaScript 数据
  ```

  以后做任何页面，都可以先这样拆：

  ```
  这个页面有几个区域？
  每个区域有什么标题？
  每个区域里面是文字、按钮、列表，还是卡片？
  ```

- **Tailwind 基础布局**

  ```
  <main className="mx-auto max-w-5xl px-6 py-16">
  ```

  类似这些就是 Tailwind CSS

  它不是传统 CSS 文件里写：

  ```
  .main {
    max-width: 1024px;
    padding: 64px 24px;
    margin: 0 auto;
  }
  ```

  而是直接在 className 里写工具类：

  ```
  className="mx-auto max-w-5xl px-6 py-16"
  ```

  ```
  mx-auto      左右自动外边距，让内容居中
  max-w-5xl    最大宽度，不让内容铺满整个屏幕
  px-6         左右内边距
  py-16        上下内边距
  ```

  比如：

  ```
  <h1 className="mt-4 text-5xl font-bold tracking-tight">
    你好，我是 Bridge
  </h1>
  ```

  意思是：

  ```
  mt-4             上外边距
  text-5xl         很大的文字
  font-bold        加粗
  tracking-tight   字距稍微紧一点
  ```

  再比如：<div className="mt-6 grid gap-4 sm:grid-cols-2">

  ```
  mt-6              上方间距
  grid              使用网格布局
  gap-4             网格项之间的间距
  sm:grid-cols-2    屏幕达到 sm 尺寸后，变成两列
  ```

  Tailwind 里经常见到这些前缀：

  sm:
  md:
  lg:
  xl:

  它们表示响应式布局。

  比如：<div className="grid gap-4 md:grid-cols-3">

  默认是一列
  屏幕到 md 宽度以后变成三列

  这就是为什么我的项目卡片在大屏幕上横着排，在小屏幕上会自动竖着排。

  几个最常用的 Tailwind 类：

  ```
  布局：
  mx-auto        居中
  max-w-3xl      最大宽度
  max-w-5xl      更大的最大宽度
  grid           网格布局
  flex           弹性布局
  gap-4          元素间距
  
  间距：
  p-5            内边距
  px-6           左右内边距
  py-16          上下内边距
  mt-6           上外边距
  space-y-3      子元素纵向间距
  
  文字：
  text-sm        小文字
  text-lg        大一点的正文
  text-3xl       标题
  text-5xl       大标题
  font-bold      加粗
  text-gray-600  灰色文字
  
  边框：
  border         边框
  border-gray-200 灰色边框
  rounded-lg     圆角
  ```

  Tailwind 的好处是：可以很快试样式，不用频繁切换 CSS 文件。

- **数组 + map 渲染重复内容**

  ```react
  const focusAreas = [
    "前端基础与 Next.js",
    "Git 与工程化开发",
    "计算机基础知识",
    "长期项目与技术写作",
  ];
  ```

  这是一个数组。如果不用 map，可能要手写四个卡片：

  ```
  <div>前端基础与 Next.js</div>
  <div>Git 与工程化开发</div>
  <div>计算机基础知识</div>
  <div>长期项目与技术写作</div>
  ```

  这样能写，但不好维护。

  如果以后想加一个方向，就要复制一段 HTML。内容多了会很乱。

  所以使用

  ```react
  {focusAreas.map((item) => (
    <div key={item} className="rounded-lg border border-gray-200 p-5">
      {item}
    </div>
  ))}
  ```

  ```
  遍历 focusAreas 数组
  每拿到一个 item
  就生成一个 div
  把 item 显示到 div 里面
  ```

  粗暴理解为：数组里有几个元素，页面上就生成几个卡片。

  这里key={item}是 React 要求的。因为 React 需要知道每个列表项是谁，这样以后更新页面时能更高效、更准确。

  再看项目入口那里：

  ```react
  const projectSeeds = [
    {
      name: "个人网站",
      description: "用来记录我的技术成长、项目实践和学习思考。",
    },
    {
      name: "学习日志系统",
      description: "未来会把每天的学习记录整理成可浏览的文章。",
    },
  ];
  ```

  这不是普通字符串数组，而是对象数组。

  每个项目都有：name，description

  渲染时这样写：

  ```react
  {projectSeeds.map((project) => (
    <div key={project.name}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  ))}
  ```

  ```
  每遍历到一个 project
  就拿 project.name 当标题
  拿 project.description 当描述
  生成一个项目卡片
  ```

  这就是非常重要的前端思想：

  ```
  不要重复写页面结构。
  把内容整理成数据。
  再用 map 把数据变成页面。
  ```

  以后我的文章列表也会这样：

  ```
  const posts = [
    {
      title: "Day 1：创建个人网站",
      date: "2026-05-11",
      slug: "day-1-create-site",
    },
    {
      title: "Day 2：理解 Next.js 路由",
      date: "2026-05-12",
      slug: "day-2-routing",
    },
  ];
  ```

  然后：

  ```
  {posts.map((post) => (
    <article key={post.slug}>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
    </article>
  ))}
  ```

## 明天准备做什么
- 完善 About 页面
- 梳理自己的个人介绍和学习方向

## 总结

页面不是一行一行堆出来的。
页面是由结构、样式、数据共同生成的。

```
JSX：我想显示什么结构？
Tailwind：这些结构长什么样？
数组 + map：重复的内容如何从数据生成？
```

# Day 4

## 今天完成了什么
- 完善 About 页面
- 添加个人介绍、学习方向和学习原则
- 给 About 页面单独设置 metadata

## 今天学到的东西
- layout.tsx 可以设置网站整体结构

- page.tsx 可以设置页面内容

- 每个页面可以有自己的 metadata

  页面正文里能看到的内容：
  h1、p、div、section、li 等 JSX 标签里的文字

  页面正文里默认看不到的内容：
  metadata.title
  metadata.description

  **title 间接可见，description 默认不可见。**

  但是 title 比较特殊，因为浏览器会把它显示在标签页标题上，所以能看到

- 数组和 map 可以继续用于渲染列表内容

- 每个页面page.tsx中有export const metadata: Metadata

  还会有export default function AboutPage()这个算是整个主体显示

  在里边用不同section写不同的模块内容

  至于section里可以提前在代码开头提前定义数组，然后使用map进行在section里索引进行显示，像这样：

  ```
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
  ```

- 使用github进行push的时候，仓库不统计push的contribution

  大概率是因为本地设置的user.name和user.email和github里边不一致

  user.name是创建的时候那个用户名，不是后来设置的真实姓名

## 明天准备做什么

- 完善 Projects 页面
- 开始整理个人网站项目本身作为第一个项目

## 今天的感受

- 今天发现 About 页面其实是在复用首页学到的结构化方法。
- 开始感觉到网站不是一次性写完的，而是每天迭代一点点长出来的。
