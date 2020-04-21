package com.demo.academymanagement.service;

import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Booking;
import com.baomidou.mybatisplus.service.IService;

import java.util.HashMap;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
public interface BookingService extends IService<Booking> {
    Page<HashMap<String, Object>> getMyBooking(Page<HashMap<String, Object>> page, Integer userId);
}
