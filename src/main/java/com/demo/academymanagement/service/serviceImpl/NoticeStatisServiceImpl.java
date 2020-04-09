package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.NewsStatis;
import com.demo.academymanagement.modal.NoticeStatis;
import com.demo.academymanagement.mapper.NoticeStatisMapper;
import com.demo.academymanagement.service.NoticeStatisService;
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
public class NoticeStatisServiceImpl extends ServiceImpl<NoticeStatisMapper, NoticeStatis> implements NoticeStatisService {

    @Override
    public Boolean updataNoticeStatis(Integer noticeId) {
        NoticeStatis ns = this.selectById(noticeId);
        if (ns == null) {
            ns = new NoticeStatis();
            ns.setPageView(1);
            ns.setNoticeId(noticeId);
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
