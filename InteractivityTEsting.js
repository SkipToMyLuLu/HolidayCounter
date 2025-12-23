// var time = new Date
// console.log("time " + time)

// var dateHyphen = new Date("12-25-25")
// console.log(dateHyphen.toDateString())


var eventDateINT = new Date(12 / 25 / 25)
var millisecondsPerDay = 1000 * 60 * 60 * 24
var currentDMY = new Date(12 / 23 / 25)

let timeRemainsDEC = Math.abs(eventDateINT - currentDMY) / millisecondsPerDay
let timeRemains = Math.round(timeRemainsDEC)
console.log('time remains : ', timeRemains)