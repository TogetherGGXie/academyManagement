package com.demo.academymanagement.mapper;

import com.baomidou.mybatisplus.plugins.pagination.Pagination;
import com.demo.academymanagement.modal.Notice;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * 代表加油站 Mapper 接口
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface NoticeMapper extends BaseMapper<Notice> {
    List<HashMap<String, Object>> getNoticeList(Pagination pagination,
                                              @Param("keyword") String keyword,
                                              @Param("startTime") Date startTime, @Param("endTime") Date endTime);
}
