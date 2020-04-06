// pages/rddbllz/small-areas/small-areas.js
const app = getApp()
const util = app.util
let areaIndex = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageShow: true,
    showCommentBtn: true,
    peoples: [],
    smallAreas: []
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
    console.log(options)
    areaIndex = options.area
    getSmallAreas(this)
    getAreaspeoples(this)
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

function getSmallAreas(_this) {
  let params = {
    _url: 'system/getDistricts',
    district: areaIndex,
    cookiesKey: wx.getStorageSync('cookiesKey')
  }
  util.request('', params, function (res) {
    if(res.result && res.result.length > 0) {
      _this.setData({
        smallAreas: res.result
      })
    }
  })
}

//获取区代表
function getAreaspeoples(_this) {
  let params = {
    _url: 'system/getAreaDistricts',
    district: areaIndex,
    pageNum: 1,
    pageSize: 100,
    cookiesKey: wx.getStorageSync('cookiesKey')
  }
  util.request('', params, function (res) {
    if (res.result && res.result.list && res.result.list.length > 0) {
      _this.setData({
        peoples: res.result.list
      })
    }
  })
}