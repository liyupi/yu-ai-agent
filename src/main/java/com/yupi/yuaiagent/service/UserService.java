package com.yupi.yuaiagent.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yupi.yuaiagent.model.entity.User;
import com.yupi.yuaiagent.model.vo.LoginUserVO;
import jakarta.servlet.http.HttpServletRequest;

public interface UserService extends IService<User> {
    long userRegister(String userAccount, String userPassword, String checkPassword);
    LoginUserVO userLogin(String userAccount, String userPassword, HttpServletRequest request);
    LoginUserVO getLoginUserVO(User user);
    User getLoginUser(HttpServletRequest request);
    boolean userLogout(HttpServletRequest request);
}
