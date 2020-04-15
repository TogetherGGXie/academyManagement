// pages/history/history.js
const app = getApp()
const util = app.util
var {
  request, baseURL
} = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageNum: 1,
    pages: 1,
    height: 0,
    nothing: true
  },
  /**
   * 获取提交的历史记录
   */
  getList: function () {
    let that = this
    let params = {
      url: "complaint/getMyComplaints",
      data: {
        page: that.data.pageNum,
        pageSize: 10
      }
    }
    request(params).then(res =>{
      var data = res.data;
      if(res.status == 200) {
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
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - (res.windowHeight * 0.03),
        })
      }
    })
    that.getList();
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