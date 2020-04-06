// pages/home/init/init.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: {
      bg: 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/4b04a80fa5da3025a06f44023bfbc345_small.png',
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
    }
  },

  birdAnimationFun(e) {
    console.log(e)
    let animation = wx.createAnimation({
      duration: 4000,
      timingFunction: 'linear'
    })
    animation.translate(100, -100).step().scale(Math.random() * 2).step()
    this.setData({
      birdAnimation: animation.export()
    })
    console.log(this.data.birdAnimation)
  },

  animationend(e) {
    console.log(e)
    let that = this;
    //复位容器的位置，准备开始下一次动画
    let animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear'
    })
    animation.translate(0, 0).scale(0).step({ duration: 0 });
    that.setData({
      birdAnimation: animation.export()
    }, () => {
      //开始新一轮动画
      let animation2 = wx.createAnimation({
        //此处以公告最长内容来设置动画持续时间（duration：决定整个动画播放的速度）
        duration: 4000,
        timingFunction: 'linear'
      });
      animation2.translate(100, -100).step().scale(Math.random() * 2).step()
      that.setData({
        birdAnimation: animation2.export()
      });
    });
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
    // this.birdAnimationFun()
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