package com.yupi.yuaiagent.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yupi.yuaiagent.model.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {

}
