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
@TableName("supervisor")
public class Supervisor implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sup_id", type = IdType.AUTO)
    private Integer supId;
    /**
     * 姓名
     */
    private String name;
    /**
     * 类型
     */
    private Integer type;
    /**
     * 姓
     */
    private String surname;
    /**
     * 姓笔画数
     */
    private Integer stroke;
    /**
     * 姓名首字母（大写）
     */
    private String initials;
    private String priority;
    /**
     * 职称
     */
    private String title;
    /**
     * 学历
     */
    private String education;
    /**
     * 职位
     */
    private String position;
    /**
     * 部门
     */
    private String department;
    /**
     * 学院
     */
    private String academy;
    /**
     * 手机
     */
    private String phone;
    /**
     * 邮箱
     */
    private String email;
    /**
     * 简介
     */
    private String intro;
    /**
     * 领域
     */
    private String fields;
    /**
     * 创建时间
     */
    @TableField("create_time")
    private Date createTime;
    /**
     * 1:正常   -1:删除
     */
    private Integer status;


    public Integer getSupId() {
        return supId;
    }

    public void setSupId(Integer supId) {
        this.supId = supId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Integer getStroke() {
        return stroke;
    }

    public void setStroke(Integer stroke) {
        this.stroke = stroke;
    }

    public String getInitials() {
        return initials;
    }

    public void setInitials(String initials) {
        this.initials = initials;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getAcademy() {
        return academy;
    }

    public void setAcademy(String academy) {
        this.academy = academy;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getFields() {
        return fields;
    }

    public void setFields(String fields) {
        this.fields = fields;
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
        return "Supervisor{" +
        ", supId=" + supId +
        ", name=" + name +
        ", type=" + type +
        ", surname=" + surname +
        ", stroke=" + stroke +
        ", initials=" + initials +
        ", priority=" + priority +
        ", title=" + title +
        ", education=" + education +
        ", position=" + position +
        ", department=" + department +
        ", academy=" + academy +
        ", phone=" + phone +
        ", email=" + email +
        ", intro=" + intro +
        ", fields=" + fields +
        ", createTime=" + createTime +
        ", status=" + status +
        "}";
    }
}
