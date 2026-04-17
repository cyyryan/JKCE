# JKCE 品牌站(学习练习)

这是一个围绕 JKCE 品牌形象制作的学习项目,用于拆解现代品牌站的布局与动效实现。
**所有文案、图片、项目信息均为占位内容,不得用于商业用途。**

## 技术栈

- **Vite** + **React 18** — 构建工具与框架
- **styled-components** — CSS-in-JS 样式方案
- **Framer Motion** — 滚动与交互动画
- **Lenis** — 平滑滚动
- **React Router** — 页面路由

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打包构建
npm run build
```

## 项目结构

```
src/
├── components/       # 共享组件(Nav、Footer、Button...)
├── sections/         # 首页各个板块
├── hooks/            # 自定义 Hook(useSmoothScroll、useReveal...)
├── styles/           # 全局样式、主题变量
├── pages/            # 页面路由组件
└── App.jsx           # 应用入口
```

## 核心动效实现位置

| 动效 | 实现文件 |
|---|---|
| 平滑滚动(Lenis) | `src/hooks/useSmoothScroll.js` |
| 滚动进入视口淡入 | `src/components/Reveal.jsx` |
| 视频背景 Hero | `src/sections/Hero.jsx` |
| 文字分行上移 | `src/components/RevealText.jsx` |
| 导航栏滚动收缩 | `src/components/Navbar.jsx` |

## 第 1 阶段完成内容

- [x] 项目骨架 + 全局样式系统
- [x] 导航栏 + 页脚
- [x] 首页:Hero 视频 / 品牌介绍 / 特色项目 / 社区板块
- [x] Lenis 平滑滚动集成
- [x] Framer Motion 滚动触发动画

## 后续阶段(待做)

- [ ] 内页:About / Homes / Community / Homeowner / Career / Contact
- [ ] 图片视差、光标特效等高级交互
