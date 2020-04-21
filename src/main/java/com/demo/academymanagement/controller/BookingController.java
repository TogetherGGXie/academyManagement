package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Booking;
import com.demo.academymanagement.modal.User;
import com.demo.academymanagement.service.BookingService;
import com.demo.academymanagement.service.UserService;
import com.demo.academymanagement.util.Result;
import com.sun.org.apache.xpath.internal.operations.Bool;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;
import java.awt.print.Book;
import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@RequestMapping("/booking")
@Api("会议预约管理")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private UserService userService;

    @ApiOperation("预约会议")
    @PostMapping("/book")
    public Result book(HttpServletRequest request,
                       @RequestParam(name = "roomId") Integer roomId,
                       @RequestParam(name = "startTime") String startTime,
                       @RequestParam(name = "endTime") String endTime) {
        User user = (User)request.getSession().getAttribute("user");
        HashMap res = userService.hasBind(user.getUserId());
        if ((Boolean)res.get("res") == false) {
            return new Result(-1, "暂未绑定账号！", null);
        } else if (!res.get("identity").toString().equals("teacher")) {
            return new Result(-1, "您无权限！", null);
        }
        if (startTime == null || startTime == "" || endTime == null || endTime == "") {
           return new Result(-1, "请求参数有误");
        }
        Date sTime = this.strToDate(startTime);
        Date eTime = this.strToDate(endTime);
        List<Booking> exists = bookingService.selectList(new EntityWrapper<Booking>().lt("start_time",sTime)
                                                        .gt("end_time", eTime).eq("status", 1));
        if (exists.size() != 0) {
            return new Result(-1, "该时间冲突", null);
        }
        Booking booking = new Booking();
        booking.setRoomId(roomId);
        booking.setUserId(user.getUserId());
        booking.setStartTime(sTime);
        booking.setEndTime(eTime);
        booking.setStatus(1);
        booking.setCreateTime(new Date());
        bookingService.insert(booking);
        return new Result(200, "预约成功", null);
    }

    @ApiOperation("获取我的预约记录")
    @GetMapping("/getMyBooking")
    public Result getMyBooking(HttpServletRequest request,
                               @RequestParam(name = "page") Integer page,
                               @RequestParam(name = "pageSize") Integer pageSize) {
        User user = (User)request.getSession().getAttribute("user");
        HashMap res = userService.hasBind(user.getUserId());
        if ((Boolean)res.get("res") == false) {
            return new Result(-1, "暂未绑定账号！", null);
        } else if (!res.get("identity").toString().equals("teacher")) {
            return new Result(-1, "您无权限！", null);
        }
        page = page == null ? 1 : page;
        pageSize = pageSize == null ? 10 : pageSize;
        Page records = bookingService.getMyBooking(new Page<>(page, pageSize), user.getUserId());
        return new Result(200, "获取成功", records);
    }

    @ApiOperation("获取我的预约记录")
    @GetMapping("/getBookings")
    public Result getBookings(HttpServletRequest request,
                               @RequestParam(name = "roomId") Integer roomId,
                               @RequestParam(name = "date") String date,
                               @RequestParam(name = "page") Integer page,
                               @RequestParam(name = "pageSize") Integer pageSize) {
        User user = (User)request.getSession().getAttribute("user");
        HashMap res = userService.hasBind(user.getUserId());
        if ((Boolean)res.get("res") == false) {
            return new Result(-1, "暂未绑定账号！", null);
        } else if (!res.get("identity").toString().equals("teacher")) {
            return new Result(-1, "您无权限！", null);
        }
        page = page == null ? 1 : page;
        pageSize = pageSize == null ? 10 : pageSize;
        if (date == null || date == "") {
            return new Result(200, "获取成功", new Page<>(page, pageSize));
        }
        Date startTime = this.strToDate(date.concat(" 00:00:00"));
        Date endTime = this.strToDate(date.concat( " 23:59:59"));
        Page records = bookingService.selectPage(new Page<>(page, pageSize), new EntityWrapper<Booking>().eq("room_id", roomId)
                                                        .gt("start_time",startTime).lt("end_time", endTime));
        return new Result(200, "获取成功", records);
    }

    @ApiOperation("取消预约")
    @PostMapping("/cancelBooking")
    public Result cancelBooking(HttpServletRequest request,
                                @RequestParam("meetingId") Integer meetingId) {
        User user = (User)request.getSession().getAttribute("user");
            HashMap res = userService.hasBind(user.getUserId());
            if ((Boolean)res.get("res") == false) {
                return new Result(-1, "暂未绑定账号！", null);
            } else if (!res.get("identity").toString().equals("teacher")) {
                return new Result(-1, "您无权限！", null);
        }
        Booking booking = bookingService.selectById(meetingId);
        if (booking == null) {
            return new Result(-1, "该预约不存在");
        }
        booking.setStatus(-1);
        bookingService.updateById(booking);
        return new Result(200, "取消成功");
    }

    @ApiOperation("是否可预约")
    @GetMapping("/isAvailable")
    public Result isAvailable(HttpServletRequest request,
                              @RequestParam(name = "roomId") Integer roomId,
                              @RequestParam(name = "startTime") Date startTime,
                              @RequestParam(name = "endTime") Date endTime) {
        User user = (User)request.getSession().getAttribute("user");
        HashMap res = userService.hasBind(user.getUserId());
        if ((Boolean)res.get("res") == false) {
            return new Result(-1, "暂未绑定账号！", null);
        } else if (!res.get("identity").toString().equals("teacher")) {
            return new Result(-1, "您无权限！", null);
        }
        List<Booking> bookings = bookingService.selectList(new EntityWrapper<Booking>().eq("roomId", roomId)
                                                            .lt("startTime", endTime).gt("endTime", startTime)) ;
        if (bookings.size() > 0) {
            return new Result(200, "该时间段已被预约", false);
        } else {
            return new Result(200, "该时间段可以预约", true);
        }
    }

    private Date strToDate(String time) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date t = null;
        try {
            t = format.parse(time);
        } catch ( ParseException e) {
            e.printStackTrace();
        }
        return t;
    }

}

