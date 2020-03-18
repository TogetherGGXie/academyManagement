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
 * @since 2020-03-01
 */
@TableName("news_statis")
public class NewsStatis implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("news_id")
    private Integer newsId;
    @TableField("page_view")
    private Integer pageView;
    private String type;
    @TableField("create_time")
    private Date createTime;
    @TableField("last_upd_time")
    private Date lastUpdTime;


    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }

    public Integer getPageView() {
        return pageView;
    }

    public void setPageView(Integer pageView) {
        this.pageView = pageView;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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
        return "NewsStatis{" +
        ", newsId=" + newsId +
        ", pageView=" + pageView +
        ", type=" + type +
        ", createTime=" + createTime +
        ", lastUpdTime=" + lastUpdTime +
        "}";
    }
}
