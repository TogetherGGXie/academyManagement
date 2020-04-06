package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.News;
import com.demo.academymanagement.modal.Notice;
import com.demo.academymanagement.service.NewsService;
import com.demo.academymanagement.service.NoticeService;
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
import java.util.Collection;
import java.util.Iterator;

/**
 * <p>
 * 新闻信息 前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@RequestMapping("/news")
@Api("新闻管理")
public class NewsController {


    @Autowired
    private NewsService newsService;

    @ApiOperation("获取新闻列表")
    @GetMapping("/getNews")
    public Result getNews(HttpServletRequest request,
                          @RequestParam(value = "page", required = false) Integer page,
                          @RequestParam(value = "pageSize", required = false) Integer pageSize,
                          @RequestParam(value = "newsType", required = true) Integer newsType) {
        if (page == null) {
            page = 1;
        }
        if (pageSize == null) {
            pageSize = 5;
        }
        if (newsType == null) {
            return new Result(400, "请求参数有误，请稍后重试", null);
        }
        Page records = newsService.selectPage(new Page<>(page, pageSize),
                new EntityWrapper<News>().setSqlSelect("news_id, news_type, news_title, news_image, news_brief, news_time, create_time, rank").
                        eq("news_type", newsType).eq("status", 1).
                        orderDesc(Arrays.asList(new String[] {"rank", "news_time"})));
        return new Result(200, "获取新闻成功", records);
    }

}

