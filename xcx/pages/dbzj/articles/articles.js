// pages/dbzj/acticles/articles.js
const app = getApp()
const util = app.util

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        "newsId": "97",
        "newsTypeId": "2",
        "newsTitle": "张江镇第四届人民代表大会第六次会议胜利召开",
        "newsImage": "https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/e6aefec931c70008f0aa31bc58fbb081_small.jpg",
        "newsBrief": "张江镇第四届人民代表大会第六次会议胜利召开",
        "newsTime": "2019-01-18", "createTime": "2019-01-24 14:24:28",
        "rank": "1"
      },
      {
        "newsId": "97",
        "newsTypeId": "2",
        "newsTitle": "张江镇第四届人民代表大会第六次会议胜利召开",
        "newsImage": "https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/e6aefec931c70008f0aa31bc58fbb081_small.jpg",
        "newsBrief": "张江镇第四届人民代表大会第六次会议胜利召开",
        "newsTime": "2019-01-18", "createTime": "2019-01-24 14:24:28",
        "rank": "1"
      }
    ]
  },

  lower(e) {
    console.log(e)
  },

  turnTo(e) {
    console.log(e)
    wx.navigateTo({
      url: '../article-content/article-content',
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