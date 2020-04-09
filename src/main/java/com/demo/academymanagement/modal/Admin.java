package com.demo.academymanagement.modal;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 管理员信息
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@TableName("admin")
public class Admin implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 管理员编号
     */
    @TableId(value = "admin_id", type = IdType.AUTO)
    private Integer adminId;
    /**
     * 管理员名称
     */
    private String name;
    /**
     * 登录账号
     */
    private String account;
    /**
     * 密码
     */
    @TableField("pass_word")
    private String passWord;
    /**
     * 1:超级管理员  2:普通管理员 
     */
    private Integer role;
    /**
     * 状态 1：正常 0：不可用
     */
    private Integer status;
    @TableField("create_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    @TableField("phone_num")
    private String phoneNum;


    public Integer getAdminId() {
        return adminId;
    }

    public void setAdminId(Integer adminId) {
        this.adminId = adminId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    @Override
    public String toString() {
        return "Admin{" +
        ", adminId=" + adminId +
        ", name=" + name +
        ", account=" + account +
        ", passWord=" + passWord +
        ", role=" + role +
        ", status=" + status +
        ", createTime=" + createTime +
        ", phoneNum=" + phoneNum +
        "}";
    }
}
