package com.demo.academymanagement.service.serviceImpl;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Booking;
import com.demo.academymanagement.mapper.BookingMapper;
import com.demo.academymanagement.service.BookingService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@Service
public class BookingServiceImpl extends ServiceImpl<BookingMapper, Booking> implements BookingService {

    @Autowired
    private BookingMapper bookingMapper;
    @Override
    public Page<HashMap<String, Object>> getMyBooking(Page<HashMap<String, Object>> pager, Integer userId) {
        Page<HashMap<String, Object>> page = new Page<>(pager.getCurrent(),pager.getSize());
        List<HashMap<String, Object>> res = bookingMapper.getMyBooking(page, userId);
        List<Booking> result = this.selectList(new EntityWrapper<Booking>().eq("user_id",userId));
        System.out.println(res);
        System.out.println(result);
        return page.setRecords(res);
    }
}
