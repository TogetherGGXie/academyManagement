package com.demo.academymanagement.mapper;

import com.baomidou.mybatisplus.plugins.pagination.Pagination;
import com.demo.academymanagement.modal.News;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * 新闻信息 Mapper 接口
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface NewsMapper extends BaseMapper<News> {
    List<HashMap<String, Object>> getNewsList(Pagination pagination,
                                              @Param("type") Integer type, @Param("keyword") String keyword,
                                              @Param("startTime") Date startTime, @Param("endTime") Date endTime);
}
