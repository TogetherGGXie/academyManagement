var WxParse = require('../../wxParse/wxParse.js');
var {
  request, baseURL
} = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImage: baseURL + "icon/default-professor.png",
    name: "",
    position: "市人大代表",
    job: ["中共党员", "汉族"],
    department: "光电信息工程系",
    incumbency: "无",
    phone: "18273938710",
    id: 0,
    close: true,
    success: false,
    intro:'',
    inputName: null,
    inputPhone: null,
    inputCode: null,
    focus1: false,
    focus2: false,
    focus3: false,
    code: false,
    userId: 0,
    time: 0
  },
  /**
   * 发送短信
   */
  getCode: function () {
    var that = this;
    if (that.data.inputPhone == null || that.data.inputPhone == "") {
      that.setData({
        focus2: true 
      });
      return;
    } 
    if (!that.data.inputPhone.match(/^[1][3,4,5,7,8][0-9]{9}$/)) {
      wx.showModal({
        title: '温馨提示',
        content: '手机号码有误，请重新输入!',
        showCancel: false,
        success(res) { }
      })
      return
    }
    if(that.data.time == 0) {
      that.setData({
        time: 60
      })
      var init = setInterval(function () {
        if(that.data.time > 0) {
          that.setData({
            time: that.data.time - 1
          })
        } else {
          clearInterval(init)
        }
      }, 1000);
    } else {
      return;
    }
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/orderSms",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        phone: that.data.inputPhone
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          
        } else if (result.data.status == 400) {
          wx.showModal({
            title: '温馨提示：',
            content: result.data.message,
            showCancel: false
          })
        }
      }
    });
  },
  /**
   * 判断验证码是否可点
   */
  checkCode: function () {
    var that = this;
    if (that.data.inputPhone != null && that.data.inputPhone != "") {
      that.setData({
        code: true
      });
    } else {
      that.setData({
        code: false
      });
    }
  },
  /**
   * 提交信息
   */
  submit: function () {
    var that = this;
    // that.setData({
    //   close: true,
    //   success: true
    // });
    // return
    if (that.data.inputName == null || that.data.inputName == "") {
      that.setData({
        focus1: true
      });
      return;
    }
    if (that.data.inputPhone == null || that.data.inputPhone == "") {
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
        _url: "system/createOrder",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        phone: that.data.inputPhone,
        realName: that.data.inputName,
        userInfoId: that.data.userId,
        code: that.data.inputCode
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            close: true,
            success: true
          });
        } else if (result.data.status == 400) {
          wx.showModal({
            title: '温馨提示',
            content: result.data.message,
            showCancel: false
          })
        } else {
          wx.showModal({
            title: '温馨提示',
            content: result.data.message,
            showCancel: false
          })
        }
      }
    });
    
  },
  bindCode: function (e) {
    this.setData({
      inputCode: e.detail.value
    })
  },
  bindPhone: function (e) {
    var that = this;
    that.setData({
      inputPhone: e.detail.value
    })
    if (that.data.inputPhone != null && that.data.inputPhone != "") {
      that.setData({
        code: true
      });
    } else {
      that.setData({
        code: false
      });
    }
  },
  bindName: function (e) {
    this.setData({
      inputName: e.detail.value
    })
  },
  know: function () {
    this.setData({
      close: true,
      success: false
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    this.getDetail();
  },
  getDetail: function () {
    var that = this;
    request({
      url: 'supervisor/getSupInfo',
      data: {
        supId: that.data.id
      },
    }).then(res => {
      var data = res.data
      that.setData({
        headImage: data.image == null || data.image == "" ? that.data.headImage : data.image,
        name: data.name,
        position: data.position,
        address: data.unitAddress,
        intro: data.intro,
        unit: data.department,
        phone: data.phoneNum,
        level: data.political,
        userId: data.supId
      });
    })
          // WxParse.wxParse('article', 'html', intro, that, 12);
  },
  /**
   * 打开模态框
   */
  modalShow: function () {
    this.setData({
      close: false
    });
  },
  /**
   * 关闭模态框
   */
  close: function () {
    this.setData({
      close: true
    })
  },
  /**
   * 输入框聚焦
   */
  bindfocus: function (e) {
    this.setData({
      id: e.currentTarget.dataset.id
    });
  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
      },
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