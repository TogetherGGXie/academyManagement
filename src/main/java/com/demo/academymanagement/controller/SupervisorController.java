package com.demo.academymanagement.controller;


import cn.hutool.http.HttpException;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Supervisor;
import com.demo.academymanagement.service.SupervisorService;
import com.demo.academymanagement.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * <p>
 * 师资队伍 前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@Api("教师管理器")
@RequestMapping("/supervisor")
public class SupervisorController {

    @Autowired
    private SupervisorService supervisorService;

    @ApiOperation("获取导师信息")
    @GetMapping("/getSupervisors")
    public Result getSupervisors(HttpServletRequest request,
                                 @RequestParam(value = "pageNum", required = false) Integer page,
                                 @RequestParam(value = "pageSize", required = false) Integer pageSize,
                                 @RequestParam(value = "type") Integer type,
                                 @RequestParam(value = "keyword") String keyword) {
        if (page == null) {
            page = 1;
        }
        if (pageSize == null) {
            pageSize = 5;
        }
        if (type == null || keyword == null || keyword == "") {
            return new Result(400, "请求参数有误，请确认后重试", null);
        }
        Page records = supervisorService.getSupervisors(new Page<>(page,pageSize), type, keyword);
        return new Result(200, "获取导师成功", records);
    }

    @ApiOperation("获取导师信息")
    @GetMapping("/getSupInfo")
    public Result getSupervisorInfo(HttpServletRequest request,
                                    @RequestParam(value = "supId") Integer supId) {
        if (supId == null) {
            return new Result(400, "缺少参数，获取导师信息失败");
        }
        Supervisor supervisor = supervisorService.selectById(supId);
        return new Result(200, "获取导师信息成功", supervisor);
    }

}

