package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Notice;
import com.demo.academymanagement.modal.Sci;
import com.demo.academymanagement.service.SciService;
import com.demo.academymanagement.service.SciStatisService;
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
import java.util.Arrays;

/**
 * <p>
 * 科研动态 前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@RequestMapping("/sci")
@Api("科研管理")
public class SciController {


    @Autowired
    private SciService sciService;

    @Autowired
    private SciStatisService sciStatisService;


    @ApiOperation("获取科研")
    @GetMapping(value = "/getScis")
    public Result getSci(HttpServletRequest request,
                          @RequestParam(value = "page", required = false) Integer page,
                          @RequestParam(value = "pageSize", required = false) Integer pageSize,
                          @RequestParam(value = "type", required = true) Integer type) {
        if (page == null) {
            page = 1;
        }
        if (pageSize == null) {
            pageSize = 5;
        }
        if (type == null) {
            return new Result(400, "请求参数有误，请稍后重试", null);
        }
        Page records = sciService.selectPage(new Page<>(page, pageSize),
                new EntityWrapper<Sci>().setSqlSelect("article_id, title, article_image, content, publish_time, create_time")
                        .eq("status", 1).eq("type", type).
                        orderDesc(Arrays.asList(new String[] {"publish_time"})));
        return new Result(200, "获取科研成功", records);
    }

    @ApiOperation("获取科研动态信息")
    @GetMapping("/getSciInfo")
    public Result getSciInfo(HttpServletRequest request,
                                @RequestParam(value = "sciId") Integer sciId) {
        if (sciId == null ) {
            return new Result(400, "缺少参数，获取科研动态失败");
        }
        Sci sci = sciService.selectById(sciId);
        sciStatisService.updataSciStatis(sciId);
        return new Result(200, "获取科研动态成功", sci);
    }


}

