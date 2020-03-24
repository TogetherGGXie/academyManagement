package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.User;
import com.demo.academymanagement.mapper.UserMapper;
import com.demo.academymanagement.service.UserService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
