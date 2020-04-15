package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.User;
import com.demo.academymanagement.mapper.UserMapper;
import com.demo.academymanagement.service.UserService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.HashMap;

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

    @Override
    public HashMap<String, Object> hasBind(Integer userId) {
        User user = this.selectById(userId);
        HashMap<String, Object> res = new HashMap<>();
        if (user == null || user.getStudentId() == null || user.getStudentId() == "") {
            res.put("res", false);
            return res;
        } else {
            res.put("res", true);
            if (user.getStudentId().length() == 10) {
                res.put("identity", "student");
            } else {
                res.put("identity", "teacher");
            }
            return res;
        }
    }
}
