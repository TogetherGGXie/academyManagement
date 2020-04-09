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
 * 
 * </p>
 *
 * @author XieZhiyang123
 * @since 2020-03-24
 */
@TableName("office")
public class Office implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 办公室id
     */
    @TableId(value = "office_id", type = IdType.AUTO)
    private Integer officeId;
    /**
     * 办公室类型
     */
    @TableField("office_type")
    private String officeType;
    /**
     * 办公室名称
     */
    @TableField("office_name")
    private String officeName;
    /**
     * 图片
     */
    @TableField("office_img")
    private String officeImg;
    /**
     * 地址
     */
    private String address;
    /**
     * 联络方式
     */
    @TableField("phone_num")
    private String phoneNum;
    /**
     * 1：正常  -1：删除
     */
    private Integer status;
    @TableField("create_time")
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;


    public Integer getOfficeId() {
        return officeId;
    }

    public void setOfficeId(Integer officeId) {
        this.officeId = officeId;
    }

    public String getOfficeType() {
        return officeType;
    }

    public void setOfficeType(String officeType) {
        this.officeType = officeType;
    }

    public String getOfficeName() {
        return officeName;
    }

    public void setOfficeName(String officeName) {
        this.officeName = officeName;
    }

    public String getOfficeImg() {
        return officeImg;
    }

    public void setOfficeImg(String officeImg) {
        this.officeImg = officeImg;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
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

    @Override
    public String toString() {
        return "Office{" +
        ", officeId=" + officeId +
        ", officeType=" + officeType +
        ", officeName=" + officeName +
        ", officeImg=" + officeImg +
        ", address=" + address +
        ", phoneNum=" + phoneNum +
        ", status=" + status +
        ", createTime=" + createTime +
        "}";
    }
}
