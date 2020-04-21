// pages/sign/sign.js
var {
  request, baseURL, formatTime
} = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageNum: 1,
    pages: 1,
    height: 0,
    nothing: true
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.check();
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - (res.windowHeight * 0.03),
        })
      }
    })
  },
  /**
 * 判断是否绑定
 */
  check: function () {
    var that = this;
    request({
      url: "user/hasBind",
    }).then(res => {
      if (res.status == 200) {
        that.setData({
          canSubmit: res.data.res
        })
      }
      if (res.data.res == false) {
        wx.navigateTo({
          url: '../check/check',
        })
      }
      if(res.data.identity != 'teacher'){
         wx.showToast({
          title: '暂无权限',
          icon: 'none',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '../home/home',
              })
            },1000);
          }
        })
      } else {
        that.getList();
      }
    })
  },
  /**
   * 获取历史预约记录
   */
  getList: function () {
    var that = this;
    request({
      url: 'booking/getMyBooking',
      data: {
        page: that.data.pageNum,
        pageSize: 10
      }
    }).then(res => {
      var data = res.data;
      if (res.status == 200) {
        for (var i = 0; i < data.records.length; i++) {
          var listIndex = data.records[i];
          let time = formatTime(new Date())
          if(time < listIndex.startTime) {
            listIndex.canCancel = true;
          } else {
          }
          listIndex.startTime = listIndex.startTime.substring(0,16);
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
  cancel: function(e) {
    var that = this;
    request({
      url: 'booking/cancelBooking',
      data:{
        meetingId: e.currentTarget.dataset.id
      },
      method: 'post'
    }).then(res => {
      if(res.status == 200) {
        that.setData({
          list: [],
          pageNum: 1,
          pages: 1
        })
        wx.showToast({
          title: '取消成功',
          icon: 'success',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              that.onLoad();
            }, 1000);
          }
        })
      }else {
        wx.showToast({
          title: res.message,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  /**
   * 下滑加载
   */
  lower: function () {
    var that = this;
    if(that.data.pageNum < that.data.pages) {
      that.setData({
        pageNum: that.data.pageNum + 1
      });
      that.getList();
    }
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