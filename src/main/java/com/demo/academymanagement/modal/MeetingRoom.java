package com.demo.academymanagement.modal;

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
 * @since 2020-03-01
 */
@TableName("meeting_room")
public class MeetingRoom implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 会议室id
     */
    @TableId(value = "room_id", type = IdType.AUTO)
    private Integer roomId;
    /**
     * 会议室名称
     */
    private String name;
    /**
     * 可预约星期
     */
    @TableField("available_day")
    private String availableDay;
    /**
     * 可预约时间
     */
    @TableField("available_time")
    private String availableTime;
    /**
     * 状态
     */
    private Integer status;
    /**
     * 创建时间
     */
    @TableField("create_time")
    private Date createTime;
    /**
     * 最近修改时间
     */
    @TableField("last_upd_time")
    private Date lastUpdTime;


    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvailableDay() {
        return availableDay;
    }

    public void setAvailableDay(String availableDay) {
        this.availableDay = availableDay;
    }

    public String getAvailableTime() {
        return availableTime;
    }

    public void setAvailableTime(String availableTime) {
        this.availableTime = availableTime;
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

    public Date getLastUpdTime() {
        return lastUpdTime;
    }

    public void setLastUpdTime(Date lastUpdTime) {
        this.lastUpdTime = lastUpdTime;
    }

    @Override
    public String toString() {
        return "MeetingRoom{" +
        ", roomId=" + roomId +
        ", name=" + name +
        ", availableDay=" + availableDay +
        ", availableTime=" + availableTime +
        ", status=" + status +
        ", createTime=" + createTime +
        ", lastUpdTime=" + lastUpdTime +
        "}";
    }
}
