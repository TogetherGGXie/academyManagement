package com.demo.academymanagement.service;

import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.CommentTime;
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
public interface CommentTimeService extends IService<CommentTime> {
    CommentTime getCommentTime();
    Page<HashMap<String, Object>> getCommentTimeList(Page<HashMap<String, Object>> page, Integer type, String Keyword, String startTime, String endTIme);
}
