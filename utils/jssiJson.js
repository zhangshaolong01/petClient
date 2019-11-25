//获取应用实例
const app = getApp();

module.exports = {
  syncAjaxPost: syncAjaxPost
}
/**
 * 同步POST请求
 * @param sJson:json字符串
 * @param sUrl:ajax请求路径
 * @param callback:回调函数
 * @param paramObj:回调用到参数
 */
function syncAjaxPost(sJson, sUrl, callback) {
  wx.request({
    url: app.globalData.serviceUrl + sUrl,
    data: sJson,
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset:utf-8;'
    },
    method: 'POST',
    dataType: 'json',
    success: function(res) {
      if (callback) {
        callback(res);
      }
    },
    fail: function(res) {
      console.error(res)
    },
    complete: function(res) {}
  });
}