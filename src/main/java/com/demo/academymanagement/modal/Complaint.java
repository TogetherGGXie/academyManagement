package com.demo.academymanagement.modal;

import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 投诉意见表
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@TableName("complaint")
public class Complaint implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 编号
     */
    @TableId(value = "complaint_id", type = IdType.AUTO)
    private Integer complaintId;
    /**
     * 用户编号
     */
    @TableField("user_id")
    private Integer userId;
    /**
     * 投诉内容
     */
    private String content;
    /**
     * 类型
     */
    private String type;
    /**
     * 管理员回复信息
     */
    private String reply;
    /**
     * 管理员编号
     */
    @TableField("admin_id")
    private Integer adminId;
    /**
     * 1:待处理  2:已处理
     */
    private Integer status;
    @TableField("create_time")
    private Date createTime;
    /**
     * 管理员回复时间
     */
    @TableField("reply_time")
    private Date replyTime;
    /**
     * 0:不公开 1:公开可见
     */
    @TableField("is_show")
    private Integer isShow;
    /**
     * 排名
     */
    private Integer rank;


    public Integer getComplaintId() {
        return complaintId;
    }

    public void setComplaintId(Integer complaintId) {
        this.complaintId = complaintId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getReply() {
        return reply;
    }

    public void setReply(String reply) {
        this.reply = reply;
    }

    public Integer getAdminId() {
        return adminId;
    }

    public void setAdminId(Integer adminId) {
        this.adminId = adminId;
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

    public Date getReplyTime() {
        return replyTime;
    }

    public void setReplyTime(Date replyTime) {
        this.replyTime = replyTime;
    }

    public Integer getIsShow() {
        return isShow;
    }

    public void setIsShow(Integer isShow) {
        this.isShow = isShow;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "Complaint{" +
        ", complaintId=" + complaintId +
        ", userId=" + userId +
        ", content=" + content +
        ", type=" + type +
        ", reply=" + reply +
        ", adminId=" + adminId +
        ", status=" + status +
        ", createTime=" + createTime +
        ", replyTime=" + replyTime +
        ", isShow=" + isShow +
        ", rank=" + rank +
        "}";
    }
}
