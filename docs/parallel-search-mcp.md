# 使用 Parallel Search MCP

[Parallel Search MCP](https://docs.parallel.ai/integrations/mcp/search-mcp) 提供网页搜索 `web_search` 和页面内容获取 `web_fetch`。例如，先搜索约会地点的近期活动，再读取活动页面，核对日期、地址和预约要求。匿名访问无需 Parallel 账号或 API Key，搜索使用 Fast 模式，免费额度有使用限制。

本指南通过现有的 `LoveApp.doChatWithMcp` 学习示例接入。项目使用 Spring AI 1.0，其 MCP 客户端支持 stdio 和 SSE；这里使用固定版本的 [mcp-remote](https://github.com/geelen/mcp-remote) 将远程 HTTP MCP 服务桥接为 stdio，无需升级 Spring AI。不要把 `https://search.parallel.ai/mcp` 填入旧版客户端的 `sse.connections`。

## 1. 准备环境

- 安装 Node.js 22 LTS，并确保启动 Java 应用的环境能找到 `node` 和 `npx`。
- 如果调用 `LoveApp`，仍需完成项目原有的 Java 21 和模型配置。无需填写 Parallel 的 API Key；这不代替 DashScope 等模型服务的凭据。
- 首次运行 `npx` 会下载 `mcp-remote@0.15.1`，需要访问 npm 和 `https://search.parallel.ai`。

在启动应用的同一个终端检查：

```sh
node --version
npx --version
```

## 2. 按需启用配置

项目根目录下的 [mcp-servers-parallel.json](mcp-servers-parallel.json) 是独立的 stdio 配置示例，只连接 Parallel，不会启动高德或图片搜索服务。在 Windows 上，将其中的 `"command": "npx"` 改为 `"command": "npx.cmd"`。参数中的 `User-Agent` 用于标识本项目的请求，无需添加 `Authorization`。

在已有的 `src/main/resources/application-local.yml` 中，把以下配置合并到对应的 `spring.ai` 节点下，不要覆盖已有的模型、数据库或其他配置。默认激活的 profile 是 `local`：

```yaml
spring:
  ai:
    mcp:
      client:
        request-timeout: 60s
        stdio:
          servers-configuration: file:./docs/mcp-servers-parallel.json
```

从项目根目录启动应用，使 `file:./docs/...` 指向此仓库的 `docs` 目录。在 IDE 中也应把工作目录设为项目根目录；其他工作目录可使用绝对 `file:` 路径。首次下载较慢时，可先在终端运行示例 JSON 中的 `npx` 命令预下载，看到连接成功后按 Ctrl+C 退出，再启动应用。

如果已经配置了其他 MCP 服务，应将示例中的 `parallel-search` 条目合并到自己使用的 JSON 的 `mcpServers` 对象中，保留其他条目，并让 `servers-configuration` 继续指向合并后的文件。已有的 `sse.connections` 是另一组连接，也会被客户端启动；只尝试 Parallel 时不要额外启用它们。

本指南不会修改 `application.yml`、原有的 `mcp-servers.json` 或 `WebSearchTool`。`application-local.yml` 已被 Git 忽略，请勿提交包含个人凭据的本地配置。

## 3. 从现有 MCP 示例调用

`LoveApp.doChatWithMcp` 已将 `ToolCallbackProvider` 传入 `ChatClient`。在现有的 `LoveAppTest.doChatWithMcp` 测试中，将图片搜索提示词替换为下面的提示词，或在自己的 Spring 调用代码中使用：

```java
String message = "请使用 web_search 查找上海本周末适合情侣的展览，"
        + "再使用 web_fetch 读取来源页面，列出活动日期、地址、预约要求和来源链接。"
        + "如果没有可靠结果，请说明，不要编造。";
String answer = loveApp.doChatWithMcp(message, java.util.UUID.randomUUID().toString());
```

完成原有应用所需的模型等配置后，可以仅运行该 MCP 测试方法：

```sh
sh mvnw -Dtest=LoveAppTest#doChatWithMcp test
```

Windows 使用 `mvnw.cmd -Dtest=LoveAppTest#doChatWithMcp test`。这会实际调用模型和远程工具，可能产生模型费用。模型决定是否调用工具；检查工具调用记录和返回的来源链接，不应仅凭最终文字判断搜索成功。

当前前端的恋爱聊天接口调用的是基础对话方法，YuManus 使用的是 `allTools`，均未接入此 MCP 方法。因此仅启用配置不会让前端或 YuManus 自动使用 Parallel。

## 排查问题和停用

- 找不到 `npx`：确认 Node.js 已安装，IDE/Java 进程继承了更新后的 `PATH`；Windows 检查 `npx.cmd`。
- 启动超时：先检查 npm 下载和网络连通性，再检查工作目录和配置文件路径。
- 找不到工具：确认启用了正确的 profile，`servers-configuration` 指向包含 `parallel-search` 的文件，并且调用的是 `doChatWithMcp`。
- 服务返回额度限制：等待额度恢复，避免立即循环重试；错误响应不代表搜索成功。需要更高额度时，参阅 Parallel 的认证配置说明。
- 停用：从本地配置中移除该 stdio 配置引用，或从合并的 JSON 中移除 `parallel-search`，保留其他服务设置。

配置字段说明见 [Spring AI 1.0 MCP 客户端文档](https://docs.spring.io/spring-ai/reference/1.0/api/mcp/mcp-client-boot-starter-docs.html)。
