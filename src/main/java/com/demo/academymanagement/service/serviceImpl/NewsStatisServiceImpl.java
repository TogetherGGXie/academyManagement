package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.NewsStatis;
import com.demo.academymanagement.mapper.NewsStatisMapper;
import com.demo.academymanagement.service.NewsStatisService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@Service
public class NewsStatisServiceImpl extends ServiceImpl<NewsStatisMapper, NewsStatis> implements NewsStatisService {

    @Override
    public Boolean updataNewsStatis(Integer newsId) {
        NewsStatis ns = this.selectById(newsId);
        if (ns == null) {
            ns = new NewsStatis();
            ns.setPageView(1);
            ns.setNewsId(newsId);
            ns.setCreateTime(new Date());
            ns.setLastUpdTime(new Date());
            this.insert(ns);
            return true;
        } else {
            ns.setPageView(ns.getPageView() + 1);
            ns.setLastUpdTime(new Date());
            this.updateById(ns);
            return true;
        }
    }
}
