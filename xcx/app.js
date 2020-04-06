//app.js
const util = require('/utils/util.js')

App({
  util: util,
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function (res) {
        util.login(res.code);
      }
    })
    
  },
  globalData: {
    userInfo: null
  }
})