// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pn: 1,
    amount: 1,
    height: 0,
    nothing: true,
    id: 0 
  },
  /**
   * 获取活动签到记录
   */
  record: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getMyActivity",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        pageNum: that.data.pn
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            list: that.data.list.concat(data.list),
            amount: Math.ceil(data.amount / 10)
          });
          if (data.list == "" || data.list == null) {
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
   * 签到
   */
  sign: function() {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/actSign",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        id: that.data.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          wx.showToast({
            title: '签到成功',
            icon: 'success',
            duration: 2000
          })
          that.record();
        } else if (result.data.status == 400) {
          wx.showToast({
            title: result.data.message,
            image: '../images/warning.png',
            duration: 2000
          })
          that.record();
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (options.id) {
      that.setData({
        id: options.id
      })
    }
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - (res.windowHeight * 0.03),
        })
      }
    })
  },
  /**
   * 登录
   */
  login: function(callback) {
    wx.login({
      success: res => {
        var that = this;
        wx.request({
          url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
          data: {
            _url: "user/login",
            code: res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: 'POST',
          success: function (result) {
            var data = result.data.result;
            if (result.data.status == 200) {
              wx.setStorageSync("cookiesKey", data.cookiesKey);
              callback();
            } else if (result.data.status == 410) {

            }
          }
        });
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  /**
   * 判断是否绑定
   */
  getInfor: function (callback) {
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
            wx.navigateTo({
              url: '../check/check',
            })
          } else {
            callback();
          }
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 下滑加载
   */
  lower: function () {
    var that = this;
    if (that.data.pn < that.data.amount) {
      that.setData({
        pn: that.data.pn + 1
      });
      that.record();
    }
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
    var that = this;
    that.setData({
      list: []
    })
    that.login(function () {
      that.getInfor(function () {
        if (that.data.id) {
          that.sign();
        } else {
          that.record();
        }
      });
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