// pages/check/check.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    inputCode:'',
    headImage: 'https://st-file.yunban.cn/20180524/wx.png',
    userName: '吉米蛋',
    code: false,
    name:'',
    fcous1: false,
    focus2: false,
    focus3: false,
    time: 0,
    userInfo: {},
    res: {}
  },
  /**
   * 获取用户数据
   */
  getUser: function() {
    var that = this;
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo,
          res: res
        })
        that.update();
      }
    })
  },
  update: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "user/update",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        rawData: that.data.res.rawData,
        signature: that.data.res.signature
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            list: data.list
          });
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  bindCode: function(e) {
    this.setData({
      inputCode: e.detail.value
    })
  },
  bindPhone:function (e) {
    var that = this;
    that.setData({
      phone: e.detail.value
    })
    if (that.data.phone != null && that.data.phone != "") {
      that.setData({
        code: true
      });
    } else {
      that.setData({
        code: false
      });
    }
  },
  bindName: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  getCode: function() {
    var that = this;
    if (that.data.phone != null && that.data.phone != "") {
      if (that.data.time == 0) {
        wx.request({
          url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
          data: {
            _url: "system/sms",
            cookiesKey: wx.getStorageSync('cookiesKey'),
            phone: that.data.phone
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: 'POST',
          success: function (result) {
            var data = result.data.result;
            if (result.data.status == 200) {
              that.setData({
                time: 60
              })
              var init = setInterval(function () {
                if (that.data.time > 0) {
                  that.setData({
                    time: that.data.time - 1
                  })
                } else {
                  clearInterval(init)
                }
              }, 1000);
            } else if (result.data.status == 400) {
              wx.showModal({
                title: '温馨提示',
                content: result.data.message
              });
            }
          }
        });
      } else {
        return;
      }
    } else {
      that.setData({
        focus2: false
      })
    }
  },
  /**
   * 用户绑定微信
   */
  check: function () {
    var that = this;
    if(that.data.name == null || that.data.name == "") {
      that.setData({
        focus1: true
      });
      return;
    }
    if (that.data.phone == null || that.data.phone == "") {
      that.setData({
        focus2: true
      });
      return;
    }
    if (that.data.inputCode == null || that.data.inputCode == "") {
      that.setData({
        focus3: true
      });
      return;
    }
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "user/bind",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        phone: that.data.phone,
        code: that.data.inputCode
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          wx.navigateBack();
        } else if (result.data.status == 400) {
          wx.showModal({
            title: '温馨提示',
            content: result.data.message,
          })
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '请先登录',
      image: '../images/warning.png',
      duration: 2000
    })
    this.getUser();
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