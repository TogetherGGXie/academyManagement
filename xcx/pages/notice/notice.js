// pages/jyz/jyz.js
var {
  request,baseURL
} = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: ['学院公告','教务公告'],
    list:[],
    pageNum: 1,
    pages: 1,
    height: 0,
    nothing: true,
    itemName:'',
    type: 1,
    isLimit: 0,
    baseUrl: baseURL
  },
  /**
 * 判断是否绑定
 */
  check: function () {
    var that = this;
    request({
      url: "user/hasBind",
    }).then(res => {
      if (res.status == 200) {
        if (res.data.res == false) {
        that.setData({
          text:  ['学院公告'],
          isLimit: 0
        })
        } else {
          that.setData({
            text: ['学院公告', '教务公告'],
            isLimit: 1
          })
        }
      }
      that.getList()
    })
  },
  /**
   * 获取列表
   */
  getList: function () {
    var that = this;
    request({
      url: 'notice/getNotices',
      data: {
        page: that.data.pageNum,
        pageSize: 10,
        isLimit: that.data.isLimit,
        type: that.data.type
      },
    }).then(res => {
      var data = res.data
      for (var i = 0; i < data.records.length; i++) {
        var listIndex = data.records[i];
        var time = (listIndex.publishTime).split(" ")[0];
        listIndex.time = time;
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
   * 
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
    that.check();
  },
  choose: function (e) {
    this.setData({
      index: e.currentTarget.dataset.id,
      newsType: e.currentTarget.dataset.id + 1,
      list: [],
      pages: 1,
      pageNum: 1
    });
    this.getList();
  },
  /**
   * 跳转
   */
  turnTo: function (e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../notice-detail/notice-detail?id=' + e.currentTarget.dataset.id,
    });
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