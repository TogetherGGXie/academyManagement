package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.NewsType;
import com.demo.academymanagement.mapper.NewsTypeMapper;
import com.demo.academymanagement.service.NewsTypeService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 新闻类型 服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@Service
public class NewsTypeServiceImpl extends ServiceImpl<NewsTypeMapper, NewsType> implements NewsTypeService {

}
