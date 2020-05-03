package com.demo.academymanagement.service;

import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Notice;
import com.baomidou.mybatisplus.service.IService;

import java.util.HashMap;

/**
 * <p>
 * 代表加油站 服务类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface NoticeService extends IService<Notice> {
    Page<HashMap<String, Object>> getNoticeList(Page<HashMap<String, Object>> page, String Keyword, String startTime, String endTIme);
}
