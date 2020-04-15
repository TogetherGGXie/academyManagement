package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.demo.academymanagement.modal.CommentTime;
import com.demo.academymanagement.service.CommentTimeService;
import com.demo.academymanagement.util.Result;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@RequestMapping("/commentTime")
@ApiOperation("评论时间管理")
public class CommentTimeController {

    @Autowired
    private CommentTimeService commentTimeService;

    @ApiOperation("是否开启评论通道")
    @GetMapping("isOpenComment")
    public Result isOpenComment(HttpServletRequest request) {
        CommentTime res = commentTimeService.getCommentTime();
        return new Result(200, "获取成功", res == null ? false : true);
    }

}

