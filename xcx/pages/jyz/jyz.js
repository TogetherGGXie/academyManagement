// pages/jyz/jyz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pn: 1,
    amont: 1,
    height: 0,
    nothing: true,
    itemName:'',
  },
  /**
   * 获取列表
   */
  getList: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getStudys",
        DESC: ["createTime"],
        cookiesKey: wx.getStorageSync('cookiesKey'),
        pageNum: that.data.pn
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          for (var i = 0; i < data.list.length; i++) {
            var listIndex = data.list[i];
            var time = (listIndex.createTime).split(" ")[0];
            listIndex.time = time;
          }
          that.setData({
            list: that.data.list.concat(data.list),
            amount: Math.ceil(data.amount / 10)
          });
          if (data.list == "" || data.list == null) {
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
   * 
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
   * 跳转
   */
  turnTo: function (e) {
    wx.navigateTo({
      url: '../jyz-detail/jyz-detail?id=' + e.currentTarget.dataset.id,
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