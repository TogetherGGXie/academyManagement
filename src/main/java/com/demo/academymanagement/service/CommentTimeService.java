package com.demo.academymanagement.service;

import com.demo.academymanagement.modal.CommentTime;
import com.baomidou.mybatisplus.service.IService;

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
}
