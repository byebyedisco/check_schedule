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
    var role = this.data.role_array[this.data.role_index];//ABCDE
    // console.log(role);
    // Set the unit values in milliseconds.
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;

    var initDate = new Date("2019-06-24");

    //20190630 新的排班表

    var interval = targetDate.getTime() - initDate.getTime();
    var days = Math.floor(interval / msecPerDay);
    // console.log(targetDate.getTime(), initDate.getTime(), interval, days);
    // var schedule = ['夜班', '休息', '休息', '白班'];
    var schedule = ['白班', '中班', '夜班', '休息'];

    var day_schedule = [];
    var index = (days % 28) + 1;//第几天 从第一天计数
    // console.log(index);
    //周六日白班
    var sat_day = ['D', 'C', 'B', 'E'];
    var sun_day = ['E', 'D', 'C', 'B'];
    //平时中班
    var weekday_mid = ['B', 'C', 'D', 'E'];
    //平时夜班
    var weekday_night = ['E', 'B', 'C', 'D'];

    //周末白班计算
    if ((index + 1) % 7 == 0){
      day_schedule[0] = sat_day[(index+1)/7 - 1];
    }
    else if (index % 7 == 0){
      day_schedule[0] = sun_day[(index)/7 - 1];
    }
    else{
      day_schedule[0] = 'A';
    }
    //中班夜班计算
    day_schedule[1] = weekday_mid[(index-1) % 4];
    day_schedule[2] = weekday_night[(index-1) % 4];

    console.log(day_schedule);

    //检查角色当天排班情况
    var sch_index = day_schedule.indexOf(role);
    if (sch_index < 0){
      sch_index = 3;
    }

    //页面显示
    this.data.schedule = schedule[sch_index];
    this.setData({
        schedule : this.data.schedule
    });
  },
  bindPickerChange: function (e) {
    console.log('角色选择改为', e.detail.value)
    this.setData({
      role_index: e.detail.value
    })
  },
})
