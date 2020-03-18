package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.News;
import com.demo.academymanagement.mapper.NewsMapper;
import com.demo.academymanagement.service.NewsService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 新闻信息 服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@Service
public class NewsServiceImpl extends ServiceImpl<NewsMapper, News> implements NewsService {

}
