package com.yupi.yuaiagent.config;

import com.yupi.yuaiagent.common.ErrorCode;
import com.yupi.yuaiagent.exception.BusinessException;
import com.yupi.yuaiagent.model.entity.User;
import com.yupi.yuaiagent.service.UserService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    @Resource
    private UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 放行OPTIONS请求
        if ("OPTIONS".equals(request.getMethod())) {
            return true;
        }
        // 获取当前登录用户
        try {
            User user = userService.getLoginUser(request);
            if (user == null) {
                 throw new BusinessException(ErrorCode.NOT_LOGIN_ERROR);
            }
        } catch (Exception e) {
             throw new BusinessException(ErrorCode.NOT_LOGIN_ERROR);
        }
        return true;
    }
}
