// pages/dbzj/dbzj.js
const app = getApp()
const util = app.util
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList: [],
    pageReady: false,
    typeIndex: '1'
  },

  turnTo(e) {
    wx.navigateTo({
      url: 'articles/articles',
    })
  },

  giveCall(e) {
    console.log(e)
    var phone = e.currentTarget.dataset.phone
    if (!phone) return
    wx.makePhoneCall({
      phoneNumber: phone 
    })
  },

  selectType(e) {
    console.log(e)
    var index = e.currentTarget.dataset.index
    this.setData({
      typeIndex: index
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
    // this.setData({
    //   pageReady: true
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(app.defaultUrl)
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

//api-获取代表之家列表
function getList(_this) {
  wx.showLoading({ title: '加载中' })
  let params = {
    _url: "system/getHouses",
    cookiesKey: wx.getStorageSync('cookiesKey'),
  }
  util.request('', params, function(res) {
    wx.hideLoading()
    console.log(res)
    if(res.result && res.result.length > 0) {
      let list = res.result
      _this.setData({
        rankList: list
      })
    } else {
      _this.setData({
        rankList: []
      })
    }
    _this.setData({
      pageReady: true
    })
  })
}