package com.yupi.yuaiagent.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import jakarta.annotation.Resource;
import java.util.concurrent.TimeUnit;

@Service
@Slf4j
public class RateLimitService {

    @Resource
    private StringRedisTemplate stringRedisTemplate;

    private static final String RATE_LIMIT_KEY_PREFIX = "rate_limit:";
    private static final int MAX_REQUESTS_PER_MINUTE = 10;
    private static final int TTL_SECONDS = 60;

    /**
     * 检查用户是否超过限流限制
     *
     * @param userId 用户ID
     * @return 如果超过限制返回 false，否则返回 true
     */
    public boolean isAllowed(String userId) {
        String key = RATE_LIMIT_KEY_PREFIX + userId;
        
        try {
            // 增加计数
            Long count = stringRedisTemplate.opsForValue().increment(key);
            
            // 如果是第一次请求，设置过期时间
            if (count != null && count == 1) {
                stringRedisTemplate.expire(key, TTL_SECONDS, TimeUnit.SECONDS);
            }
            
            // 检查是否超过限制
            boolean allowed = count != null && count <= MAX_REQUESTS_PER_MINUTE;
            
            if (!allowed) {
                log.warn("用户 {} 超过限流限制，当前计数: {}", userId, count);
            }
            
            return allowed;
        } catch (Exception e) {
            // 如果 Redis 不可用，默认允许请求（降级处理）
            log.error("检查限流时发生错误，用户: {}, 错误: {}", userId, e.getMessage(), e);
            return true;
        }
    }
    
    /**
     * 获取用户当前的请求计数
     *
     * @param userId 用户ID
     * @return 当前计数，如果没有则返回 0
     */
    public int getCurrentCount(String userId) {
        String key = RATE_LIMIT_KEY_PREFIX + userId;
        try {
            String countStr = stringRedisTemplate.opsForValue().get(key);
            return countStr != null ? Integer.parseInt(countStr) : 0;
        } catch (Exception e) {
            log.error("获取用户限流计数时发生错误，用户: {}, 错误: {}", userId, e.getMessage(), e);
            return 0;
        }
    }
}
