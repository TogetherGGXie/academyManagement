package com.demo.academymanagement.modal;

import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 活动信息表
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@TableName("activity")
public class Activity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 活动编号
     */
    @TableId(value = "act_id", type = IdType.AUTO)
    private Integer actId;
    /**
     * 活动主题
     */
    private String title;
    /**
     * 活动开始时间
     */
    @TableField("begin_time")
    private Date beginTime;
    /**
     * 活动结束时间
     */
    @TableField("end_time")
    private Date endTime;
    /**
     * 活动简介
     */
    private String brief;
    /**
     * 1:二维码定时刷新  2:永久二维码
     */
    @TableField("sign_type")
    private Integer signType;
    /**
     * 创建时间
     */
    @TableField("create_time")
    private Date createTime;
    private Integer status;
    private String address;


    public Integer getActId() {
        return actId;
    }

    public void setActId(Integer actId) {
        this.actId = actId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(Date beginTime) {
        this.beginTime = beginTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getBrief() {
        return brief;
    }

    public void setBrief(String brief) {
        this.brief = brief;
    }

    public Integer getSignType() {
        return signType;
    }

    public void setSignType(Integer signType) {
        this.signType = signType;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Activity{" +
        ", actId=" + actId +
        ", title=" + title +
        ", beginTime=" + beginTime +
        ", endTime=" + endTime +
        ", brief=" + brief +
        ", signType=" + signType +
        ", createTime=" + createTime +
        ", status=" + status +
        ", address=" + address +
        "}";
    }
}
