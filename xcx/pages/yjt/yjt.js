// pages/yjt/yjt.js
const app = getApp()
const util = app.util
var {
  request, baseURL
} = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    id: 1,
    type: '投诉',
    focus: false,
    canSubmit: false,
  },
  /**
   * 获取意见信息
   */
  bindInput: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  /**
   * 单选框选择
   */
  choose: function (e) {
    var id = e.currentTarget.dataset.id;
    var that = this;
    that.setData({
      id: id
    });
    if (id == 1) {
      that.setData({
        type: "投诉"
      });
    } else {
      that.setData({
        type: "建议"
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.check()
  },

  /**
   * 判断是否绑定
   */
  check: function() {
    var that = this;
    request({
      url: "user/hasBind",
    }).then(res => {
      if (res.status == 200) {
        that.setData({
          canSubmit: res.data.res
        })
      }
      if(res.data.res == false) {
        wx.navigateTo({
          url: '../check/check',
        })
      }
    })
  },
  /**
   * 提交建议
   */
  saveData: function () {
    var that = this;
    that.check();
    if (that.data.content == '' || that.data.content == null) {
      that.setData({
        focus: true
      });
      return;
    } else if (that.data.content.replace(/ /g, '').length === 0) {
      this.setData({
        content:''
      })
      wx.showModal({
        title: '温馨提示',
        content: '请输入您的问题!',
        showCancel: false
      })
      return
    }

    let _this = this
    request({
      url: "complaint/complaint",
      method: 'post',
      data: {
        type: that.data.type,
        content: that.data.content,
      }  
    }).then(res =>{
      if(res.status ==200) {
        _this.setData({
          content: ''
        });
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1500
        })
      } else if (res.status == -1) {
        _this.setData({
          content: ''
        });
        wx.showToast({
          title: '提交失败，暂未绑定账号',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.getInfor();  //去除绑定
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})