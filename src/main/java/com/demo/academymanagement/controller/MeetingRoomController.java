package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.demo.academymanagement.modal.MeetingRoom;
import com.demo.academymanagement.modal.User;
import com.demo.academymanagement.service.MeetingRoomService;
import com.demo.academymanagement.service.UserService;
import com.demo.academymanagement.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@RequestMapping("/meetingRoom")
@Api("会议室管理")
public class MeetingRoomController {

    @Autowired
    private MeetingRoomService meetingRoomService;

    @Autowired
    private UserService userService;

    @ApiOperation("获取会议室列表")
    @GetMapping("/getMeetingRooms")
    public Result getMeetingRooms(HttpServletRequest request) {
        User user = (User)request.getSession().getAttribute("user");
        HashMap res = userService.hasBind(user.getUserId());
        if ((Boolean)res.get("res") == false) {
            return new Result(-1, "暂未绑定账号！", null);
        } else if (!res.get("identity").toString().equals("teacher")) {
            return new Result(-1, "您无权限！", null);
        }
        List<MeetingRoom> rooms = meetingRoomService.selectList(new EntityWrapper<MeetingRoom>().setSqlSelect("room_id, name")
                                                .eq("status",1).orderDesc(Arrays.asList(new String[]{"name", "create_time"})));
        return new Result(200, "获取会议室成功", rooms);
    }

}

