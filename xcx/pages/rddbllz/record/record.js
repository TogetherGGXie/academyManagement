// pages/rddbllz/record/record.js
const app = getApp()
const util = app.util
let commenting = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCommentPage: false,
    peoples: [],
    pagination: {
      currentPage: 1,
      total: 0,
      getting: false
    },
    selectedPeopleInfo: {},
    commentDegree: '',
    commentValue:'',
    showCommentBtn: true,
    pageReady: false,
    inputFocus: false
  },

  turnBack(e) {
    wx.navigateBack({
      delta: 1
    })
  },

  toComment(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      showCommentPage: true,
      selectedPeopleInfo: this.data.peoples[index],
      commentDegree: '',
      commentValue: '',
      showCommentBtn: true
    })
  },
  
  closeCommentPage(e) {
    this.setData({
      showCommentPage: false
    })
  },

  scrollBottom(e) {
    console.log('scroll bottom')
    // console.log(this.data.pagination)
    if (this.data.pagination.total > (this.data.pagination.currentPage - 1) * 10) {
      console.log('scroll bottom---getList')
      getList(this)
    }
  },

  selectComment(e) {
    // console.log(e)
    let value = e.currentTarget.dataset.value
    this.setData({
      commentDegree: value
    })
    console.log(this.data.commentDegree)
  },

  bindCommentInput(e) {
    this.setData({
      commentValue: e.detail.value
    })
    console.log(e)
  },

  bindTextfocus(e) {
    this.setData({
      inputFocus: true
    })
  },

  bindblur(e) {
    this.setData({
      inputFocus: false
    })
  },


  submitComment(e) {
    if (!this.data.commentDegree) {
      wx.showModal({
        title: '温馨提示',
        content: '请先进行评价',
        showCancel: false
      })
      return
    }
    let params = {
      _url:'system/addOrderComment',
      cookiesKey: wx.getStorageSync('cookiesKey'),
      districtOrderId: this.data.selectedPeopleInfo.districtOrderId,
      score: this.data.commentDegree,
      content: this.data.commentValue
    }
    if (commenting) return
    commenting = true
    setTimeout(() => {
      commenting = false
    }, 2000)
    let _this = this
    util.request('', params, function(res) {
      commenting = false
      _this.setData({
        commentDegree: '',
        commentValue: '',
        showCommentPage: false
      })
      wx.showToast({
        title: '评价成功',
        icon: 'success'
      })
      _this.setData({
        peoples: [],
        pagination: {
          total: 0,
          currentPage: 1,
          getting: false
        }
      })
      getList(_this)
    })
  },

  lookOneComment(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      showCommentPage: true,
      selectedPeopleInfo: this.data.peoples[index],
      commentDegree: this.data.peoples[index].comment.score,
      commentValue: this.data.peoples[index].comment.content,
      showCommentBtn: false
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      peoples: [],
      pagination: {
        total: 0,
        currentPage: 1,
        getting: false
      }
    })
    getList(this)
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

// api-获取记录
function getList(_this) {
  let params = {
    _url: 'system/getMyDistrictOrder',
    cookiesKey: wx.getStorageSync('cookiesKey'),
    pageSize: 10,
    pageNum: _this.data.pagination.currentPage
  }

  if (_this.data.pagination.getting) return
  _this.setData({
    'pagination.getting': true
  })
  wx.showLoading({ title: '加载中' })
  util.request('', params, function(res) {
    console.log(res)
    wx.hideLoading()

    if (res.result.list && res.result.list.length > 0) {
      let list = _this.data.peoples
      res.result.list = res.result.list.map((item, index) => {
        item.orderTime = item.orderTime ? item.orderTime.slice(0, 16).replace(/-/g, '/'):'待约见'
        item.orderTime = item.status == '-1' ? '已取消':item.orderTime
        item.userInfo.image = item.userInfo && item.userInfo.image ? item.userInfo.image : util.defaultAvatar
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

    _this.setData({
      pageReady: true
    })
  })
}