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
 * @since 2020-03-24
 */
@TableName("comment_time")
public class CommentTime implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 评议时间编号
     */
    @TableId(value = "comment_time_id", type = IdType.AUTO)
    private Integer commentTimeId;
    /**
     * 开始时间
     */
    @TableField("start_time")
    private Date startTime;
    /**
     * 结束时间
     */
    @TableField("end_time")
    private Date endTime;
    @TableField("create_time")
    private Date createTime;


    public Integer getCommentTimeId() {
        return commentTimeId;
    }

    public void setCommentTimeId(Integer commentTimeId) {
        this.commentTimeId = commentTimeId;
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

    @Override
    public String toString() {
        return "CommentTime{" +
        ", commentTimeId=" + commentTimeId +
        ", startTime=" + startTime +
        ", endTime=" + endTime +
        ", createTime=" + createTime +
        "}";
    }
}
