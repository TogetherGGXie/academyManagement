// pages/gzyw-detail/gzyw-detail.js
var WxParse = require('../../wxParse/wxParse.js');
var {
  request
} = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsTime:'2018-05-30',
    id:0,
    newsContent:'',
    newsTitle:'',
    newsTime:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      id: options.id
    });
    that.getDetail();
  },
  /**
   * 获取详细信息
   */
  getDetail: function () {
    var that = this;
    request({
      url: 'news/getNewsInfo',
      data: {
        newsId: that.data.id
      },
    }).then(res => {
      var data = res.data
      if (res.status == 200) {
        that.setData({
          newsTitle: data.newsTitle,
          newsTime: data.newsTime,
          newsContent: data.newsContent
        });
        WxParse.wxParse('article', 'html', data.newsContent, that, 36);
      }
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