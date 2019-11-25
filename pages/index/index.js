// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    position: ["全部", "水栖", "小动物", "机械", "亡灵", "魔法", "元素", "飞行", "人型", "龙类"],
    petNameCn: '',
    petType: '',
    data: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //that.queryPetList({});
  },

  bindNameCnInput: function(e) {
    this.setData({
      petNameCn: e.detail.value
    })
  },

  bindPetTypeSelect: function(e) {
    //自定义组件触发事件时提供的detail对象
    this.setData({
      petType: e.detail.petType
    })
  },


  /**
   * 查询列表
   */
  queryPetList: function(options) {
    var that = this;
    var jssiJson = require("../../utils/jssiJson");
    var queryPetListUrl = "/pet/list";
    var param = {
      pageNumber: 0,
      pageSize: 30
    };
    if (that.data.petNameCn) {
      param.petNameCn = that.data.petNameCn;
    }
    if (that.data.petType) {
      param.petType = that.data.position[that.data.petType];
    }
    jssiJson.syncAjaxPost(
      param,
      queryPetListUrl,
      that.queryPetListCallback
    );
  },

  /**
   * 查询列表回调函数
   */
  queryPetListCallback: function(res) {
    var that = this;
    if (res && res.statusCode == 200) {
      that.setData({
        //将接口返回的数据data赋值给data
        data: res.data.msg
      })
    }
  },

  /**
   * 查询列表回调函数
   */
  openDetail: function(res) {
    var that = this;
    wx.navigateTo({
      url: '/pages/petDetial/petDetial?id=' + res.currentTarget.dataset.id, //跳转页面
      success: function() {},
      fail: function() {},
      complete: function(res) {}
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})