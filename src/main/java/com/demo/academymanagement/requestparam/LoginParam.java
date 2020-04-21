package com.demo.academymanagement.requestparam;

import javax.validation.constraints.NotNull;

public class LoginParam {

    @NotNull(message = "缺少登录名")
    private String adminName;

    @NotNull(message = "缺少密码")
    private String password;

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "LoginParam{" +
                "adminName='" + adminName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}