package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.Admin;
import com.demo.academymanagement.mapper.AdminMapper;
import com.demo.academymanagement.service.AdminService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 管理员信息 服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@Service
public class AdminServiceImpl extends ServiceImpl<AdminMapper, Admin> implements AdminService {

}
