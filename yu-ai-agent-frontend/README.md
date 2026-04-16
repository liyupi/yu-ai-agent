# AI智能体应用平台前端

这是一个基于Vue3开发的AI智能体应用平台，包含两个核心应用：AI恋爱大师和AI超级智能体。

## 功能特点

- 💬 **AI恋爱大师**：智能情感顾问，为用户提供恋爱相关的建议和解答
- 🤖 **AI超级智能体**：全能型AI助手，解决各类专业问题

## 技术栈

- Vue3
- Vue Router
- Axios
- SSE (Server-Sent Events)

## 开发说明

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

前端开发服务器默认运行在 `http://localhost:3000` 。

### 构建项目

```bash
npm run build
```

### 本地联调说明

- 开发环境默认请求 `http://localhost:8123/api`
- 生产环境使用相对路径 `/api`，方便和后端部署在同一域名下
- 启动前请先确认后端服务已经运行

### 常用联调顺序

1. 在仓库根目录启动后端服务
2. 进入 `yu-ai-agent-frontend` 执行 `npm run dev`
3. 打开 `http://localhost:3000` 进行本地访问

## 后端接口

项目依赖以下后端接口：

- `/api/ai/love_app/chat/sse` - AI恋爱大师聊天接口
- `/api/ai/manus/chat` - AI超级智能体聊天接口

后端服务默认运行在 `http://localhost:8123`
