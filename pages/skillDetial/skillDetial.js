//获取应用实例
const app = getApp();
Page({
  data:{
    showLoading: false,
    showContent: true,
    id:'',
    skillDetail:'',
    skillPetList:''
  },
  onLoad:function(options){
    var that = this;
    if(options.id) {
      that.setData({id:options.id})
    } else {
      console.error("参数错误!");
      return;
    }
    that.querySkill({});
    that.queryPetSkill({});
  },

  /**
   * 查询列表
   */
  querySkill: function (options) {
    var that = this;
    var jssiJson = require("../../utils/jssiJson");
    var querySkillUrl = "/skill/get";
    var param = {};
    if (that.data.id) {
      param.id = that.data.id;
    }
    jssiJson.syncAjaxPost(
      param,
      querySkillUrl,
      that.querySkillCallback
    );
  },

  /**
 * 查询详情回调函数
 */
  querySkillCallback: function (res) {
    var that = this;
    if (res && res.statusCode == 200) {
      if (res.data.msg.image) {
        res.data.msg.image = app.globalData.serviceUrl + "image/skill/" + res.data.msg.image
      } else {
        res.data.msg.image = app.globalData.serviceUrl + "image/icon_border_large.jpg"
      }
      that.setData({
        //将接口返回的数据data赋值给data
        skillDetail: res.data.msg
      })
    }
  },

  /**
* 查询技能列表
*/
  queryPetSkill: function (options) {
    var that = this;
    var jssiJson = require("../../utils/jssiJson");
    var queryPetSkillUrl = "/skill/skillPetList";
    var param = {};
    if (that.data.id) {
      param.skillId = that.data.id;
    }
    jssiJson.syncAjaxPost(
      param,
      queryPetSkillUrl,
      that.queryPetSkillCallback
    );
  },

  /**
 * 查询技能回调函数
 */
  queryPetSkillCallback: function (res) {
    var that = this;
    if (res && res.statusCode == 200) {
      that.setData({
        //将接口返回的数据data赋值给data
        skillPetList: res.data.msg
      })
    }
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