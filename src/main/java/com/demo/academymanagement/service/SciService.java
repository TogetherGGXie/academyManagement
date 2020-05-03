package com.demo.academymanagement.service;

import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Sci;
import com.baomidou.mybatisplus.service.IService;

import java.util.HashMap;

/**
 * <p>
 * 文章列表（代表履职） 服务类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface SciService extends IService<Sci> {
    Page<HashMap<String, Object>> getSciList(Page<HashMap<String, Object>> page, Integer type, String Keyword, String startTime, String endTIme);
}
