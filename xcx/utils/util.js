const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const baseURL = 'http://localhost:8999/'
const key = 'sessionId';

const request = function (obj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + obj.url,
      method: obj.method || 'get',
      data: obj.data || {},
      header: {
        cookie: wx.getStorageSync(key),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        if ('Set-Cookie' in res.header || 'set-cookie' in res.header) {
          wx.setStorageSync(key, res.header['Set-Cookie'] || res.header['set-cookie']);
        }
        if (res.data.status === 403) {
          wxlogin();
          throw 'err';
        }
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      },
    })
  });
}


function login(code) {
  let encryptedData = ""
  let iv = ""
  wx.getUserInfo({
    success: function (res) {
      encryptedData = res.encryptedData,
        iv = res.iv
      request({
        url: '/user/login',
        data: {
          code,
          encryptedData,
          iv
        },
        method: 'get'
      }).then((res) => {
        
      })

    }
  })

}

// 判定手机号码合理性
function isPhoneAvailable(str) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!myreg.test(str)) {
    return false
  } else {
    return true
  }
}

const defaultAvatar = 'https://st-img.yunban.cn/uploads2/rddb_xcx/19-10/79e75eff55b8e89ff2dfd6904a9bfbdf_small.jpg'  //默认头像，iitais,2019.10.23

const defaultProUrl = 'https://shzj.h5yunban.com/rddb_xcx/'  //默认链接前缀

module.exports = {
  formatTime: formatTime,
  request: request,
  login: login,
  baseURL: baseURL,
  isPhoneAvailable: isPhoneAvailable,
  defaultAvatar: defaultAvatar,
  defaultProUrl: defaultProUrl
}
