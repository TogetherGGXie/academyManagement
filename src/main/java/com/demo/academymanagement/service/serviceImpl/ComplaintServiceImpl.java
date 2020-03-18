package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.Complaint;
import com.demo.academymanagement.mapper.ComplaintMapper;
import com.demo.academymanagement.service.ComplaintService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 投诉意见表 服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@Service
public class ComplaintServiceImpl extends ServiceImpl<ComplaintMapper, Complaint> implements ComplaintService {

}
