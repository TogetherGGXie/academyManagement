package com.demo.academymanagement.mapper;

import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;
import com.demo.academymanagement.modal.Supervisor;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface SupervisorMapper extends BaseMapper<Supervisor> {
    List<HashMap<String, Object>> getSupervisors(Pagination pagination,
                                                 @Param("type") Integer type, @Param("keyword") String keyword);

}
