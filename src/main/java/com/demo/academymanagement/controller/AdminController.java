package com.demo.academymanagement.controller;


import cn.hutool.Hutool;
import cn.hutool.core.util.IdUtil;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Admin;
import com.demo.academymanagement.modal.News;
import com.demo.academymanagement.requestparam.LoginParam;
import com.demo.academymanagement.requestparam.NewsListParam;
import com.demo.academymanagement.requestparam.PageParam;
import com.demo.academymanagement.service.AdminService;
import com.demo.academymanagement.service.NewsService;
import com.demo.academymanagement.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.HashMap;

/**
 * <p>
 * 管理员信息 前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@RequestMapping("/admin")
@Api("管理员控制器")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private NewsService newsService;


    @ApiOperation("管理员登录")
    @PostMapping("/login")
    public Result login(HttpServletRequest request,
                        @RequestBody LoginParam loginParam) {
        String adminName = loginParam.getAdminName();
        String password = loginParam.getPassword();
        if (adminName == "" || password == "") {
            return new Result(400, "请输入用户名和密码");
        }
        Admin admin = adminService.selectOne(new EntityWrapper<Admin>().eq("account", adminName));
        if (admin == null) {
            return new Result(-1, "请输入正确的账号");
        }
        if (admin.getStatus() == -1) {
            return new Result(-1, "该账号已被禁用");
        }
        if (!admin.getPassWord().equals(password)) {
            return new Result(-1, "请输入正确的密码");
        }
        request.getSession().setAttribute("admin", admin);
        String token = IdUtil.simpleUUID();
        HashMap res = new HashMap<String, String>();
        res.put("token", token);
        res.put("role", admin.getRole());
        return new Result(200, "登录成功", res);
    }

    @ApiOperation("获取新闻列表")
    @GetMapping("/getNewsList")
    public Result getNewsList(HttpServletRequest request,
                              @RequestParam(name = "pageNum") Integer pageNum,
                              @RequestParam(name = "pageSize") Integer pageSize,
                              @RequestParam(name = "type", required = false) Integer type,
                              @RequestParam(name = "keyword", required = false) String keyword,
                              @RequestParam(name = "startTime", required = false) String startTime,
                              @RequestParam(name = "endTime", required = false) Integer endTime) {
        Admin admin = (Admin)request.getSession().getAttribute("admin");
        if (admin == null){
            return new Result(-1, "登录状态失效，请重新登录");
        }
        if (admin.getStatus() == -1) {
            return new Result(-1, "该账号已失效");
        }
        if (type == null) {
            return new Result(-1, "请选择新闻类型");
        }
        pageNum = pageNum == null ? 1 : pageNum;
        pageSize = pageSize == null ? 10 : pageSize;
        Page records = newsService.selectPage(new Page<>(pageNum, pageSize),
                new EntityWrapper<News>().eq("news_type", type).eq("status", 1).
                        orderDesc(Arrays.asList(new String[] {"rank", "news_time"})));
        return new Result(200, "获取新闻成功", records);
    }

    @ApiOperation("添加新闻")
    @PostMapping("/addNews")
    public Result getNewsList(HttpServletRequest request,
                              @RequestBody News news) {
        Admin admin = (Admin)request.getSession().getAttribute("admin");
        if (admin == null){
            return new Result(-1, "登录状态失效，请重新登录");
        }
        if (admin.getStatus() == -1) {
            return new Result(-1, "该账号已失效");
        }
        newsService.insert(news);
        return new Result(200, "添加新闻成功", news);
    }

    @ApiOperation("添加新闻")
    @PostMapping("/getNews")
    public Result getNewsList(HttpServletRequest request,
                              @RequestParam("newsId") Integer newsId) {
        Admin admin = (Admin)request.getSession().getAttribute("admin");
        if (admin == null){
            return new Result(-1, "登录状态失效，请重新登录");
        }
        if (admin.getStatus() == -1) {
            return new Result(-1, "该账号已失效");
        }
        News news = newsService.selectById(newsId);
        return new Result(200, "获取新闻成功", news);
    }
}

