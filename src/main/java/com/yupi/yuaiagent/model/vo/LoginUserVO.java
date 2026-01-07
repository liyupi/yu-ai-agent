package com.yupi.yuaiagent.model.vo;

import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class LoginUserVO implements Serializable {
    private Long id;
    private String userAccount;
    private String userName;
    private String userAvatar;
    private String userRole;
    private Date createTime;
    private Date updateTime;
    private String token;
    private static final long serialVersionUID = 1L;
}
