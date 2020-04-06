// pages/new_jbqk/new_jbqk.js
var imgArr =  [
  {
    'mame': '基本情况',
    'img': [
      { 'url': 'jbqk1.png' }, { 'url': 'jbqk2.png' }, { 'url': 'jbqk3.png' }, { 'url': 'jbqk4.png' }
    ]
  },
  {
    'mame': '议事规则',
    'img': [
      { 'url': 'ysgz1.png' }, { 'url': 'ysgz2.png' }
    ]
  },
  {
    'mame': '工作制度',
    'img': [
      { 'url': 'gzzd1.png' }, { 'url': 'gzzd2.png' }, { 'url': 'gzzd3.png' }, { 'url': 'gzzd4.png' }, { 'url': 'gzzd5.png' }, { 'url': 'gzzd6.png' }
    ]
  }
];
var urlArr = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page1Type:true,
    page2Type:true,
    items : ''
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

  iconImg:function(e){
    var that = this;
    var name = e.currentTarget.dataset.name;
    that.setData({
      page1Type: false,
      page2Type: false,
      items:''
    })
    if (name == "基本情况"){
      that.setData({
        items: imgArr[0]
      })
    } else if (name == "议事规则"){
      that.setData({
        items: imgArr[1]
      })
    }else{
      that.setData({
        items: imgArr[2]
      })
    }
    //console.log(that.data.items)
  },

  arrowImg:function(){
    var that = this;
    that.setData({
      page1Type: true,
      page2Type: true
    })
  },
  saveImgToPhotosAlbumTap: function (e) {
    var that = this;
    var imgUrl = e.currentTarget.dataset.url;
    var itemsImg = that.data.items.img;
    urlArr = [];
    for (var i = 0; i < itemsImg.length; i++) {
      urlArr.push('http://shzj.h5yunban.com/rddb_xcx/new/' + itemsImg[i].url);
    }
    console.log(urlArr)
    wx.previewImage({
      current: imgUrl, 
      urls: urlArr
    })
  } 
})