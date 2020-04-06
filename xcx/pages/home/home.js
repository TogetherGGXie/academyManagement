// pages/home/home.js
const app = getApp()
const util = app.util
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // slides: ['https://st-file.yunban.cn/20180524/slide.png'],
    slides: ['https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/ab055eb3c54d1b6d8b9d0c1e1f5e3bda_small.jpg'],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    images: {
      // bg: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/4b04a80fa5da3025a06f44023bfbc345_small.png',
      bg: util.defaultProUrl + 'assets/images/bg8.gif',
      logo: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/70e185e230d4d8555674f71b8d41a139_small.png',
      title: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/718656c51a5151ad34124495aa9f109e_small.png',
      title2: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/5abd004205d46a7825c7dd690b739ee9_small.png',
      bird1: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/a0625157b4e06ff0a13097e4011d5138_small.png',
      bird2: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/1fbf187e8713854cc72ea93c392cb5d8_small.png',
      bird3: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/ecce4833b0d20653f4e6415d68dfe555_small.png',
      bird4: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/7e72bff99f18fb04d9b756fa97217b8f_small.png',
      stars: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/6b895bfb7cb2524259ebed04a039b30f_small.png',
      star1: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/234198338c12cd151588b3ac6d9b4356_small.png',
      star2: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/047ac1ba9ca47ca35db352f12dd5fce9_small.png',
      star3: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/2819283469527aec0bc3fcda887f9236_small.png',
      star4: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/97b62d235401112d623eb978b7062be7_small.png',
      star5: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/8bbc458438c4eca4168353881a3e84ae_small.png',
    },
    showInitPage: true,
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