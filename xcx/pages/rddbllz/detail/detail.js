// pages/rddbllz/detail/detail.js
const app = getApp()
const util = app.util
let codeTimer = false
let peopleId = ''
let iscommenting = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOrder: false,
    showCommentPage: false,
    showOrderSuccess: false,
    orderTipPage: false,
    focusItem: '0',
    orderInfo: {
      name: '',
      phone: '',
      code: '',
      codeGetting: false,
      codeRestTime: 60,
    },
    peopleInfo: {},
    starNum: 0,
    commentValue: '',
    showCommentBtn: false,
    inputFocus: false
  },

  giveCall(e) {
    console.log(e)
    var phone = e.currentTarget.dataset.phone
    if (!phone) return
    wx.makePhoneCall({
      phoneNumber: phone
    })
  },

  bindCommentInput(e) {
    this.setData({
      commentValue: e.detail.value
    })
    console.log(this.data.commentValue)
  },

  toComment(e){
    this.setData({
      showCommentPage: true
    })
  },

  closeCommentPage(e) {
    this.setData({
      showCommentPage: false
    })
  },

  toOrder(e) {
    this.setData({
      orderTipPage: true
    })
  },

  toOrderPage(e) {
    this.setData({
      orderTipPage: false,
      showOrder: true
    })
  },

  hideOrder(e) {
    this.setData({
      showOrder: false
    })
  },

  hideOrderSuccess(e) {
    this.setData({
      showOrderSuccess: false
    })
  },

  bindfocus(e) {
    this.setData({
      focusItem: e.currentTarget.dataset.id,
      inputFocus: true
    })
    // console.log(this.data.orderInfo)
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

  getCode(e) {
    console.log(this.data.orderInfo)

    if (!util.isPhoneAvailable(this.data.orderInfo.phone)) {
      wx.showModal({
        title: '温馨提示',
        content: '请输入正确的手机号',
        showCancel: false
      })
      return
    }

    if (this.data.codeGetting) return
    let params = {
      _url: 'system/orderSms',
      cookiesKey: wx.getStorageSync('cookiesKey'),
      phone: this.data.orderInfo.phone
    }
    util.request('', params, function(res) {

    })

    this.setData({
      codeRestTime: 60,
      codeGetting: true
    })
    clearInterval(codeTimer)
    codeTimer = setInterval(() => {
      console.log(this.data.codeRestTime)
      if (this.data.codeRestTime <= 0) {
        clearInterval(codeTimer)
        this.setData({
          codeGetting: false
        })
        return
      }
      this.setData({
        codeRestTime: this.data.codeRestTime - 1
      })
    }, 1000)
  },

  bindPhoneInput(e) {
    console.log(e)
    let itemName = e.currentTarget.dataset.name
    this.setData({
      [`orderInfo.${itemName}`]: e.detail.value
    })
    // console.log(this.data.orderInfo)
  },

  orderSubmit(e) {
    console.log(e)
    if (!e.detail.value.name || !e.detail.value.phone || !e.detail.value.code) {
      wx.showModal({
        title: '温馨提示',
        content: '请将信息填写完整',
        showCancel: false
      })
      return 
    }
    let params = {
      _url: 'system/createDistrictOrder',
      cookiesKey: wx.getStorageSync('cookiesKey'),
      userInfoId: peopleId,
      realName: e.detail.value.name,
      phone: e.detail.value.phone,
      code: e.detail.value.code
    }
    let _this = this
    util.request('', params, function(res) {
      _this.setData({
        orderInfo: {
          name: '',
          phone: '',
          code: ''
        },
        showOrder: false,
        showOrderSuccess: true
      })
    })
  },

  praise(e) {
    console.log(e)
    let num = Number(e.currentTarget.dataset.index) + 1
    this.setData({
      starNum: num
    })
  },

  submitComment(e) {
    if (this.data.starNum <= 0) {
      wx.showModal({
        title: '温馨提示',
        content: '请进行评分',
        showCancel: false
      })
      return
    } else if (this.data.commentValue.replace(/ /g, '').length === 0) {
      this.setData({
        commentValue: ''
      })
      wx.showModal({
        title: '温馨提示',
        content: '请填写评议内容',
        showCancel: false
      })
      return
    }
    let params = {
      _url: 'system/addComment',
      cookiesKey: wx.getStorageSync('cookiesKey'),
      userInfoId: peopleId,
      score: this.data.starNum,
      content: this.data.commentValue
    }
    let _this = this
    if (iscommenting) return
    util.request('', params, function(res) {
      iscommenting = false
      setTimeout(() => {
        iscommenting = false
      }, 2000)
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1500
      })
      _this.setData({
        showCommentPage: false,
        starNum: 0,
        commentValue: '',
        showCommentBtn: false,
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let item = JSON.parse(options.item)
    console.log(item)
    peopleId = item.id
    this.setData({
      peopleInfo: item
    })

    if (wx.getStorageSync("openComment")) {
      this.setData({
        showCommentBtn: true
      })
    }
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
    clearInterval(codeTimer)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(codeTimer)
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