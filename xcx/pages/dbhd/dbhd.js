// pages/dbhd/dbhd.js
var lineHeight = 0;
var endWords = "";
var userIdArr = [];
var discussTitle = '';
var isNum;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    cityName: "", //获取选中的城市名
    city: [],
    id: 1,
    show: true,
    tabHeight: 0,
    list: [],
    viewStyle: true,
    nothing: true,
    focus:false
  },
  /**
   * 获取城市
   */
  getcityList: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getUsers",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        pageSize: 1000
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            city: data.list
          });
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getcityList();
    that.getMyGroup();
  },
  /**
   * 跳转讨论组
   */
  turnTo: function (e) {
    wx.navigateTo({
      url: '../talk/talk?id=' + e.currentTarget.dataset.id + '&name=' + e.currentTarget.dataset.name + '&num=' + e.currentTarget.dataset.num,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var cityChild = this.data.city[0];
    var that = this;
    console.log(that.data.tabHeight);
    wx.getSystemInfo({
      success: function (res) {
        lineHeight = (res.windowHeight - 100) / 22;
        console.log(res.windowHeight - 100)
        that.setData({
          city: cityChild,
          winHeight: res.windowHeight - 67 - (res.windowHeight * 0.12),
          lineHeight: lineHeight
        })
      }
    })
  },
  /**
   * 获取我的讨论组
   */
  getMyGroup: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getGroups",
        cookiesKey: wx.getStorageSync('cookiesKey')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          that.setData({
            list: data
          });
          if (data == "" || data == null) {
            that.setData({
              nothing: false
            })
          } else {
            that.setData({
              nothing: true
            })
          }
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  //触发全部开始选择
  chStart: function () {
    this.setData({
      trans: ".3",
      hidden: false
    })
  },
  //触发结束选择
  chEnd: function () {
    this.setData({
      trans: "0",
      hidden: true,
      scrollTopId: this.endWords
    })
  },
  //获取文字信息
  getWords: function (e) {
    var id = e.target.id;
    this.endWords = id;
    isNum = id;
    this.setData({
      showwords: this.endWords
    })
    wx.vibrateShort();
  },
  //设置文字信息
  setWords: function (e) {
    var id = e.target.id;
    this.setData({
      scrollTopId: id
    })
  },
  // 滑动选择城市
  chMove: function (e) {
    var y = e.touches[0].clientY;
    var offsettop = e.currentTarget.offsetTop;
    var height = 0;
    var that = this;
    ;
    var cityarr = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]
    // 获取y轴最大值
    wx.getSystemInfo({
      success: function (res) {
        height = res.windowHeight - 10;
      }
    });
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop && y < height) {
      // console.log((y-offsettop)/lineHeight)
      var num = parseInt((y - offsettop) / lineHeight);
      endWords = cityarr[num];
      // 这里 把endWords 绑定到this 上，是为了手指离开事件获取值
      that.endWords = endWords;
    };
    //去除重复，为了防止每次移动都赋值 ,这里限制值有变化后才会有赋值操作，
    //DOTO 这里暂时还有问题，还是比较卡，待优化
    if (isNum != num) {
      // console.log(isNum);
      isNum = num;
      that.setData({
        showwords: that.endWords
      })
    }
  },
  //选择城市，并让选中的值显示在文本框里
  bindCity: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../dbhd-detail/dbhd-detail?id=' + id,
    })
  },
  /**
   * tab选择
   */
  choose: function (e) {
    var that = this;
    that.setData({
      id: e.currentTarget.dataset.id,
      show:!that.data.show
    });

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getInfor();
  },
  /**
   * 判断是否绑定
   */
  getInfor: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "user/getInfo",
        cookiesKey: wx.getStorageSync('cookiesKey'),
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          if (data.userInfo == null || data.userInfo == "") {
            wx.redirectTo({
              url: '../check/check',
            })
          }
        } else if (result.data.status == 410) {

        }
      }
    });
  },


  addGroupUser:function(e){
    var that = this;
    that.setData({
      viewStyle:false,
    });
  },

  //discussTitle 讨论组标题
  discuss:function(e){
    var tltle = e.detail.value;
    discussTitle = tltle;
    console.log(discussTitle)
  },

  //所有选择的人。
  checkboxChange: function (e) {
    userIdArr = e.detail.value;
    console.log(userIdArr);
  },

  //提交
  submission:function(){
    var that = this;
    that.setData({
      focus: true,
    });
    if (discussTitle == ""){
      wx.showModal({
        title: '温馨提示',
        content: '请填写讨论标题',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            setTimeout(function(){
              that.focusInput();
            },100)
          } 
        }
      })
      return;
    }
    if (userIdArr.length == 0) {
      wx.showModal({
        title: '温馨提示',
        content: '请选择讨论人员',
        showCancel: false
      })
      return;
    }
    console.log("ok");
    // 提交
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/createGroup",
        groupName: discussTitle,
        userIds: userIdArr,
        cookiesKey: wx.getStorageSync('cookiesKey'),
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
          that.setData({
            viewStyle: true,
          });
          that.getMyGroup();
        } else if (result.data.status == 410) {

        }
      }
    });
  },


  focusInput:function(){
    console.log(111111111)
    this.setData({
      focus: true
    })
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