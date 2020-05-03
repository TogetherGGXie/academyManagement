// pages/check/check.js
var app = getApp();
var {
  request, baseURL
} = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:"",
    inputCode:'',
    headImage: '',
    userName: '',
    code: false,
    account:'',
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
        // that.update();
      }
    })
  },
  
  bindCode: function(e) {
    this.setData({
      inputCode: e.detail.value
    })
  },
  bindPSW:function (e) {
    var that = this;
    that.setData({
      password: e.detail.value
    })
    
  },
  bindAccount: function(e) {
    this.setData({
      account: e.detail.value
    })
  },

  /**
   * 用户绑定微信
   */
  check: function () {
    var that = this;
    if (that.data.account == null || that.data.account == "") {
      that.setData({
        focus1: true
      });
      return;
    }
    if (that.data.password == null || that.data.password == "") {
      that.setData({
        focus2: true
      });
      return;
    }
    request({
      url: 'user/bind',
      data: {
        account: that.data.account,
        password: that.data.password
      },
      method: 'post'
    }).then(res =>{
      console.log(res)
      if(res.status != 200) {
        wx.showModal({
          title: '温馨提示',
          content: res.message,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '请先绑定账号',
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