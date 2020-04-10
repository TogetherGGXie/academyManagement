// pages/gzyw/gzyw.js

var {
  request
} = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: ['科学动态', '科研政策', '科研成果', '科研项目'],
    index: 0,
    list: [],
    type: 1,
    pageNum: 1,
    pages: 1,
    height: 0,
    nothing: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - 28 - (res.windowHeight * 0.07),
        })
      }
    })
    that.getList();
  },
  turnTo: function (e) {
    wx.navigateTo({
      url: '../sci-detail/sci-detail?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 获取工作要闻信息
   */
  getList: function () {
    var that = this;
    request({
      url: 'sci/getScis',
      data: {
        page: that.data.pageNum,
        pageSize: 10,
        type: that.data.type
      },
    }).then(res => {
      var data = res.data
      for (var i = 0; i < data.records.length; i++) {
        var listIndex = data.records[i];
        var time = (listIndex.publishTime).split(" ")[0];
        listIndex.publishTime = time;
        console.log(listIndex)
      }
      that.setData({
        list: that.data.list.concat(data.records),
        pages: data.pages
      });
      if (data.records == "" || data.records == null) {
        that.setData({
          nothing: false
        })
      } else {
        that.setData({
          nothing: true
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 下滑加载
   */
  lower: function () {
    var that = this;
    if (that.data.pageNum < that.data.pages) {
      that.setData({
        pageNum: that.data.pageNum + 1
      });
      that.getList();
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  /**
   * 选中
   */
  choose: function (e) {
    this.setData({
      index: e.currentTarget.dataset.id,
      type: e.currentTarget.dataset.id + 1,
      list:[],
      pages: 1,
      pageNum: 1
    });
    this.getList();
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