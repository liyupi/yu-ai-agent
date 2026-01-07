package com.yupi.yuaiagent.model.dto.user;

import lombok.Data;
import java.io.Serializable;

@Data
public class UserLoginRequest implements Serializable {
    private String userAccount;
    private String userPassword;
    private static final long serialVersionUID = 1L;
}
