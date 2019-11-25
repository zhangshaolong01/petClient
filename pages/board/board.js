//获取应用实例
const app = getApp();
Page({
  data:{
    // text:"这是一个页面"
    imgUrl: app.globalData.serviceUrl + "image/pet_diagrams.jpg",
    petTypeImageUrl: app.globalData.serviceUrl + "image/pet_type/",
    petTypeList:''
  },
  onLoad:function(options){
    var that = this;
    that.queryPetType({});
  },

  /**
     * 查询列表
     */
  queryPetType: function (options) {
    var that = this;
    var jssiJson = require("../../utils/jssiJson");
    var queryUrl = "/petType/list";
    var param = {};
    jssiJson.syncAjaxPost(
      param,
      queryUrl,
      that.queryPetTypeCallback
    );
  },

  /**
 * 查询详情回调函数
 */
  queryPetTypeCallback: function (res) {
    var that = this;
    if (res && res.statusCode == 200) {
      that.setData({
        //将接口返回的数据data赋值给data
        petTypeList: res.data.msg
      })
    }
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})