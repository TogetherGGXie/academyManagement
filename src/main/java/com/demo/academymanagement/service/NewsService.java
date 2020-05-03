package com.demo.academymanagement.service;

import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.News;
import com.baomidou.mybatisplus.service.IService;

import java.util.HashMap;

/**
 * <p>
 * 新闻信息 服务类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface NewsService extends IService<News> {
    Page<HashMap<String, Object>> getNewsList(Page<HashMap<String, Object>> page, Integer type, String Keyword, String startTime, String endTIme);
}
