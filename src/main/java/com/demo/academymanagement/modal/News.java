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
 * 新闻信息
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@TableName("news")
public class News implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 新闻编号
     */
    @TableId(value = "news_id", type = IdType.AUTO)
    private Integer newsId;
    /**
     * 类型编号
     */
    @TableField("news_type")
    private Integer newsType;
    /**
     * 标题
     */
    @TableField("news_title")
    private String newsTitle;
    /**
     * 图片
     */
    @TableField("news_image")
    private String newsImage;
    /**
     * 简介
     */
    @TableField("news_brief")
    private String newsBrief;
    /**
     * 内容
     */
    @TableField("news_content")
    private String newsContent;
    /**
     * 发布时间
     */
    @TableField("news_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date newsTime;
    /**
     * 状态   1:展示  -1:删除
     */
    private Integer status;
    /**
     * 创建时间
     */
    @TableField("create_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    private Integer rank;


    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }

    public Integer getNewsType() {
        return newsType;
    }

    public void setNewsType(Integer newsType) {
        this.newsType = newsType;
    }

    public String getNewsTitle() {
        return newsTitle;
    }

    public void setNewsTitle(String newsTitle) {
        this.newsTitle = newsTitle;
    }

    public String getNewsImage() {
        return newsImage;
    }

    public void setNewsImage(String newsImage) {
        this.newsImage = newsImage;
    }

    public String getNewsBrief() {
        return newsBrief;
    }

    public void setNewsBrief(String newsBrief) {
        this.newsBrief = newsBrief;
    }

    public String getNewsContent() {
        return newsContent;
    }

    public void setNewsContent(String newsContent) {
        this.newsContent = newsContent;
    }

    public Date getNewsTime() {
        return newsTime;
    }

    public void setNewsTime(Date newsTime) {
        this.newsTime = newsTime;
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

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "News{" +
        ", newsId=" + newsId +
        ", newsType=" + newsType +
        ", newsTitle=" + newsTitle +
        ", newsImage=" + newsImage +
        ", newsBrief=" + newsBrief +
        ", newsContent=" + newsContent +
        ", newsTime=" + newsTime +
        ", status=" + status +
        ", createTime=" + createTime +
        ", rank=" + rank +
        "}";
    }
}
