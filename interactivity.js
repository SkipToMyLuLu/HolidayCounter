

// css interlinking functionality
const preVerticalScroll = window.scrollY + 50
const verticalScroll = preVerticalScroll * 0.6;
const rootElement = document.documentElement
rootElement.style.setProperty('--scroll-position', verticalScroll)



// function Round(inputInt) {

// }


function makeTheDateIntoADate(ID) {

    const divTarget = document.getElementById(ID)
    console.log('div target2 with the  ' + divTarget.dataset.eventdate)
    console.log('we got the div from the function to make things into dates yahoo')


    const currentDMY = new Date

    var EventDate = divTarget.dataset.eventdate
    console.log('event date from html:  ' + EventDate)


    const currentYear = new Date().getFullYear()
    console.log('current year:  ' + currentYear)

    return { 'currentYear': currentYear, 'EventDate': EventDate, 'currentDMY': currentDMY }

}





function timeRemainAndDate(ID, childID) {

    const divChild = document.getElementById(childID)
    const divTarget = document.getElementById(ID)

    let holidayName = divChild.dataset.holidayname

    console.info("Div aquired (Plain Text)")

    // var result = makeTheDateIntoADate(ID)
    // console.log('result: ', result)
    // console.log('result.currentyear: ', result.currentYear)
    const eventDateOBJ = makeTheDateIntoADate(ID)
    console.log('event date obj', eventDateOBJ)
    var eventDate = eventDateOBJ.EventDate.toString().concat('-' + eventDateOBJ.currentYear.toString())
    const currentDMY = eventDateOBJ.currentDMY
    console.log('dmy current', currentDMY)

    console.log('eventDate: str  ', eventDate)

    let eventDateINT = new Date(eventDate)
    console.log('event adte int. ;  ', eventDateINT)

    // const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerDay = 86400000
    let timeRemains
    let timeRemainsDEC = Math.abs(eventDateINT - currentDMY) / millisecondsPerDay
    // let timeRemainsDEC = 1.45
    console.log('time remains dec', timeRemainsDEC)
    var timeRemainsROUDN = Math.round(timeRemainsDEC)
    console.log('rounded remains :', timeRemainsROUDN)

    if (timeRemainsROUDN > timeRemainsDEC) {
        timeRemains = timeRemainsROUDN
        console.log('time remains roudn is greater than dec')
    }
    if (timeRemainsROUDN < timeRemainsDEC) {
        timeRemainsROUDN++
        console.log('time remains roudn', timeRemainsROUDN)
        timeRemains = timeRemainsROUDN
        console.log('time reimains roudn is less than dec')
    }

    console.log('time remains : ', timeRemains)
    // / 1000 / 60 / 60 / 24


    // divChild. = timeRemains
    divTarget.innerHTML = "Todays date is: " + currentDMY.toString()
    divChild.innerHTML = "There are " + timeRemains + " days until " + holidayName + "!"






}





function divTime(ID) {
    const divTarget = document.getElementById(ID)
    console.info("Div aquired (Plain Text)")
    var time = new Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    // const options = {}
    const displayDate = time.toLocaleDateString(undefined, options);

    divTarget.innerHTML = "Today is: " + displayDate
}


// Christler
// divUnformatted("christmas", "Test Data")
// console.info('div plain txt fun. run, for chris')

function callthings() {
    // divUnformatted("christmas", "Test Data")
    // console.info('div plain txt fun. run, for chris')
    divTime("CurrentDT")
    console.log("divtime")
    console.log("Running div unformat with m as non")
    // divUnformatted(m)
    console.log("running div unformatted with m as string")
    timeRemainAndDate("christmas", "timeRemaining")
    console.log("running makedate function into M non")
    // makeTheDateIntoADateThingYahooThisIsVeryCoolNameIsItNotQuestionMark(m);
    console.log("running make date function with M as str")
    // makeTheDateIntoADate("m")
}


function callthings2() {
    timeRemainAndDate("christmas", "timeRemaining")
    divTime("CurrentDT")
}
callthings2()

