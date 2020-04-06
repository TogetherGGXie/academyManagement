// pages/jbqk/jbqk.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: ['基本情况', '议事规则', '工作制度'],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getContent();
  },
  /**
   * 选中
   */
  choose: function (e) {
    this.setData({
      index: e.currentTarget.dataset.id
    });
    this.getContent();
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
   * 获取基本情况
   */
  getContent: function () {
    var that = this;
    var url = "system/getBaseInfo";
    if(that.data.index == 0) {
      url = "system/getBaseInfo";
    } else if (that.data.index == 1) {
      url = "system/getWorkRule"
    }else{
      url = "system/getWorkInstitution"
    }
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: url,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          WxParse.wxParse('article', 'html', data.newsContent, that, 36);
        } else if (result.data.status == 410) {

        }
      }
    });
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