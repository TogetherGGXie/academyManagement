package com.demo.academymanagement.modal;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;
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
 * @since 2020-04-07
 */
@TableName("sci_statis")
public class SciStatis implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("sci_id")
    private Integer sciId;
    @TableField("page_view")
    private Integer pageView;
    @TableField("create_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    @TableField("last_upd_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date lastUpdTime;


    public Integer getSciId() {
        return sciId;
    }

    public void setSciId(Integer sciId) {
        this.sciId = sciId;
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
        return "SciStatis{" +
        ", sciId=" + sciId +
        ", pageView=" + pageView +
        ", createTime=" + createTime +
        ", lastUpdTime=" + lastUpdTime +
        "}";
    }
}
