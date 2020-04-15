package com.demo.academymanagement.service;

import com.demo.academymanagement.modal.User;
import com.baomidou.mybatisplus.service.IService;

import java.util.HashMap;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface UserService extends IService<User> {
    HashMap<String, Object> hasBind(Integer userId);
}
