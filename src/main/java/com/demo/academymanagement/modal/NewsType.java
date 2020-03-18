package com.demo.academymanagement.modal;

import com.baomidou.mybatisplus.enums.IdType;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 新闻类型
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-01
 */
@TableName("news_type")
public class NewsType implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 类型编号
     */
    @TableId(value = "news_type_id", type = IdType.AUTO)
    private Integer newsTypeId;
    /**
     * 类型名称
     */
    @TableField("news_type_name")
    private String newsTypeName;
    private Integer status;


    public Integer getNewsTypeId() {
        return newsTypeId;
    }

    public void setNewsTypeId(Integer newsTypeId) {
        this.newsTypeId = newsTypeId;
    }

    public String getNewsTypeName() {
        return newsTypeName;
    }

    public void setNewsTypeName(String newsTypeName) {
        this.newsTypeName = newsTypeName;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "NewsType{" +
        ", newsTypeId=" + newsTypeId +
        ", newsTypeName=" + newsTypeName +
        ", status=" + status +
        "}";
    }
}
