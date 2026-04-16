package com.yupi.yuaiagent.demo.invoke;

/**
 * 仅用于测试获取 API Key
 */
public interface TestApiKey {

    // 优先读取环境变量，避免每次运行示例都修改源码
    String API_KEY = resolveApiKey();

    private static String resolveApiKey() {
        String envValue = System.getenv("DASHSCOPE_API_KEY");
        if (envValue == null || envValue.isBlank()) {
            return "修改为你的 API Key";
        }
        return envValue;
    }
}
