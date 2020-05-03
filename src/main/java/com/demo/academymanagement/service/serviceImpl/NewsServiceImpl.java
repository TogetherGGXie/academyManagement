package com.demo.academymanagement.service.serviceImpl;

import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.News;
import com.demo.academymanagement.mapper.NewsMapper;
import com.demo.academymanagement.service.NewsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.demo.academymanagement.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * 新闻信息 服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@Service
public class NewsServiceImpl extends ServiceImpl<NewsMapper, News> implements NewsService {

    @Autowired
    private NewsMapper newsMapper;
    @Override
    public Page<HashMap<String, Object>> getNewsList(Page<HashMap<String, Object>> pager, Integer type, String keyword, String startTime, String endTime) {
        Page<HashMap<String, Object>> page = new Page<>(pager.getCurrent(),pager.getSize());
        Date sTime = startTime == null ? null : DateUtil.strToDate(startTime.concat(" 00:00:00"));
        Date eTime = endTime == null ? null : DateUtil.strToDate(endTime.concat(" 23:59:59"));
        List<HashMap<String, Object>> records = newsMapper.getNewsList(page, type, keyword, sTime, eTime);
        return page.setRecords(records);
    }
}
