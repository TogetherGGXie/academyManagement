// pages/dbxx/dbxx.js
var {
  request, baseURL
} = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:['全体教师','教授','副教授'],
    subTabs: ['光电信息工程系', '控制科学与工程系', '测试与信息工程系', '计算机科学与工程系'],
    index: 0,
    subIndex:0,
    type:1,
    list:[],
    pageNum: 1,
    pages: 1,
    height: 0,
    nothing: true,
    showSubTabs: true,
    keyword: '光电信息工程系',
    openComment: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - 32 - (res.windowHeight * 0.03),
        })
      }
    })
    // this.isOpenComment();
    // this.getList();
    that.check();
  },
  /**
   * 跳转详情页
   */
  turnTo: function (e) {
    wx.navigateTo({
      url: '../szdw-detail/szdw-detail?id=' + e.currentTarget.dataset.id,
    })
  },
  check: function () {
    var that = this;
    request({
      url: "user/hasBind",
    }).then(res => {
      if (res.status == 200) {
        console.log(111)
        if (res.data.identity != 'student') {
          that.setData({
            openComment: false
          })
        } else {
          that.isOpenComment();
        }
      }
      that.getList();
    });
  },
  isOpenComment: function() {
    var that = this;
    request({
      url: 'commentTime/isOpenComment'
    }).then(res=> {
      if(res.data == true) {
        that.setData({
          openComment: true
        })
      }
    })
  },
  /**
   * 获取代表信息
   */
  getList: function() {
    var that = this;
    request({
      url: 'supervisor/getSupervisors',
      data: {
        page: that.data.pageNum,
        pageSize: 10,
        type: that.data.type,
        keyword: that.data.keyword
      },
    }).then(res => {
      var data = res.data
      for (var i = 0; i < data.records.length; i++) {
        var listIndex = data.records[i];
        var image = (listIndex.image == null || listIndex.image == '') ? baseURL + 'icon/default-professor.jpg' : listIndex.image;
        listIndex.image = image;
      }
      that.setData({
        list: that.data.list.concat(data.records),
        pages: data.pages
      });
      if(data.records == "" || data.records == null) {
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
   * tab选中
   */
  choose: function (e) {
    var that = this
    this.setData({
      index: e.currentTarget.dataset.id,
      type: e.currentTarget.dataset.id == 0 ? 1 : 2,
      keyword: e.currentTarget.dataset.id != 0 ? that.data.tabs[e.currentTarget.dataset.id] : "",
      list:[],
      pageNum: 1,
      pages: 1,
    });
    if (e.currentTarget.dataset.id == 0){
      this.setData({
        showSubTabs: true,
        subIndex: 0,
        keyword: that.data.subTabs[0],
        type: 1,
      });
    }else{
      this.setData({
        showSubTabs: false
      });
    }
    this.getList();
  },
  /**
   * subTab选中
   */
  chooseSubTab: function (e) {
    console.log(e.currentTarget.dataset.id)
    var that = this
    this.setData({
      subIndex: e.currentTarget.dataset.id,
      // typeId: e.currentTarget.dataset.id + 3,
      keyword: this.data.subTabs[e.currentTarget.dataset.id],
      list: [],
      pageNum: 1,
      pages: 1,
    });
    this.getList();
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