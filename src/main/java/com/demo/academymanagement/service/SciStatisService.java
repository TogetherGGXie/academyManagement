package com.demo.academymanagement.service;

import com.demo.academymanagement.modal.SciStatis;
import com.baomidou.mybatisplus.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-04-07
 */
public interface SciStatisService extends IService<SciStatis> {
    Boolean updataSciStatis(Integer sciId);
}
