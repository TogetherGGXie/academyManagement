package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.NoticeStatis;
import com.demo.academymanagement.modal.Sci;
import com.demo.academymanagement.modal.SciStatis;
import com.demo.academymanagement.mapper.SciStatisMapper;
import com.demo.academymanagement.service.SciStatisService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-04-07
 */
@Service
public class SciStatisServiceImpl extends ServiceImpl<SciStatisMapper, SciStatis> implements SciStatisService {

    @Override
    public Boolean updataSciStatis(Integer sciId) {
        SciStatis ss = this.selectById(sciId);
        if (ss == null) {
            ss = new SciStatis();
            ss.setPageView(1);
            ss.setSciId(sciId);
            ss.setCreateTime(new Date());
            ss.setLastUpdTime(new Date());
            this.insert(ss);
            return true;
        } else {
            ss.setPageView(ss.getPageView() + 1);
            ss.setLastUpdTime(new Date());
            this.updateById(ss);
            return true;
        }
    }
}
