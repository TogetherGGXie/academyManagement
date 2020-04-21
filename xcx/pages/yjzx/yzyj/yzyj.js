// pages/yjt/jcwd/jcwd.js
const app = getApp()
var {
  request, baseURL
} = require('../../../utils/util.js');    
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    pageNum: 1,
    pages: 1,
    scrollViewHeight: 'auto',
    pageReady: false,
    getting: true
  },

  turnTo(e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    });
  },

  scrollBottom(e) {
    var that = this;
    if (that.data.pageNum < that.data.pages) {
      that.setData({
        pageNum: that.data.pageNum + 1
      });
      that.getList();
    }
  },

  scrolling(e) {
    // console.log(e)
    let _this = this
    const query = wx.createSelectorQuery()
    query.selectAll('.scroll-view').boundingClientRect()
    // query.select('.list-box').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      console.log(res)
      // let height_list = 0
      // for(let i=0; i<res[0].length; i++) {
      //   height_list = height_list + res[0][i].height
      // }
      // if (height_list >= res[1].height) {
      //   _this.setData({
      //     scrollViewHeight: res[1].height + 'px'
      //   })
      // } else {
      //   _this.setData({
      //     scrollViewHeight: 'auto'
      //   })
      // }
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
    this.setData({
      list: [],
      pages: 1,
      pageNum: 1,
    })
    this.getList()
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

  },

  //api-获取精彩问答数据
  getList: function() {
    console.log(111)
    var that = this;
    var params = {
      url: "complaint/getShowComplaint",
      data: {
        page: that.data.pageNum,
        pageSize: 10
      }
    }
    console.log(1111)
    if(!that.data.getting) return
    console.log(2222)
    that.setData({
      'getting': true
    })
    wx.showLoading({ title: '加载中' })

    request(params).then(res => {
      wx.hideLoading()
      var data = res.data
      if (data.records == "" || data.records == null) {
      that.setData({
        nothing: false
      })
      } else {
        that.setData({
          nothing: true
        })
      }
      if (res.data.records && res.data.records.length > 0) {
        for (var i = 0; i < res.data.records.length; i++) {
          var listIndex = res.data.records[i];
          if (res.data.records[i].reply == null || res.data.records[i].reply == "") {
            listIndex.reply = "暂无回复"
        }
        }
        that.setData({
          list: that.data.list.concat(res.data.records),
          pages: res.data.pages
        });
      } else {
        that.setData({
          list: [],
          pages: 1,
          pageNum: 1
        })
      }
      that.setData({ 
        pageReady: true
      })
    })
  }
})


