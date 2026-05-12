- # Day 1 学习日志

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