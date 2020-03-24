package com.demo.academymanagement.modal;

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
@TableName("notice_statis")
public class NoticeStatis implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("notice_id")
    private Integer noticeId;
    @TableField("page_view")
    private Integer pageView;
    @TableField("create_time")
    private Date createTime;
    @TableField("last_upd_time")
    private Date lastUpdTime;


    public Integer getNoticeId() {
        return noticeId;
    }

    public void setNoticeId(Integer noticeId) {
        this.noticeId = noticeId;
    }

    public Integer getPageView() {
        return pageView;
    }

    public void setPageView(Integer pageView) {
        this.pageView = pageView;
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
        return "NoticeStatis{" +
        ", noticeId=" + noticeId +
        ", pageView=" + pageView +
        ", createTime=" + createTime +
        ", lastUpdTime=" + lastUpdTime +
        "}";
    }
}
