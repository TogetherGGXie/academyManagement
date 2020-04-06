// pages/zhlj/zhlj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pn: 1,
    amount: 1,
    height: 0,
    tabHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var query = wx.createSelectorQuery();
    //选择id
    query.select('#mjltest').boundingClientRect()
    query.exec(function (res) {
      //res就是 所有标签为mjltest的元素的信息 的数组
      console.log(res);
      //取高度
      that.setData({
        tabHeight: res[0].height
      });
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            height: res.windowHeight - that.data.tabHeight - 45 -(res.windowHeight * 0.03),
          })
          console.log(that.data.tabHeight);
        }
      })
    })
    
    that.getList();
  },
  /**
   * 跳转公众号链接
   */
  turnTo: function (e) {
    var url = e.currentTarget.dataset.url;
    var mpid = e.currentTarget.dataset.mpid;
    wx.navigateTo({
      url: "../page/page?mpid=" + mpid,
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
   * 获取数据
   */
  getList: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getMpInfo",
        pageSize:'1000',
        // pageNum: that.data.pn
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
            //amount: Math.ceil(data.amount / 10)
          });
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