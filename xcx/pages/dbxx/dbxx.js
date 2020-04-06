// pages/dbxx/dbxx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:['市人大代表','区人大代表','镇人大代表'],
    zhenTabs: ['第一小组', '第二小组', '第三小组', '第四小组'],
    index: 0,
    zhenIndex:0,
    typeId:1,
    list:[],
    pn: 1,
    amount: 1,
    height: 0,
    nothing: true,
    showZhenTabs: false
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
    this.getList();
  },
  /**
   * 跳转详情页
   */
  turnTo: function (e) {
    wx.navigateTo({
      url: '../dbxx-detail/dbxx-detail?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 获取代表信息
   */
  getList: function() {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getUserInfo",
        EQ: { "type": that.data.typeId},
        pageNum: that.data.pn,
        ASC: ['initials']
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            list: that.data.list.concat(data.list),
            amount: Math.ceil(data.amount / 10)
          });
          if(data.list == "" || data.list == null) {
            that.setData({
              nothing: false
            })
          } else {
            that.setData({
              nothing: true
            })
          }
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 下滑加载
   */
  lower: function () {
    var that = this;
    if (that.data.pn < that.data.amount) {
      that.setData({
        pn: that.data.pn + 1
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
    this.setData({
      index: e.currentTarget.dataset.id,
      typeId: e.currentTarget.dataset.id + 1,
      list:[],
      pn: 1,
      amount: 1,
    });
    if (e.currentTarget.dataset.id == 2){
      this.setData({
        showZhenTabs: true,
        zhenIndex: 0,
        typeId: 3,
      });
    }else{
      this.setData({
        showZhenTabs: false
      });
    }
    this.getList();
  },
  /**
   * zhentab选中
   */
  chooseZhenTab: function (e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      zhenIndex: e.currentTarget.dataset.id,
      typeId: e.currentTarget.dataset.id + 3,
      list: [],
      pn: 1,
      amount: 1,
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