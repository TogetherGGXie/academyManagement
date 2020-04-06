// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    nothing: true
  },
  /**
   * 获取我的讨论组
   */
  getMyGroup: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getGroups",
        cookiesKey: wx.getStorageSync('cookiesKey')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            list: data
          });
          if (data == "" || data == null) {
            that.setData({
              nothing: false
            })
          } else {
            that.setData({
              nothing: true
            })
          }
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 跳转讨论组
   */
  turnTo: function(e) {
    wx.navigateTo({
      url: '../talk/talk?id=' + e.currentTarget.dataset.id + '&name=' + e.currentTarget.dataset.name + '&num=' + e.currentTarget.dataset.num,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getMyGroup();
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