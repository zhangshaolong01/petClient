//获取应用实例
const app = getApp();
Page({
  data:{
    headImageUrl: app.globalData.serviceUrl + "image/pet_head.jpg",
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  }
})