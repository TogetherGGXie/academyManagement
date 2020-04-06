// pages/dbhd-detail/dbhd-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImage: "https://st-file.yunban.cn/20180524/headImage.png",
    name: "马璟",
    level: "市人大代表",
    job:["中共党员","汉族"],
    unit: "华师大二附中",
    address: "华东师范大学闵行紫竹基础教育园区",
    phone: "18273938710",
    id: 0
  },
  /**
   * 获取通讯录个人信息
   */
  getDetail: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getUserInfoDetail",
        id: that.data.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            headImage: data.image,
            name: data.realName,
            level: data.position,
            job: [data.nation],
            unit: data.unit,
            address: data.unitAddress,
            phone: data.phoneNum,
          });
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 拨打电话
   */
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      id: options.id
    });
    that.getDetail();
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