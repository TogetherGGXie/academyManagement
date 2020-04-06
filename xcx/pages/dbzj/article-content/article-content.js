// pages/dbzj/article-content/article-content.js
var WxParse = require('../../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsTime: '2018-05-30',
    id: 0,
    newsContent: '',
    newsTitle: '',
    newsTime: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getDetail(this)
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

function getDetail(_this) {
  let data = {
    "newsId": "97",
    "newsTypeId": "2",
    "newsTitle": "张江镇第四届人民代表大会第六次会议胜利召开",
    "newsImage": "https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/e6aefec931c70008f0aa31bc58fbb081_small.jpg",
    "newsBrief": "张江镇第四届人民代表大会第六次会议胜利召开",
    "newsContent": "<img src=\"https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/63f44fb831c72f8e9f286094ac9eeb10_small.png\" alt=\"\" /><img src=\"https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/b3e0210b8cb0a89dc00dfa1f275f4feb_small.png\" alt=\"\" /><img src=\"https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/66d0e0906edcb092472d53eb2f9a4602_small.png\" alt=\"\" /><img src=\"https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/a33fc206691d48cf7356f52b8eb5620f_small.png\" alt=\"\" /><img src=\"https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/245db5e13e1a041253b6f48e897e8a7f_small.png\" alt=\"\" /><img src=\"https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/a9d774d61f243caba933753046705377_small.png\" alt=\"\" /><img src=\"https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/17a7e77d4e66bc4016a03be723c57873_small.png\" alt=\"\" /><img src=\"https://st-img.yunban.cn/uploads2/rddb_xcx/19-01/25415511ad3d1b622f91bd296a9933bf_small.png\" alt=\"\" />",
      "newsTime": "2019-01-18",
      "status": "1",
      "createTime": "2019-01-24 14:24:28",
      "rank": "1"
    }
  _this.setData({
    newsTitle: data.newsTitle,
    newsTime: data.newsTime,
    newsContent: data.newsContent
  });
  WxParse.wxParse('article', 'html', data.newsContent, _this, 36);
}