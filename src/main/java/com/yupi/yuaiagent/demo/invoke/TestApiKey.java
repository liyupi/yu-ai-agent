package com.yupi.yuaiagent.demo.invoke;

/**
 * 仅用于测试获取 API Key
 */
public final class TestApiKey {

    private TestApiKey() {
    }

    public static String getApiKey() {
        return System.getenv().getOrDefault("YU_AI_AGENT_DEMO_API_KEY", "REPLACE_ME");
    }
}
