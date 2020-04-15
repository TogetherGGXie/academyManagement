package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Complaint;
import com.demo.academymanagement.modal.User;
import com.demo.academymanagement.service.ComplaintService;
import com.demo.academymanagement.service.UserService;
import com.demo.academymanagement.util.Result;
import com.sun.org.apache.xpath.internal.operations.Bool;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * 投诉意见表 前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@RequestMapping("/complaint")
@Api("建议管理")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @Autowired
    private UserService userService;


    @ApiOperation("用户提建议")
    @PostMapping("complaint")
    public Result complaint(HttpServletRequest request,
                            @RequestParam(name = "content") String content,
                            @RequestParam(name = "type") String type) {
        User user = (User)request.getSession().getAttribute("user");
        HashMap<String, Object> res = userService.hasBind(user.getUserId());
        if ((Boolean) res.get("res") == false) {
            return new Result(-1, "暂未绑定账号");
        }
        Complaint complaint = new Complaint();
        complaint.setContent(content);
        complaint.setUserId(user.getUserId());
        complaint.setType(type);
        complaint.setStatus(1);
        complaint.setCreateTime(new Date());
        complaintService.insert(complaint);
        return new Result(200, "提交成功", complaint);
    }

    @ApiOperation("获取用户历史意见")
    @GetMapping("/getMyComplaints")
    public Result getMyComplaints(HttpServletRequest request,
                                  @RequestParam(name = "page") Integer page,
                                  @RequestParam(name = "pageSize") Integer pageSize) {
        User user = (User)request.getSession().getAttribute("user");
        HashMap<String, Object> res = userService.hasBind(user.getUserId());
        if ((Boolean) res.get("res") == false) {
            return new Result(-1, "暂未绑定账号");
        }
        Page records = complaintService.selectPage(new Page<>(page, pageSize), new EntityWrapper<Complaint>().eq("user_id", user.getUserId())
                .orderDesc(Arrays.asList(new String[] {"complaint_id", "create_time"})));
        return new Result(200, "获取成功", records);
    }

    @ApiOperation("获取优质意见")
    @GetMapping("/getShowComplaint")
    public Result getShowComplaint(HttpServletRequest request,
                                   @RequestParam(name = "page") Integer page,
                                   @RequestParam(name = "pageSize") Integer pageSize) {
        Page records = complaintService.selectPage(new Page<>(page, pageSize), new EntityWrapper<Complaint>().setSqlSelect("complaint_id, content, reply, create_time, reply_time")
                .eq("is_show", 1).eq("status", 1)
                .orderDesc(Arrays.asList(new String[] {"rank", "create_time"})));
        return new Result(200, "获取成功", records);
    }


}

