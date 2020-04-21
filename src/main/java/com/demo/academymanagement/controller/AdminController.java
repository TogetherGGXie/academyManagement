package com.demo.academymanagement.controller;


import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.demo.academymanagement.modal.Admin;
import com.demo.academymanagement.requestparam.LoginParam;
import com.demo.academymanagement.service.AdminService;
import com.demo.academymanagement.util.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;

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
        return new Result(200, "登录成功");
    }
}

