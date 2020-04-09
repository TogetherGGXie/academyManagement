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
 * 
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@TableName("user")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "user_id", type = IdType.AUTO)
    private Integer userId;
    @TableField("open_id")
    private String openId;
    /**
     * 昵称
     */
    @TableField("nick_name")
    private String nickName;
    /**
     * 头像
     */
    @TableField("head_image")
    private String headImage;
    /**
     * 是否在用 0 不在使用 1使用中
     */
    private Integer status;
    @TableField("created_at")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createdAt;
    @TableField("updated_at")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;
    /**
     * 学号
     */
    @TableField("student_id")
    private String studentId;
    /**
     * 密码
     */
    private String password;
    /**
     * 联系方式
     */
    private String phone;


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getHeadImage() {
        return headImage;
    }

    public void setHeadImage(String headImage) {
        this.headImage = headImage;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "User{" +
        ", userId=" + userId +
        ", openId=" + openId +
        ", nickName=" + nickName +
        ", headImage=" + headImage +
        ", status=" + status +
        ", createdAt=" + createdAt +
        ", updatedAt=" + updatedAt +
        ", studentId=" + studentId +
        ", password=" + password +
        ", phone=" + phone +
        "}";
    }
}
