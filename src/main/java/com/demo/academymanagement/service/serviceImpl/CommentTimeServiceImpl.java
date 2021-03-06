package com.demo.academymanagement.service.serviceImpl;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.CommentTime;
import com.demo.academymanagement.mapper.CommentTimeMapper;
import com.demo.academymanagement.service.CommentTimeService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@Service
public class CommentTimeServiceImpl extends ServiceImpl<CommentTimeMapper, CommentTime> implements CommentTimeService {

    @Override
    public CommentTime getCommentTime() {
        return this.selectOne(new EntityWrapper<CommentTime>().
                lt("start_time", new Date()).gt("end_time", new Date()));
    }

    @Override
    public Page<HashMap<String, Object>> getCommentTimeList(Page<HashMap<String, Object>> page, Integer type, String Keyword, String startTime, String endTIme) {
        return null;
    }
}
