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
@TableName("booking")
public class Booking implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 会议id
     */
    @TableId(value = "meeting_id", type = IdType.AUTO)
    private Integer meetingId;
    /**
     * 会议室id
     */
    @TableField("room_id")
    private Integer roomId;
    /**
     * 创建者id
     */
    @TableField("user_id")
    private Integer userId;
    /**
     * 开始时间
     */
    @TableField("start_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date startTime;
    /**
     * 结束时间
     */
    @TableField("end_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date endTime;
    /**
     * 申请时间
     */
    @TableField("create_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    /**
     * 状态
     */
    private Integer status;


    public Integer getMeetingId() {
        return meetingId;
    }

    public void setMeetingId(Integer meetingId) {
        this.meetingId = meetingId;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
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

    @Override
    public String toString() {
        return "Booking{" +
        ", meetingId=" + meetingId +
        ", roomId=" + roomId +
        ", userId=" + userId +
        ", startTime=" + startTime +
        ", endTime=" + endTime +
        ", createTime=" + createTime +
        ", status=" + status +
        "}";
    }
}
