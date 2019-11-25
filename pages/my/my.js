var config = require('../../comm/script/config')
var app = getApp();
Page({
  data:{
    cells: [
      [{ title: '个人资料', text: '', access: true, fn: 'viewPersonInfo' }],
      [
        { title: '手机信息', text: '', access: true, fn: 'viewSystemInfo' },
        { title: '清除缓存', text: '', access: false, fn: 'clearStorage' }
      ],
      [{ title: '更新位置', text: '', access: true, fn: 'viewLocation' }],
      [{ title: '关于', text: '', access: true, fn: 'viewAbount' }]
    ],
    skin: ''
  },
  onLoad:function(cb){
    var that = this
    // 检测是否存在用户信息
    if (app.globalData.userInfo != null) {
      that.setData({
          userInfo: app.globalData.userInfo
      })
    } else {
      app.getUserInfo()
    }
    typeof cb == 'function' && cb()
  },
  onShow:function(){
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function(res){
        if (res.data == "") {
          that.setData({
            skin: config.skinList[0].imgUrl
          })
        } else {
          that.setData({
            skin: res.data
          })
        }
      }
    })
  },
  onPullDownRefresh: function() {
    this.onLoad(function(){
      wx.stopPullDownRefresh()
    })
  },
  viewGridDetail: function(e) {
    var data = e.currentTarget.dataset
		wx.navigateTo({
			url: "../" + data.url + '/' + data.url
		})
  },
  viewSkin: function() {
		wx.navigateTo({
			url: "../skin/skin"
		})
  },
  //设置
  viewPersonInfo: function () {
    wx.navigateTo({
      url: "../personInfo/personInfo"
    })
  },
  viewSystemInfo: function () {
    wx.navigateTo({
      url: "../systemInfo/systemInfo"
    })
  },
  viewLocation: function () {
    wx.navigateTo({
      url: "../location/location"
    })
  },
  clearStorage: function () {
    wx.showModal({
      title: '确认要清除',
      content: '清除缓存会删除浏览历史和收藏及个人资料',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorage()
          app.initStorage()
          wx.showToast({
            title: '清除成功',
            icon: 'success',
            duration: 1500
          })
        }
      }
    })
  },
  viewAbount: function () {
    wx.navigateTo({
      url: "../about/about"
    })
  }
})