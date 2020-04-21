// pages/dblz/dblz.js
var {
  request, baseURL
} = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 23,
    sign: false
  },
  /**
   * 判断是否绑定
   */
  check: function () {
    var that = this;
    request({
      url: "user/hasBind",
    }).then(res => {
      if (res.data.res == false) {
        wx.showToast({
          title: '请先绑定账号',
          icon: 'none',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              wx.navigateTo({
                url: '../check/check',
              })
            }, 1000);
          }
        })
      }
      if (res.data.identity != 'teacher') {
        wx.showToast({
          title: '暂无权限',
          icon: 'none',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '../home/home',
              })
            }, 1000);
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    console.log
    this.check();
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