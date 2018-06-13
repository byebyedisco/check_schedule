# checkSchedule

```js
function checkSchedule() {
    var targetDate = new Date("2018-06-16");
    // Set the unit values in milliseconds.
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;

    var initDate = new Date("2018-06-13");

    var interval = targetDate.getTime() - initDate.getTime();
    var days = Math.floor(interval / msecPerDay );
	console.log(targetDate.getTime(), initDate.getTime(), interval, days);
    var schedule = ['night', 'rest', 'rest', 'day'];
    var index = days % 4;
	zzrw.alert(schedule[index]);
}
```
