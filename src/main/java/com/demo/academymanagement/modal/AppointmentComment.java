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
@TableName("appointment_comment")
public class AppointmentComment implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 约谈评论编号
     */
    @TableId(value = "appointment_comment_id", type = IdType.AUTO)
    private Integer appointmentCommentId;
    /**
     * 约谈编号
     */
    @TableField("appointment_id")
    private Integer appointmentId;
    /**
     * 满意程度
     */
    private String score;
    /**
     * 理由
     */
    private String content;
    @TableField("create_time")
    private Date createTime;
    /**
     * -1:删除 1:正常
     */
    private Integer status;


    public Integer getAppointmentCommentId() {
        return appointmentCommentId;
    }

    public void setAppointmentCommentId(Integer appointmentCommentId) {
        this.appointmentCommentId = appointmentCommentId;
    }

    public Integer getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Integer appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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
        return "AppointmentComment{" +
        ", appointmentCommentId=" + appointmentCommentId +
        ", appointmentId=" + appointmentId +
        ", score=" + score +
        ", content=" + content +
        ", createTime=" + createTime +
        ", status=" + status +
        "}";
    }
}
