//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    schedule : "",
    role_array : ['A','B','C','D','E'],
    role_index : 0,
  },
  onLoad: function() {},
  handleSelecteDate(e) {
    // wx.showToast({ title: `${e.detail.date}`, icon: false })
    // console.log(e.detail.date);
    var targetDate = new Date(e.detail.date);
    // var role = this.data.role_array[this.data.role_index];//ABCDE
    // console.log(role);
    // Set the unit values in milliseconds.
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;

    var initDate = new Date("2019-08-12");

    //20190809 新的排班表3.0

    var interval = targetDate.getTime() - initDate.getTime();
    if (interval >= 0){
      var days = Math.floor(interval / msecPerDay);
      var schedules = ['备勤', '休息', '休息', '白班', '夜班'];
      var index = days % 5;
      this.data.schedule = schedules[index];
      // console.log(this.data.schedule);
      this.setData({
        schedule:this.data.schedule
      });

    }else{
      this.setData({
        schedule:"还没开始"
      });
    }
    
    
  }
})
