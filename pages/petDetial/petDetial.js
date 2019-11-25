//获取应用实例
const app = getApp();
Page({
  data:{
    showLoading: false,
    showContent: true,
    id:'',
    petDetail:'',
    petSkill:''
  },
  onLoad:function(options){
    var that = this;
    if(options.id) {
      that.setData({id:options.id})
    } else {
      console.error("参数错误!");
      return;
    }
    that.queryPet({});
    that.queryPetSkill({});
  },

  /**
   * 查询列表
   */
  queryPet: function (options) {
    var that = this;
    var jssiJson = require("../../utils/jssiJson");
    var queryPetUrl = "/pet/get";
    var param = {};
    if (that.data.id) {
      param.id = that.data.id;
    }
    jssiJson.syncAjaxPost(
      param,
      queryPetUrl,
      that.queryPetCallback
    );
  },

  /**
 * 查询技能列表
 */
  queryPetSkill: function (options) {
    var that = this;
    var jssiJson = require("../../utils/jssiJson");
    var queryPetSkillUrl = "/skill/petSkillList";
    var param = {};
    if (that.data.id) {
      param.id = that.data.id;
    }
    jssiJson.syncAjaxPost(
      param,
      queryPetSkillUrl,
      that.queryPetSkillCallback
    );
  },

  /**
 * 查询详情回调函数
 */
  queryPetCallback: function (res) {
    var that = this;
    if (res && res.statusCode == 200) {
      if (res.data.msg.image) {
        res.data.msg.image = app.globalData.serviceUrl + "image/pet/" + res.data.msg.image
      }else{
        res.data.msg.image = app.globalData.serviceUrl + "image/icon_border_large.jpg"
      }
      that.setData({
        //将接口返回的数据data赋值给data
        petDetail: res.data.msg
      })
    }
  },


  /**
 * 查询技能回调函数
 */
  queryPetSkillCallback: function (res) {
    var that = this;
    if (res && res.statusCode == 200) {
      that.setData({
        //将接口返回的数据data赋值给data
        petSkill: res.data.msg
      })
    }
  },


  /**
 * 查询列表回调函数
 */
  openSkillDetail: function (res) {
    var that = this;
    wx.navigateTo({
      url: '/pages/skillDetial/skillDetial?id=' + res.currentTarget.dataset.id //跳转页面
    })
  },

  onReady:function(){
  },
  onShow:function(){
  },
  onHide:function(){
  },
  onUnload:function(){
  }
})