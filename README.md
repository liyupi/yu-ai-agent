# AI 超级智能体项目

> 作者：[程序员鱼皮](https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah)
>
> 本项目为教学项目，提供完整视频教程 + 文字教程 + 简历写法 + 面试题解 + 答疑服务，帮你提升项目能力，给简历增加亮点！
>
> ⭐️ 加入项目系列学习：[加入编程导航](https://www.codefather.cn/vip)


## 项目介绍

> 视频介绍：https://www.bilibili.com/video/BV1UoLezKEbm

这是一套以 **AI 开发实战** 为核心的项目教程，将通过开发 **AI 恋爱大师应用 + 拥有自主规划能力的超级智能体**，带大家掌握新时代程序员必知必会的 AI 核心概念、AI 实用工具、AI 编程技术、AI 框架原理、AI 调优技巧，大幅增加求职的竞争力！

![](https://pic.yupi.icu/1/8052592c-97ce-4568-b82e-6153924a053c.png)

`AI 恋爱大师应用` 可以依赖 AI 大模型解决用户的情感问题，支持多轮对话、基于自定义知识库进行问答、自主调用工具和 MCP 服务完成任务，比如调用地图服务获取附近地点并制定约会计划。

![](https://pic.yupi.icu/1/1745225631067-44a111e1-1032-4f1c-bd69-9f08a59a654b.png)

此外，还会手把手带大家完成基于 ReAct 模式的 `自主规划智能体 YuManus` ，可以利用网页搜索、资源下载和 PDF 生成工具，帮用户制定完整的约会计划并生成文档：

![](https://pic.yupi.icu/1/1745224663573-04af8f65-2da4-4ef9-8033-a179e703f9c4.png)

当然，学会这个项目后，你不仅能开发 AI 恋爱大师，而是能灵活开发各种复杂的 AI 应用，尽情发挥自己的想象力吧！



## 为什么要带做这个项目？

本项目选题新颖、业务真实，区别于增删改查的 “烂大街” 项目，鱼皮会带你实战大量新技术和企业应用场景，用一套实战教程将程序员必知必会的 **AI 技术一网打尽**，帮你成为 AI 时代企业的香饽饽，给你的简历和求职大幅增加竞争力。

鱼皮给大家讲的都是 **通用的项目开发方法和架构设计套路**，从这个项目中你将学到：

- 主流 AI 应用平台的使用
- AI 大模型的 4 种接入方式
- AI 开发框架（Spring AI + LangChain4j）
- AI 大模型本地部署
- Prompt 工程和优化技巧
- Spring AI 核心特性：如自定义 Advisor、对话记忆、结构化输出
- RAG 知识库实战、原理和调优技巧
- PgVector 向量数据库 + 云数据库服务
- Tool Calling 工具调用实战及原理
- MCP 模型上下文协议和服务开发
- AI 智能体 Manus 原理和自主开发
- AI 服务化和 Serverless 部署上线
- 各种新概念：如多模态、智能体工作流、A2A 协议、大模型评估等

举个例子，RAG 核心特性实战及全链路调优：

![](https://pic.yupi.icu/1/1746250760306-3b545556-59df-43a9-b843-b73ec9b5a867.png)

项目还有其他优势：

- AI 云平台和编程双端实战，不仅会用 AI 服务，还会自己写！
- 基于官方文档讲解最新的 AI 技术，细致入微，手撕文档和源码！
- 分享大量 AI 扩展知识和编程技巧，掌握最佳实践！

鱼皮带你手撕开源框架 OpenManus 的源码：

![](https://pic.yupi.icu/1/ae36dd94-e87e-4dfe-ae31-81a6cc32c9e8.png)

此外，还能学会很多作图、思考问题、对比方案的方法，提升排查问题、自主解决 Bug 的能力。



### 鱼皮系列项目优势

鱼皮的原创项目以 **实战** 为主，用 **全程直播** 的方式 **从 0 到 1** 带做，从需求分析、技术选型、项目设计、项目初始化、Demo 编写、前后端开发实现、项目优化、部署上线等，每个环节我都 **从理论到实践** 给大家讲的明明白白、每个细节都不放过！

比起看网上的教程学习，鱼皮项目系列的优势：从学知识 => 实践项目 => 复习笔记 => 项目答疑 => 简历写法 => 面试题解的一条龙服务：

![](https://pic.yupi.icu/1/1714011299057-cb31704a-6c33-410f-888d-74c2d7e1c6e4.png)

编程导航已有 **10 多套项目教程！**每个项目的学习重点不同，几乎全都是前端 + 后端的 **全栈项目** 。

可以看看大家的真实评价，很多小伙伴通过跟我做项目，提升了技术并拿到了 offer！

![](https://pic.yupi.icu/1/image-20250422160549546.png)

往期项目介绍视频：[https://bilibili.com/video/BV1YvmbYbEgS](https://www.bilibili.com/video/BV1YvmbYbEgS/)


## 项目功能梳理

项目中，我们将开发一个 AI 恋爱大师应用、一个拥有自主规划能力的超级智能体，以及一系列工具和 MCP 服务。

具体需求如下：

- AI 恋爱大师应用：用户在恋爱过程中难免遇到各种难题，让 AI 为用户提供贴心情感指导。支持多轮对话、对话记忆持久化、RAG 知识库检索、工具调用、MCP 服务调用。
- AI 超级智能体：可以根据用户的需求，自主推理和行动，直到完成目标。
- 提供给 AI 的工具：包括联网搜索、文件操作、网页抓取、资源下载、终端操作、PDF 生成。
- AI MCP 服务：可以从特定网站搜索图片。

![](https://github.com/user-attachments/assets/a2332c85-e659-412c-8d9e-b6476d98c97e)




## 用哪些技术？

项目以 Spring AI 开发框架实战为核心，涉及到多种主流 AI 客户端和工具库的运用。

- Java 21 + Spring Boot 3 框架
- ⭐️ Spring AI + LangChain4j
- ⭐️ RAG 知识库
- ⭐️ PGvector 向量数据库
- ⭐ Tool Calling 工具调用 
- ⭐️ MCP 模型上下文协议
- ⭐️ ReAct Agent 智能体构建
- ⭐️ Serverless 计算服务
- ⭐️ AI 大模型开发平台百炼
- ⭐️ Cursor AI 代码生成
- ⭐️ SSE 异步推送
- 第三方接口：如 SearchAPI / Pexels API
- Ollama 大模型部署
- 工具库如：Kryo 高性能序列化 + Jsoup 网页抓取 + iText PDF 生成 + Knife4j 接口文档


RAG 核心特性实战：

![RAG 核心特性实战](https://pic.yupi.icu/1/1745224085267-57afea3b-2de9-44a0-8f53-49e338c0e6b9.png)

项目架构设计图：

![AI 智能体架构图](https://pic.yupi.icu/1/AI%E6%99%BA%E8%83%BD%E4%BD%93%E6%9E%B6%E6%9E%84%E5%9B%BE.png)


## 第一期免费看

第一期是公开讲解，给大家介绍项目背景、项目功能、技术选型、架构设计、教程计划等。

视频地址：https://www.bilibili.com/video/BV1Eq5DzcE9o


## 加入项目学习

编程导航已有 **10 多套项目教程！** 每个项目的学习重点不同，几乎全都是前端 + 后端的 **全栈** 项目 。

![](https://pic.yupi.icu/1/image-20250120113601323-20250422160856617.png)

欢迎加入 [编程导航](https://mp.weixin.qq.com/s/I1oD6pAaWBvGLyFDT9AgvA?token=1925632390&lang=zh_CN)，加入后不仅可以全程跟学本项目，往期 [10+ 套原创项目教程](https://mp.weixin.qq.com/s/omIazLMQlTo9M3jFFH7NzQ?token=70787607&lang=zh_CN) 也都可以无限回看。还能享受更多原创技术资料、学习和求职指导、上百场面试回放视频，开启你的编程起飞之旅~

🧧 助力新项目学习，给大家发放 **限时编程导航优惠券**，扫码即可领券加入。加入三天内不满意可全额退款，欢迎加入体验，名额有限，速来学习！

<img width="404" alt="image" src="https://github.com/user-attachments/assets/56411098-b60e-4267-8ba2-4ebc5d416afc" />


1 天不到 1 块钱，绝对是对自己最值的投资！成为编程导航会员后，可以解锁 10 多套项目的教程和资料，PC 网站和 APP 都可以学习，如图：

![](https://pic.yupi.icu/1/image-20250120113756426-20250422160856746.png)

## 准备工作

### AI 基础知识

请先观看《程序员鱼皮 AI 指南》，了解 AI 基础知识和学习路线，后续在项目中实战时会有个大致的印象，便于学习理解。

⭐️ 推荐观看视频版：[https://www.bilibili.com/video/BV1i9Z8YhEja](https://www.bilibili.com/video/BV1i9Z8YhEja/)

文字版：https://www.codefather.cn/course/1907378983347892226

### 新建代码仓库

利用 GitHub 搭建开源代码仓库，点 star 的都是精神股东

代码仓库：https://github.com/liyupi/yu-ai-agent

### AI 学习资源

建议大家在学习 AI 项目的过程中，持续阅读 AI 大模型相关的面试题，巩固知识点。这块鱼皮已经帮大家拿捏了，我们的程序员面试刷题神器面试鸭搞了个 [AI 大模型面试题库](https://www.mianshiya.com/bank/1906189461556076546)，建议没事就阅读一些题目来学习学习。

![](https://pic.yupi.icu/1/1745394632244-f7bd4196-78c7-48ad-af8f-c0319bf8c17a.png)

而且由于 AI 技术日新月异，建议大家平时多关注 AI 相关的资讯动态，比如 [鱼皮开源的 AI 知识库](https://github.com/liyupi/ai-guide)，汇总了热门的 AI 大模型和工具，比如 Deepseek 使用指南、提示词技巧分享、知识干货、应用场景、AI 变现、行业资讯、教程资源等一系列内容，帮助你快速掌握 AI 技术，走在时代前沿。

![](https://pic.yupi.icu/1/1745385315485-1ca9123b-eb99-4e47-a44e-675b06b307d9.png)

## 学习大纲

第 1 期：项目总览

- 项目介绍
- 项目优势
- 项目功能梳理
- 技术选型
- 架构设计
- AI 学习路线

- - AI 应用平台的使用（Dify）
  - AI 常用工具
  - AI 编程技巧
  - AI 编程技术

- 学习大纲



第 2 期：AI 大模型接入

- AI 大模型概念
- 接入 AI 大模型（3 种方式）
- 后端项目初始化
- 程序调用 AI 大模型（4 种方式）
- 本地部署 AI 大模型
- Spring AI 调用本地大模型



第 3 期：AI 应用开发

- Prompt 工程概念
- Prompt 优化技巧
- AI 恋爱大师应用需求分析
- AI 恋爱大师应用方案设计
- Spring AI ChatClient / Advisor / ChatMemory 特性
- 多轮对话 AI 应用开发
- Spring AI 自定义 Advisor
- Spring AI 结构化输出 - 恋爱报告功能
- Spring AI 对话记忆持久化
- Spring AI Prompt 模板特性
- 多模态概念和开发



第 4 期：RAG 知识库基础

- AI 恋爱知识问答需求分析
- RAG 概念（重点理解核心步骤）
- RAG 实战：Spring AI + 本地知识库
- RAG 实战：Spring AI + 云知识库服务



第 5 期：RAG 知识库进阶

- RAG 核心特性

- - 文档收集和切割（ETL）
  - 向量转换和存储（向量数据库）
  - 文档过滤和检索（文档检索器）
  - 查询增强和关联（上下文查询增强器）

- RAG 最佳实践和调优
- 检索策略
- 大模型幻觉



第 6 期：工具调用

- 工具概念
- Spring AI 工具开发
- 主流工具开发

- - 文件操作
  - 联网搜索
  - 网页抓取
  - 终端操作
  - 资源下载
  - PDF 生成

- 工具进阶知识（原理和高级特性）



第 7 期：MCP

- MCP 概念
- 使用 MCP（3 种方式）
- Spring AI MCP 开发模式
- Spring AI MCP 开发实战 - 图片搜索 MCP
- MCP 开发最佳实践
- 部署 MCP
- MCP 安全问题



第 8 期：AI 智能体构建

- AI 智能体概念
- 智能体实现关键
- 使用 AI 智能体（2 种方式）
- 自主规划智能体介绍
- OpenManus 实现原理
- 自主实现 Manus 智能体
- 智能体工作流



第 9 期：AI 服务化

- AI 应用接口开发（SSE）
- AI 智能体接口开发
- AI 生成前端代码
- AI 服务 Serverless 部

## 安全配置（新增）

为避免密钥硬编码并提升接口安全基线，项目新增了以下约定：

1. 所有模型/搜索 Key 通过环境变量注入：

- `DASHSCOPE_API_KEY`
- `SEARCH_API_KEY`
- `YU_AI_AGENT_DEMO_API_KEY`

2. `/ai/**` 接口默认启用 API Key 鉴权：

- 服务端环境变量：`YU_AI_AGENT_API_KEY`
- 请求头名称：`X-API-Key`

示例请求：

```bash
curl -H "X-API-Key: $YU_AI_AGENT_API_KEY" \
  "http://localhost:8123/api/ai/love_app/chat/sync?message=hello&chatId=demo"
```

## Baseline Maintenance

### Environment

- Put runtime credentials in environment variables.
- Use `.env.example` as the configuration template.

### CI

- `baseline-ci.yml` provides a unified pipeline with `lint + build + test + secret scan`.

### Repo Hygiene

- Keep generated files (`dist/`, `build/`, `__pycache__/`, `.idea/`, `.DS_Store`) out of version control.


## Contributor Quick Verification
<!-- codex-batch30-readme -->

Before opening a PR, run these quick checks locally:

- Build: `./mvnw -q -DskipTests package`
- Tests: `./mvnw -q test`
- Keep changes focused: one topic per PR with a clear title

