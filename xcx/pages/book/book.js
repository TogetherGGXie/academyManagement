var WxParse = require('../../wxParse/wxParse.js');
var {
  request, baseURL,formatTime
} = require('../../utils/util.js');
let commenting = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    roomId: 0,
    roomList: [],
    date: "",
    startTime: "",
    endTime: "",
    rIndex: 0,
    now: "",
    sdate: "",
    stime: "",
    edate: "",
    list: [],
    pageNum: 1,
    pages: 1,
  },
  /**
   * 获取会议室列表
   */
  getRooms: function () {
    var that = this;
    request({
      url: 'meetingRoom/getMeetingRooms'
    }).then(res => {
      if (res.status == 200) {
        that.setData({
          roomList: res.data
        })
      }
    })
  },
  pickRoom: function (e) {
    this.setData({
      rIndex: e.detail.value,
      roomId: this.data.roomList[e.detail.value].roomId,
      name: this.data.roomList[e.detail.value].name,
    })
  },
  setDate: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  setStartTime: function (e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  setEndTime: function (e) {
    this.setData({
      endTime: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.check();
    var time = formatTime(new Date())
    var d = new Date()
    d.setDate(d.getDate() + 7);  //注意setDate()的用法，0为上月最后一天；setDate(d.getDate()-n)标示N天以前
    let year = d.getFullYear();
    let mon = d.getMonth() + 1;
    let day = d.getDate();
    let s = year + '-' + (mon < 10 ? ('0' + mon) : mon) + '-' + (day < 10 ? ('0' + day) : day);
    this.setData({
      now: time,
      sdate: time.substring(0, 10),
      date: time.substring(0, 10),
      stime: time.substring(11, 16),   
      edate: s.substring(0,10),
      startTime: time.substring(11, 16),
      endTime: time.substring(11, 16),
    })
  },
  check: function () {
    var that = this;
    request({
      url: "user/hasBind",
    }).then(res => {
      if (res.data.res == false) {
        wx.showToast({
          title: '请先绑定账号',
          icon: 'none',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              wx.navigateTo({
                url: '../check/check',
              })
            }, 1000);
          }
        })
      }
      if (res.data.identity != 'teacher') {
        wx.showToast({
          title: '暂无权限',
          icon: 'none',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '../home/home',
              })
            }, 1000);
          }
        })
      }else {
        that.getRooms();
      }
    })
  },


  book(e) {
    var that = this;
    if (this.data.roomId == 0 || this.data.date == "" || this.data.startTime == "" || this.data.endTime == "") {
      wx.showToast({
        title: '请选择会议室及时间',
        icon: 'none',
        duration: 2000,
        success: function () {
          setTimeout(function () {
            return;
          }, 1000);
        }
      })
    }
    request({
      url: "user/hasBind",
    }).then(res => {
      if (res.data.res == false) {
        wx.showToast({
          title: '请先绑定账号',
          icon: 'none',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              wx.navigateTo({
                url: '../check/check',
              })
            }, 1000);
          }
        })
      }
      if (res.data.identity != 'teacher') {
        wx.showToast({
          title: '暂无权限',
          icon: 'none',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '../home/home',
              })
            }, 1000);
          }
        })
      }
    })
    var data = {
      roomId: that.data.roomId,
      startTime: that.data.date + ' ' + that.data.startTime + ':00',
      endTime: that.data.date + ' ' + that.data.endTime + ':00'
    }
    console.log(data)
    let params = {
      url: 'booking/book',
      data: {
        roomId: that.data.roomId,
        startTime: that.data.date + ' ' + that.data.startTime + ':00',
        endTime: that.data.date + ' ' + that.data.endTime + ':00'
      },
      method: 'post'
    }
    request(params).then(res => {
      if(res.status ==200) {
        wx.showToast({
          title: '预约成功',
          icon: 'success',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '../yyls/yyls',
              })
            }, 1000);
          }
        })
      } else {
        wx.showToast({
          title: res.message,
          icon: 'none'
        })
      }
    })
  },
  getBookings : function(){
    if(this.data.roomId == 0 || this.data.date == "") {
      wx.showToast({
        title: '请选择会议室及日期',
        icon: 'none',
        duration:2000,
        success: function () {
          setTimeout(function () {
              return;
          }, 1000);
        }
      })
    }
    this.setData({
      pageNum: 1,
      list: [],
      pages: 1,
    }),
    this.getList()
  },
  getList: function () {
    var that = this;
    request({
      url: 'booking/getBookings',
      data: {
        roomId: this.data.roomId,
        date: this.data.date,
        page: that.data.pageNum,
        pageSize: 10
      }
    }).then(res => {
      var data = res.data;
      if (res.status == 200) {
        for (var i = 0; i < data.records.length; i++) {
          var listIndex = data.records[i];
          let time = formatTime(new Date())
          listIndex.startTime = listIndex.startTime.substring(0, 16);
          listIndex.endTime = listIndex.endTime.substring(0, 16);;
        }
        that.setData({
          list: that.data.list.concat(data.records),
          pages: that.data.pages
        });
        if (data.records == "" || data.records == null) {
          that.setData({
            nothing: false
          })
        } else {
          that.setData({
            nothing: true
          })
        }
      } else if (res.status != 200) {
        wx.showToast({
          title: res.message,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  lower: function () {
    var that = this;
    if (that.data.pageNum < that.data.pages) {
      that.setData({
        pageNum: that.data.pageNum + 1
      });
      that.getList();
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