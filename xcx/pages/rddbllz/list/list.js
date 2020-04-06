// pages/rddbllz/list/list.js
const app = getApp()
const util = app.util
let areaIndex = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageShow: false,
    peoples: [],
    pagination: {
      currentPage: 1,
      total: 0,
      getting: false
    },
    showCommentBtn: false
  },

  noTurnTo(e) {
    return
  },

  turnTo: function (e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,  //相对或绝对
    });
  },

  scrollBottom(e) {
    console.log('scroll bottom')
    if (this.data.pagination.total > (this.data.pagination.currentPage - 1) * 10) {
      console.log('scroll bottom---getList')
      getList(this)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    areaIndex = options.area
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
    this.setData({
      // peoples: [],
      pagination: {
        total: 0,
        currentPage: 1,
        getting: false
      }
    })
    getList(this, true)

    if (wx.getStorageSync("openComment")) {
      this.setData({
        showCommentBtn: true
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

function getList(_this) {
  var params = {
    // _url: 'system/getUserInfo',
    _url: 'system/getDistrictUser',  //包含小选区
    cookiesKey: wx.getStorageSync('cookiesKey'),
    // EQ: {
    //   district: areaIndex
    // },
    district: areaIndex,
    pageSize: 10,
    pageNum: _this.data.pagination.currentPage
  }
  if (_this.data.pagination.getting) return
  _this.setData({
    'pagination.getting': true
  })
  wx.showLoading({ title: '加载中' })
  util.request('', params, function(res) {
    wx.hideLoading()
    console.log(res)

    if (params.pageNum === 1) {
      _this.setData({
        pageShow: true
      })
    }
    if (res.result.list && res.result.list.length > 0) {
      let list = params['pageNum'] === 1 ? []:_this.data.peoples
      res.result.list = res.result.list.map((item, index) => {
        item.image = item.image ? item.image : util.defaultAvatar
        item.item = JSON.stringify(item)
        return item
      })
      list.push(...res.result.list)
      _this.setData({
        peoples: list,
        pagination: {
          getting: false,
          total: Number(res.result.amount),
          currentPage: Number(res.result.pageNum) + 1
        }
      })
    } else {
      _this.setData({
        peoples: [],
        pagination: {
          getting: false,
          total: 0,
          currentPage: 1
        }
      })
    }

    console.log(_this.data.pagination)
  })
}