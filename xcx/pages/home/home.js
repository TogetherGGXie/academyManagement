// pages/home/home.js
const app = getApp()
const util = app.util
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // slides: ['https://st-file.yunban.cn/20180524/slide.png'],
    baseUrl: util.baseURL,
    slides: [
      util.baseURL + 'home/slide1.jpg', 
      util.baseURL + 'home/slide2.jpg', 
      util.baseURL + 'home/slide3.jpg', 
      util.baseURL + 'home/slide4.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    images: {
      // bg: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/4b04a80fa5da3025a06f44023bfbc345_small.png',
      bg: util.defaultProUrl + 'assets/images/bg8.gif',
    },
    newIconShow: true
  },
  /**
   * 跳转
   */
  turnTo: function (e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getUserInfo: function (e) {
    wx.setStorageSync('userInfo', e.detail.userInfo);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let _this = this
    setTimeout(() => {
      _this.setData({
        showInitPage: false
      })
    }, 5000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let endDate = new Date('2020/01/31 00:00:00')
    console.log(endDate)
    if (endDate <= new Date()) {
      this.setData({
        newIconShow: false
      })
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