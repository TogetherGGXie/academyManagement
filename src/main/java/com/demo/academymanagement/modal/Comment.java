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
@TableName("comment")
public class Comment implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "comment_id", type = IdType.AUTO)
    private Integer commentId;
    /**
     * 评议时间编号
     */
    @TableField("comment_time_id")
    private Integer commentTimeId;
    /**
     * 用户编号
     */
    @TableField("user_info_id")
    private Integer userInfoId;
    /**
     * 代表编号
     */
    @TableField("user_id")
    private Integer userId;
    /**
     * 分数
     */
    private Integer score;
    /**
     * 评价
     */
    private String content;
    @TableField("create_time")
    private Date createTime;
    /**
     * -1:删除 1:正常
     */
    private Integer status;


    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public Integer getCommentTimeId() {
        return commentTimeId;
    }

    public void setCommentTimeId(Integer commentTimeId) {
        this.commentTimeId = commentTimeId;
    }

    public Integer getUserInfoId() {
        return userInfoId;
    }

    public void setUserInfoId(Integer userInfoId) {
        this.userInfoId = userInfoId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
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
        return "Comment{" +
        ", commentId=" + commentId +
        ", commentTimeId=" + commentTimeId +
        ", userInfoId=" + userInfoId +
        ", userId=" + userId +
        ", score=" + score +
        ", content=" + content +
        ", createTime=" + createTime +
        ", status=" + status +
        "}";
    }
}
