package com.demo.academymanagement.service;

import com.demo.academymanagement.modal.NewsStatis;
import com.baomidou.mybatisplus.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface NewsStatisService extends IService<NewsStatis> {
    Boolean updataNewsStatis(Integer newsId);
}
