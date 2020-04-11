package com.demo.academymanagement.service.serviceImpl;

import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Supervisor;
import com.demo.academymanagement.mapper.SupervisorMapper;
import com.demo.academymanagement.service.SupervisorService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@Service
public class SupervisorServiceImpl extends ServiceImpl<SupervisorMapper, Supervisor> implements SupervisorService {

    @Autowired
    private SupervisorMapper supervisorMapper;

    @Override
    public Page<HashMap<String, Object>> getSupervisors(Page<HashMap<String, Object>> pager, Integer type, String keyword) {
        Page<HashMap<String, Object>> page = new Page<>(pager.getCurrent(),pager.getSize());
        List<HashMap<String, Object>> res = supervisorMapper.getSupervisors(page, type, keyword);
        return page.setRecords(res);
    }

}
