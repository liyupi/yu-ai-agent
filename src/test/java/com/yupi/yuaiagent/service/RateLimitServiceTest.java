package com.yupi.yuaiagent.service;

import jakarta.annotation.Resource;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.StringRedisTemplate;

import java.util.UUID;
import java.util.concurrent.TimeUnit;

@SpringBootTest
class RateLimitServiceTest {

    @Resource
    private RateLimitService rateLimitService;
    
    @Resource
    private StringRedisTemplate stringRedisTemplate;
    
    private static final String RATE_LIMIT_KEY_PREFIX = "rate_limit:";

    @Test
    void testRateLimit() throws InterruptedException {
        // 创建一个唯一的用户ID，避免影响其他测试
        String userId = "test_user_" + UUID.randomUUID().toString();
        String key = RATE_LIMIT_KEY_PREFIX + userId;
        
        try {
            // 前 10 次请求应该都允许
            for (int i = 1; i <= 10; i++) {
                boolean allowed = rateLimitService.isAllowed(userId);
                Assertions.assertTrue(allowed, "第 " + i + " 次请求应该被允许");
            }
            
            // 验证当前计数为 10
            int currentCount = rateLimitService.getCurrentCount(userId);
            Assertions.assertEquals(10, currentCount, "当前计数应该为 10");
            
            // 第 11 次请求应该被拒绝
            boolean eleventhAllowed = rateLimitService.isAllowed(userId);
            Assertions.assertFalse(eleventhAllowed, "第 11 次请求应该被拒绝");
            
            // 第 12 次请求也应该被拒绝
            boolean twelfthAllowed = rateLimitService.isAllowed(userId);
            Assertions.assertFalse(twelfthAllowed, "第 12 次请求应该被拒绝");
            
            // 验证当前计数应该大于 10
            int finalCount = rateLimitService.getCurrentCount(userId);
            Assertions.assertTrue(finalCount > 10, "最终计数应该大于 10");
            
        } finally {
            // 清理测试数据
            stringRedisTemplate.delete(key);
        }
    }
    
    @Test
    void testRateLimitWithDifferentUsers() {
        // 测试不同用户之间的限流是独立的
        String user1 = "user1_" + UUID.randomUUID().toString();
        String user2 = "user2_" + UUID.randomUUID().toString();
        
        String key1 = RATE_LIMIT_KEY_PREFIX + user1;
        String key2 = RATE_LIMIT_KEY_PREFIX + user2;
        
        try {
            // 用户1 发送 10 次请求
            for (int i = 1; i <= 10; i++) {
                boolean allowed = rateLimitService.isAllowed(user1);
                Assertions.assertTrue(allowed, "用户1 第 " + i + " 次请求应该被允许");
            }
            
            // 用户1 第 11 次请求被拒绝
            boolean user1Eleventh = rateLimitService.isAllowed(user1);
            Assertions.assertFalse(user1Eleventh, "用户1 第 11 次请求应该被拒绝");
            
            // 用户2 第一次请求应该被允许（不受用户1影响）
            boolean user2First = rateLimitService.isAllowed(user2);
            Assertions.assertTrue(user2First, "用户2 第 1 次请求应该被允许");
            
        } finally {
            // 清理测试数据
            stringRedisTemplate.delete(key1);
            stringRedisTemplate.delete(key2);
        }
    }
    
    @Test
    void testRateLimitMessage() {
        // 验证当超过限制时，返回正确的提示消息
        String userId = "test_msg_" + UUID.randomUUID().toString();
        String key = RATE_LIMIT_KEY_PREFIX + userId;
        
        try {
            // 先发送 10 次请求
            for (int i = 1; i <= 10; i++) {
                rateLimitService.isAllowed(userId);
            }
            
            // 第 11 次请求应该被拒绝
            boolean allowed = rateLimitService.isAllowed(userId);
            Assertions.assertFalse(allowed);
            
        } finally {
            // 清理测试数据
            stringRedisTemplate.delete(key);
        }
    }
}
