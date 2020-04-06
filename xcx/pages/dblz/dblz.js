// pages/dblz/dblz.js
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
          } else {
            that.checkSign();
          }
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 检测当前是否可签到
   */
  checkSign: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/isSign",
        cookiesKey: wx.getStorageSync('cookiesKey'),
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            sign: data.isSign,
            time: data.signNum
          });
          if(!that.data.sign) {
            that.sign();
          }
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 签到
   */
  sign: function() {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/attend",
        cookiesKey: wx.getStorageSync('cookiesKey'),
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            time: data
          });
        } else if (result.data.status == 410) {

        }
      }
    });
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
    this.getInfor();
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