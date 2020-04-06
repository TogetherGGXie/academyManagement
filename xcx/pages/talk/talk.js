const recorderManager = wx.getRecorderManager();
const options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'mp3',
  frameSize: 50
}
const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    auto: true,
    scrollTop:'',
    tempFilePath:'',
    friendHeadUrl: '',
    textMessage: '',
    userId: 2,
    touchStart: false,
    imgwidth: 0,
    imgheight: 0,
    voice: false, 
    play: true,
    messageType: 0,
    chatItems: [],
    chatItemsIds:[],
    scrollTopTimeStamp: 0,
    height: 0,
    value:'',
    title:'',
    count:'',
    groupId: '',
    init:'',
    headImage:'https://st-img.yunban.cn/uploads/rddb_xcx/18-11/ab76edb5405b1de19de888d11019fe9c_small.png'
  },
  imageLoad: function (e) {
    var _this = this;
    var $width = e.detail.width,    //获取图片真实宽度  
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例  
    var viewWidth = 400,           //设置图片显示宽度，  
      viewHeight = 400 / ratio;    //计算的高度值     
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  },
  bindinput: function (e) {
    var that = this;
    that.setData({
      value: e.detail.value
    })
  },
  /**
   * 发送数据
   */
  send: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/sendGroupMessage",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        groupId: that.data.groupId,
        message: that.data.value,
        messageType: 1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          console.log(1111111111)
          that.setData({
            value: ''
          })
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 点击对话
   */
  turn: function () {
    var that = this;
    that.setData({
      voice: !that.data.voice
    });
    that.pageScrollToBottom();
  },
  touchStart: function () {
    var that = this;
    that.setData({
      touchStart: true
    });
    recorderManager.start(options);
  },
  touchEnd: function () {
    var that = this;
    that.setData({
      touchStart: false
    });
    recorderManager.stop();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      title: options.name,
      count: options.num,
      groupId: options.id
    })
    wx.setNavigationBarTitle({
      title: options.name + "(" + options.num +  ")"//页面标题为路由参数
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - 70
        });
        // console.log(res.windowHeight - 70);
      }
    })
    recorderManager.onError(function () {
      // that.tip("录音失败！")
    });
    recorderManager.onStop(function (res) {
      that.setData({
        src: res.tempFilePath
      })
      that.setData({
        tempFilePath: res.tempFilePath,
        messageType: 3
      })
      // console.log(res.tempFilePath)
      that.uploadVideo();
      // that.playRecord();
    });
    
    that.data.init = setInterval(function () {
      that.getList();
    }, 1000)
  },
  /**
   * 距离底部50px时触发
   */
  upper: function (e) {
    // console.log("触发了");
    this.setData({
      auto: false
    })
  },
  /**
   * 预览图片
   */
  previewImage: function (e) {
    var url = e.currentTarget.dataset.url
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: [url] // 需要预览的图片http链接列表
    })
  },
  scrolltolower: function (e) {
    // console.log("开始了");
    this.setData({
      auto: true
    })
  },
  /**
   * 播放录制音频
   */
  playRecord: function () {
    var that = this;
    var src = that.data.tempFilePath;
    innerAudioContext.src = that.data.tempFilePath;
    innerAudioContext.play();
  },
  play: function(e) {
    var that = this;
    var src = e.currentTarget.dataset.message;
    innerAudioContext.src = src;
    if(that.data.play) {
      innerAudioContext.play();
      that.setData({
        play: false
      })
    } else {
      innerAudioContext.stop();
      that.setData({
        play: true
      })
    }
  },
  /**
   * 上传图片
   */
  uploadImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          tempFilePath: res.tempFilePaths[0],
          messageType: 2
        });
        that.uploadVideo();
      }
    })
  },
  /**
   * 获取讨论组信息
   */
  
  getList: function () {
    var that = this;
    wx.request({
      url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
      data: {
        _url: "system/getGroupMessages",
        cookiesKey: wx.getStorageSync('cookiesKey'),
        groupId: that.data.groupId,
        ASC: ["createTime"]
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (result) {
        var data = result.data.result;
        if (result.data.status == 200) {
          var arr = data.list;
          for (var i = 0, len = arr.length; i < len; i++) {
            if (that.data.chatItemsIds.indexOf(arr[i].messageId) <= -1) {
              that.setData({
                chatItems: that.data.chatItems.concat(data.list[i]),
                chatItemsIds: that.data.chatItemsIds.concat(data.list[i].messageId)
              });
            }
            if (i == arr.length -1) {
              if (that.data.auto) {
                setTimeout(function () {
                  that.pageScrollToBottom();
                }, 10)
              }
            }
          }
        } else if (result.data.status == 410) {

        }
      }
    });
  },
  /**
   * 获取容器高度使滑动条滑动最底部
   */
  pageScrollToBottom: function () {
    var that = this;
    wx.createSelectorQuery().select('#page').boundingClientRect(function (rect) {
      // 使页面滚动到底部
      // console.log(rect.height);
      that.setData({
        scrollTop: rect.height
      })
    }).exec()
  },
  uploadVideo: function () {
    var that = this;
    wx.uploadFile({
      url: 'https://shzj.h5yunban.com/rddb_xcx/upload.php',
      filePath: that.data.tempFilePath,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      success: function (res) {
        var str = res.data;
        // console.log(JSON.parse(str).result);
        wx.request({
          url: 'https://shzj.h5yunban.com/rddb_xcx/webservice.php',
          data: {
            _url: "system/sendGroupMessage",
            cookiesKey: wx.getStorageSync('cookiesKey'),
            groupId: that.data.groupId,
            message: JSON.parse(str).result,
            messageType: that.data.messageType
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: 'POST',
          success: function (result) {
            var data = result.data.result;
            if (result.data.status == 200) {

            } else if (result.data.status == 410) {

            }
          }
        });
      },
      fail: function (res) {
        // console.log(res);
        wx.showModal({
          title: '提示',
          content: "网络请求失败，请确保网络是否正常",
          showCancel: false,
          success: function (res) {

          }
        });
        wx.hideToast();
      }
    });  
  },
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
    var that = this;
    innerAudioContext.stop();
    clearInterval(that.data.init);
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
});
