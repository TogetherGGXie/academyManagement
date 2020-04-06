package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.demo.academymanagement.modal.Notice;
import com.demo.academymanagement.service.NoticeService;
import com.demo.academymanagement.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

/**
 * <p>
 * 公告管理 前端控制器
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@RestController
@RequestMapping("/notice")
@Api("公告管理")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @ApiOperation("获取公告列表")
    @GetMapping("/getNotices")
    public Result getNotice(HttpServletRequest request,
                          @RequestParam(value = "page", required = false) Integer page,
                          @RequestParam(value = "pageSize", required = false) Integer pageSize) {
        if (page == null) {
            page = 1;
        }
        if (pageSize == null) {
            pageSize = 5;
        }
        Page records = noticeService.selectPage(new Page<>(page, pageSize),
                new EntityWrapper<Notice>().setSqlSelect("notice_id, type, title, content, url, publish_time, create_time, image_url")
                        .eq("status", 1).
                        orderDesc(Arrays.asList(new String[] {"publish_time"})));
        return new Result(200, "获取公告成功", records);
    }
}

