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
 * 代表预约记录
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@TableName("appointment")
public class Appointment implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 预约编号
     */
    @TableId(value = "appointment_id", type = IdType.AUTO)
    private Integer appointmentId;
    /**
     * 被预约者用户编号
     */
    @TableField("sup_id")
    private Integer supId;
    /**
     * 预约者用户编号
     */
    @TableField("user_id")
    private Integer userId;
    /**
     * 预约着姓名
     */
    @TableField("real_name")
    private String realName;
    /**
     * 联系方式
     */
    @TableField("phone_num")
    private String phoneNum;
    /**
     * 创建时间
     */
    @TableField("create_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    @TableField("order_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date orderTime;
    /**
     * 1：未处理   2：已处理
     */
    private Integer status;


    public Integer getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Integer appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Integer getSupId() {
        return supId;
    }

    public void setSupId(Integer supId) {
        this.supId = supId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Appointment{" +
        ", appointmentId=" + appointmentId +
        ", supId=" + supId +
        ", userId=" + userId +
        ", realName=" + realName +
        ", phoneNum=" + phoneNum +
        ", createTime=" + createTime +
        ", orderTime=" + orderTime +
        ", status=" + status +
        "}";
    }
}
