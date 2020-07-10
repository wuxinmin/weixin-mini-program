// pages/text2/text2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello world"
  }, 
  clickMe: function (event) {
    // console.log(event.currentTarget.dataset);
    // this.data.msg = "你好世界"   只改变了值的是view界面并没有改变
    // 修改msg值的正确做法
    this.setData({
      msg: "你好世界"
    })
    console.log(this.data.msg);
    
  },
  ChangeMe: function () {
    console.log("文本框改变了");
  },
  getUserInfo: function (e) {
    console.log(e);
  },
  getPhoneNumber: function (e) {
    console.log(e);
  },
  getContact: function (e) {
    console.log(e);
    
  }
})