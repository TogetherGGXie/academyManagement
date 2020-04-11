package com.demo.academymanagement.service;

import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Supervisor;
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
public interface SupervisorService extends IService<Supervisor> {
    Page<HashMap<String, Object>> getSupervisors(Page<HashMap<String, Object>> page, Integer type, String keyword);

}
