// pages/new_jbqk/new_jbqk.js
const app = getApp()
const util = app.util

var imgArr =  [
  {
    'name': '学院介绍',
    'img': [
      { 'url': 'xyjs1.png' }, { 'url': 'xyjs2.png' }
    ]
  },
  {
    'name': '学院领导',
    'img': [
      { 'url': 'xyld.png' }
    ]
  },
  {
    'name': '教授委员会',
    'img': [
      { 'url': 'jswyh.png' }
    ]
  },
  {
    'name': '监督委员会',
    'img': [
      { 'url': 'jdwyh.png' }
    ]
  },
  {
    'name': '学院架构',
    'img': [
      { 'url': 'xyjg.png' }
    ]
  },
  {
    'name': '发展规划',
    'img': [
      
    ]
  },
];
var urlArr = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page1Type:true,
    page2Type:true,
    items : '',
    baseUrl: util.baseURL
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
    if (name == "学院介绍"){
      that.setData({
        items: imgArr[0]
      })
    } else if (name == "学院领导"){
      that.setData({
        items: imgArr[1]
      })
    } else if (name == "教授委员会") {
      that.setData({
        items: imgArr[2]
      })
    } else if (name == "监督委员会") {
      that.setData({
        items: imgArr[3]
      })
    } else if (name == "学院架构") {
      that.setData({
        items: imgArr[4]
      })
    } else{
      that.setData({
        items: imgArr[5]
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
      urlArr.push(this.data.baseUrl + 'xygk/' + itemsImg[i].url);
    }
    console.log(urlArr)
    wx.previewImage({
      current: imgUrl, 
      urls: urlArr
    })
  } 
})