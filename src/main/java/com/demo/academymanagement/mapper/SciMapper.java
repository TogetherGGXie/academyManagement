package com.demo.academymanagement.mapper;

import com.baomidou.mybatisplus.plugins.pagination.Pagination;
import com.demo.academymanagement.modal.Sci;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * 文章列表（代表履职） Mapper 接口
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface SciMapper extends BaseMapper<Sci> {
    List<HashMap<String, Object>> getSciList(Pagination pagination,
                                                @Param("type") Integer type,@Param("keyword") String keyword,
                                                @Param("startTime") Date startTime, @Param("endTime") Date endTime);
}
