// pages/rddbllz/rddbllz.js
const app = getApp()
const util = app.util

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgList:[
      'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/847117b9846fbbefeda7704e89613df0_small.png',
      'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/260d93f3acab13d1c1803423baafa9bb_small.png',
      'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/21435c17e7a1f743eb57ac83c01a1e27_small.png',
      'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/c4a573597de332afb3fc338fe4a259e4_small.png',
      'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/7eef99902b3c4c9348329bd83c60427d_small.png',
      // 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/f5d28e03ddd58d76880bc091408edc13_small.png'
    ],
    areas: []
  },

  turnTo: function (e) {
    console.log(e)
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    openComment()
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
    getList(this)
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

function getList(_this) {
  var params = {
    _url: 'system/getDistricts',
    cookiesKey: wx.getStorageSync('cookiesKey')
  }
  util.request('', params, function (res) {
    _this.setData({
      areas: res.result
    })
  })
}

// api---判断是否开启评议
function openComment() {
  let params = {
    _url: 'system/isOpenComment',
    cookiesKey: wx.getStorageSync('cookiesKey')
  }
  util.request('', params, function(res) {
    if(res.result) {
      wx.setStorageSync("openComment", res.result)
    } else {
      wx.setStorageSync("openComment", false)
    }
  })
}