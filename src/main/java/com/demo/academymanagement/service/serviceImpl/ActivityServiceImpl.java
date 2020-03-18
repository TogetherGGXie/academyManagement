package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.Activity;
import com.demo.academymanagement.mapper.ActivityMapper;
import com.demo.academymanagement.service.ActivityService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 活动信息表 服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@Service
public class ActivityServiceImpl extends ServiceImpl<ActivityMapper, Activity> implements ActivityService {

}
