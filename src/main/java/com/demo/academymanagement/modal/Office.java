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
@TableName("office")
public class Office implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "house_id", type = IdType.AUTO)
    private Integer houseId;
    @TableField("house_type")
    private String houseType;
    @TableField("house_name")
    private String houseName;
    @TableField("house_img")
    private String houseImg;
    private String address;
    @TableField("phone_num")
    private String phoneNum;
    /**
     * 1：正常  -1：删除
     */
    private Integer status;
    @TableField("create_time")
    private Date createTime;


    public Integer getHouseId() {
        return houseId;
    }

    public void setHouseId(Integer houseId) {
        this.houseId = houseId;
    }

    public String getHouseType() {
        return houseType;
    }

    public void setHouseType(String houseType) {
        this.houseType = houseType;
    }

    public String getHouseName() {
        return houseName;
    }

    public void setHouseName(String houseName) {
        this.houseName = houseName;
    }

    public String getHouseImg() {
        return houseImg;
    }

    public void setHouseImg(String houseImg) {
        this.houseImg = houseImg;
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
        ", houseId=" + houseId +
        ", houseType=" + houseType +
        ", houseName=" + houseName +
        ", houseImg=" + houseImg +
        ", address=" + address +
        ", phoneNum=" + phoneNum +
        ", status=" + status +
        ", createTime=" + createTime +
        "}";
    }
}
