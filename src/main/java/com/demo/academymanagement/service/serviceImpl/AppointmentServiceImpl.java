package com.demo.academymanagement.service.serviceImpl;

import com.demo.academymanagement.modal.Appointment;
import com.demo.academymanagement.mapper.AppointmentMapper;
import com.demo.academymanagement.service.AppointmentService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 代表预约记录 服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@Service
public class AppointmentServiceImpl extends ServiceImpl<AppointmentMapper, Appointment> implements AppointmentService {

}
