//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    schedule : ""
  },
  onLoad: function() {},
  handleSelecteDate(e) {
    // wx.showToast({ title: `${e.detail.date}`, icon: false })
    // console.log(e.detail.date);
    var targetDate = new Date(e.detail.date);
    // Set the unit values in milliseconds.
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;

    var initDate = new Date("2018-06-13");

    var interval = targetDate.getTime() - initDate.getTime();
    var days = Math.floor(interval / msecPerDay);
    // console.log(targetDate.getTime(), initDate.getTime(), interval, days);
    var schedule = ['夜班', '休息', '休息', '白班'];
    var index = days % 4;
    this.data.schedule = schedule[index];
    this.setData({
        schedule : this.data.schedule
    });
  },
})
