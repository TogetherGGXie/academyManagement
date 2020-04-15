package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Comment;
import com.demo.academymanagement.modal.CommentTime;
import com.demo.academymanagement.modal.Supervisor;
import com.demo.academymanagement.modal.User;
import com.demo.academymanagement.service.CommentService;
import com.demo.academymanagement.service.CommentTimeService;
import com.demo.academymanagement.service.SupervisorService;
import com.demo.academymanagement.service.UserService;
import com.demo.academymanagement.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Date;
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
@RequestMapping("/comment")
@Api("教师评议管理器")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @Autowired
    private CommentTimeService commentTimeService;

    @Autowired
    private SupervisorService supervisorService;

    @ApiOperation("学生评议教师")
    @PostMapping("/comment")
    public Result comment(HttpServletRequest request,
                          @RequestParam(value = "supId") Integer supId,
                          @RequestParam(value = "content") String content,
                          @RequestParam(value = "score") Integer score) {
        User user = (User) request.getSession().getAttribute("user");
        CommentTime commentTime = commentTimeService.getCommentTime();
        if (commentTime == null ) {
            return new Result(-1, "暂未开放评议");
        }
        HashMap<String, Object> flag = userService.hasBind(user.getUserId());
        if ((boolean)flag.get("res") == false) {
            return new Result(-1, "暂未绑定学号");
        } else if (flag.get("identity").equals("teacher")) {
            return new Result(-1, "教师无法参与评议");
        }
        Supervisor supervisor = supervisorService.selectById(supId);
        if (supervisor == null || supervisor.getStatus() == -1) {
            return new Result(-1, "导师信息有误");
        }
        Comment comment = commentService.selectOne(new EntityWrapper<Comment>().eq("user_id", user.getUserId())
                                                    .eq("sup_id", supId).eq("comment_time_id", commentTime.getCommentTimeId()));
        if (comment != null) {
            return new Result(-1, "不可重复评论");
        }
        Comment c = new Comment();
        c.setCommentTimeId(commentTime.getCommentTimeId());
        c.setContent(content);
        c.setScore(score);
        c.setSupId(supId);
        c.setUserId(user.getUserId());
        c.setCreateTime(new Date());
        c.setStatus(1);
        commentService.insert(c);
        return new Result(200, "评论成功", c);
    }

    @ApiOperation("获取历史评议内容")
    @PostMapping("/getMyComments")
    public Result getMyComments(HttpServletRequest request,
                          @RequestParam(value = "supId") Integer supId) {
        User user = (User) request.getSession().getAttribute("user");
        CommentTime commentTime = commentTimeService.getCommentTime();
        Supervisor supervisor = supervisorService.selectById(supId);
        if (supervisor == null || supervisor.getStatus() == -1) {
            return new Result(-1, "导师信息有误");
        }
        List<Comment> res = commentService.selectList(new EntityWrapper<Comment>().eq("user_id", user.getUserId())
                                                .eq("sup_id", supId)
                                                .orderDesc(Arrays.asList(new String[] {"comment_time_id", "create_time"})));

        return new Result(200, "获取评论成功", res);
    }
}

