# 我的网站

一个现代化的企业网站，使用React、TypeScript和Material-UI构建。

## 功能特性

- 🎨 **现代化设计** - 使用Material-UI组件库，提供美观的用户界面
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **流畅动画** - 使用Framer Motion提供流畅的页面动画
- 🚀 **快速加载** - 优化的代码结构和性能
- 🔧 **易于维护** - 使用TypeScript提供类型安全
- 📄 **多页面结构** - 包含首页、关于我们、服务、联系我们等页面

## 技术栈

- **React 18** - 用户界面库
- **TypeScript** - 类型安全的JavaScript
- **Material-UI (MUI)** - React UI组件库
- **React Router** - 客户端路由
- **Framer Motion** - 动画库
- **Emotion** - CSS-in-JS解决方案

## 页面结构

- **首页** - 公司介绍、特色服务、统计数据
- **关于我们** - 公司故事、团队介绍、价值观
- **服务** - 详细的服务列表和工作流程
- **联系我们** - 联系表单和联系信息

## 开始使用

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

网站将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
npm run build
```

### 运行测试

```bash
npm test
```

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Navbar.tsx      # 导航栏组件
│   └── Footer.tsx      # 页脚组件
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页
│   ├── About.tsx       # 关于我们
│   ├── Services.tsx    # 服务页面
│   └── Contact.tsx     # 联系页面
├── App.tsx             # 主应用组件
└── index.tsx           # 应用入口
```

## 自定义配置

### 主题配置

在 `src/App.tsx` 中可以自定义主题颜色和样式：

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 主色调
    },
    secondary: {
      main: '#dc004e', // 辅助色
    },
  },
});
```

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.tsx` 中添加路由配置
3. 在 `src/components/Navbar.tsx` 中添加导航链接

## 部署

### 构建生产版本

```bash
npm run build
```

### 部署到静态托管服务

构建完成后，`build` 文件夹中的文件可以部署到任何静态托管服务，如：

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- 等等

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 许可证

MIT License

## 联系方式

如有任何问题，请通过以下方式联系：

- 邮箱: info@mywebsite.com
- 电话: +86 123 4567 8900
- 地址: 北京市朝阳区某某街道123号
