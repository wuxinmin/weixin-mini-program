// components/qm-com/qm-com.js
Component({
  /**
   * 组件的属性列表
   */
  lifetimes:{
    attached(){
      console.log("attached"); 
    },
    detached(){
      console.log("detached");      
    }
  },
  options:{
    multipleSlots:true,
    // styleIsolation:'apply-shared' //父到子
    styleIsolation:'shared' //子覆盖父
  },
  properties: {
    msg:{
      type: String,
      // value是默认值
      value: "hahahaha"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:0,
    obj:{
      name:"jack",
      age: 18
    }
  },
  // 监听
  observers:{
    "num":function (val) {
      console.log(val); 
    },
    "obj":function (val) {
      console.log(val); 
      // 不能通过对对象的监听来监测对象内属性的变化的
    },
    "obj":function (val) {
      console.log(val); }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    callFather() {
      // console.log(111);
      this.triggerEvent('callFather',{
        message: '吃饭了吗，嘿嘿'
      }) 
    },
    changeHandle(){
      this.setData({
        num: this.data.num + 1,
        "obj.name":'mike'
      })
      console.log(this.data.obj);
    }
  }
})
