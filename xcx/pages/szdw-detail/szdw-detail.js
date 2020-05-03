var WxParse = require('../../wxParse/wxParse.js');
var {
  request, baseURL
} = require('../../utils/util.js');
let commenting = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImage: baseURL + "icons/default-professor.jpg",
    name: "",
    position: "市人大代表",
    department: "光电信息工程系",
    incumbency: "无",
    phone: "18273938710",
    fields: null,
    supId: 0,
    intro: null,
    title: null,
    position: null,
    id: 0,
    close: true,
    success: false,
    inputName: null,
    inputPhone: null,
    inputCode: null,
    focus1: false,
    focus2: false,
    focus3: false,
    code: false,
    time: 0,
    openComment:false,
    showCommentPage: false,
    commentDegree: '',
    commentValue: '',
    showCommentBtn: true,
  },
  /**
   * 是否开启评价通道
   */
  isOpenComment: function () {
    var that = this;
    request({
      url: 'commentTime/isOpenComment'
    }).then(res => {
      if (res.data == true) {
        that.setData({
          openComment: true
        })
      }
    })
  },

  know: function () {
    this.setData({
      close: true,
      success: false
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    this.check()
  },
  check: function () {
    var that = this;
    request({
      url: "user/hasBind",
    }).then(res => {
      if (res.status == 200) {
        if (res.data.identity == 'teacher') {
          that.setData({
            openComment: false
          })
        } else {
          that.isOpenComment();
        }
      }
      that.getDetail();
    });
  },
  getDetail: function () {
    var that = this;
    request({
      url: 'supervisor/getSupInfo',
      data: {
        supId: that.data.id
      },
    }).then(res => {
      var data = res.data
      that.setData({
        headImage: data.image == null || data.image == "" ? that.data.headImage : data.image,
        name: data.name,
        position: data.position,
        intro: data.intro,
        department: data.department,
        phone: data.phone,
        fields: data.fields,
        supId: data.supId,
        education: data.education,
        incumbency: data.incumbency,
        title: data.title,
        email: data.email,
        position: data.position
      });
      WxParse.wxParse('article', 'html', data.intro, that, 36);
    })
  },
  /**
   * 打开模态框
   */
  modalShow: function () {
    this.setData({
      close: false
    });
  },
  /**
   * 关闭模态框
   */
  close: function () {
    this.setData({
      close: true
    })
  },
  /**
   * 输入框聚焦
   */
  bindfocus: function (e) {
    this.setData({
      id: e.currentTarget.dataset.id
    });
  },
  toComment(e) {
    var that = this;
    request({
      url: "user/hasBind",
    }).then(res => {
      if(res.data.res == false) {
        wx.showToast({
          title: '请先绑定账号',
          icon: 'none',
          duration: 1000,
          success: function () {
            setTimeout(function () {
              wx.navigateTo({
                url: '../ check / check',
              })
            }, 1000);
          }
        })
      }else if(res.data.identity == 'student'){
        this.setData({
          showCommentPage: true,
          commentDegree: '',
          commentValue: '',
          showCommentBtn: true
        })
      } else {
        wx.showToast({
          title: '教师无法进行评论',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  closeCommentPage(e) {
    this.setData({
      showCommentPage: false
    })
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

  submitComment(e) {
    var that = this;
    if (!this.data.commentDegree) {
      wx.showModal({
        title: '温馨提示',
        content: '请先进行评价',
        showCancel: false
      })
      return
    }
    let params = {
      url: 'comment/comment',
      data: {
        content: that.data.commentValue,
        score: that.data.commentDegree,
        supId: that.data.id
      },
      method: 'post'
    }
    if (commenting) return
    commenting = true
    setTimeout(() => {
      commenting = false
    }, 2000)
    request(params).then(res =>{
      commenting = false
      that.setData({
        commentDegree: '',
        commentValue: '',
        showCommentPage: false
      })
      wx.showToast({
        title: '评价成功',
        icon: 'success'
      })
    })
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