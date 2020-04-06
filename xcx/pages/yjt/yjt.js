// pages/yjt/yjt.js
const app = getApp()
const util = app.util

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    id: 1,
    // type: '投诉',
    type: '意见',
    focus: false
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
  
  },
  /**
   * 提交建议
   */
  saveData: function () {
    var that = this;
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

    var params = {
      _url: "system/userCreateComplaint",
      cookiesKey: wx.getStorageSync('cookiesKey'),
      type: that.data.type,
      content: that.data.content
    }

    let _this = this
    util.request('', params, function(res) {
      console.log(res)
      _this.setData({
        content: ''
      });
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1500
      })
    })


    // wx.request({
    //   url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
    //   data: {
    //     _url: "system/createComplaint",
    //     cookiesKey: wx.getStorageSync('cookiesKey'),
    //     type: that.data.type,
    //     content: that.data.content
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method: 'POST',
    //   success: function (result) {
    //     var data = result.data.result;
    //     if (result.data.status == 200) {
    //       that.setData({
    //         content: ''
    //       });
    //       wx.showModal({
    //         title: '温馨提示',
    //         content: '提交成功！',
    //         showCancel: false
    //       })
    //     } else if (result.data.status == 410) {

    //     }
    //   }
    // });
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
   * 判断是否绑定
   */
  getInfor: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "user/getInfo",
        cookiesKey: wx.getStorageSync('cookiesKey'),
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          if (data.userInfo == null || data.userInfo == "") {
            wx.redirectTo({
              url: '../check/check',
            })
          }
        } else if (result.data.status == 410) {

        }
      }
    });
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