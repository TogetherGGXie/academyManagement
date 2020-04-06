// pages/yjt/jcwd/jcwd.js
const app = getApp()
const util = app.util

Page({

  /**
   * 页面的初始数据
   */
  data: {
    queList: [],
    pagination: {
      currentPage: 1,
      total: 0,
      getting: false,
    },
    scrollViewHeight: 'auto',
    pageReady: false
  },

  turnTo(e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    });
  },

  scrollBottom(e) {
    console.log('scroll bottom')
    // console.log(this.data.pagination)
    if(this.data.pagination.total > (this.data.pagination.currentPage - 1) * 10) {
      console.log('scroll bottom---getList')
      getList(this)
    }
  },

  scrolling(e) {
    // console.log(e)
    let _this = this
    const query = wx.createSelectorQuery()
    query.selectAll('.scroll-view').boundingClientRect()
    // query.select('.list-box').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      console.log(res)
      // let height_list = 0
      // for(let i=0; i<res[0].length; i++) {
      //   height_list = height_list + res[0][i].height
      // }
      // if (height_list >= res[1].height) {
      //   _this.setData({
      //     scrollViewHeight: res[1].height + 'px'
      //   })
      // } else {
      //   _this.setData({
      //     scrollViewHeight: 'auto'
      //   })
      // }
    })
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
    // let _this = this
    // const query = wx.createSelectorQuery()
    // query.selectAll('.main .one').boundingClientRect()
    // query.select('.list-box').boundingClientRect()
    // query.selectViewport()
    // query.exec(function (res) {
    //   console.log(res)
    //   let height_list = 0
    //   for(let i=0; i<res[0].length; i++) {
    //     height_list = height_list + res[0][i].height
    //   }
    //   if (height_list >= res[1].height) {
    //     _this.setData({
    //       scrollViewHeight: res[1].height + 'px'
    //     })
    //   } else {
    //     _this.setData({
    //       scrollViewHeight: 'auto'
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      // queList: [],
      pagination: {
        total: 0,
        currentPage: 1,
        getting: false
      }
    })
    getList(this, true)
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

//api-获取精彩问答数据
function getList(_this) {
  let params = {
    _url: "system/getShowComplaints",
    cookiesKey: wx.getStorageSync('cookiesKey'),
    pageNum: _this.data.pagination.currentPage,
    pageSize: 10
  }
  if(_this.data.pagination.getting) return
  _this.setData({
    'pagination.getting': true
  })
  wx.showLoading({ title: '加载中' })
  util.request('', params, function (res) {
    wx.hideLoading()
    console.log(res)
    if (res.result.list && res.result.list.length > 0) {
      let list = params['pageNum'] === 1 ? []:_this.data.queList
      list.push(...res.result.list)
      _this.setData({
        queList: list,
        pagination: {
          getting: false,
          total: Number(res.result.amount),
          currentPage: Number(res.result.pageNum) + 1
        }
      })
    } else {
      _this.setData({
        queList: [],
        pagination: {
          getting: false,
          total: 0,
          currentPage: 1
        }
      })
    }

    _this.setData({
      pageReady: true
    })

    console.log(_this.data.pagination)
  })
}