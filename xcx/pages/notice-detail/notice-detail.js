// pages/jyz-detail/jyz-detail.js
var WxParse = require('../../wxParse/wxParse.js');
var {
  request
} = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeId:0,
    title:'',
    publishTime:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.id)
    that.setData({
      noticeId: options.id
    })
    that.getDetail();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  /**
   * 获取详情
   */
  getDetail: function () {
    var that = this;
    request({
      url: 'notice/getNoticeInfo',
      data: {
        noticeId: that.data.noticeId
      },
    }).then(res => {
      var data = res.data
      if (res.status == 200) {
        console.log(data)
        that.setData({
          title: data.title,
          publishTime: data.publishTime,
          content: data.content
        });
        WxParse.wxParse('article', 'html', data.content, that, 36);
      }
    })
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