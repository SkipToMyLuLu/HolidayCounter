function divUnformatted(ID) {
    const divTarget = document.getElementById(ID)
    console.info("Div aquired (Plain Text)")
    const month = divTarget.dataset.month
    const day = divTarget.dataset.day
    var dated = divTarget.dataset.DateHyphen




    const time = new Date

    var yearTime = time.getFullYear()
    var DateThe = dated += yearTime

    // const theDate = time.getMonth(month) + time.getDay(day)
    var theDate = DateThe

    let timeRemaining = time.getTime() - theDate.getTime()
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    let remainingDayTime = timeRemaining / millisecondsPerDay
    console.log(remainingDayTime)


    // let monthRemain = time.getMonth() - month
    // console.log("month remain + " + monthRemain)


    // let dayRemain = time.getDay() - day
    // console.log("dayremain " + dayRemain)


    // divTarget.innerHTML 


}


function divTime(ID) {
    const divTarget = document.getElementById(ID)
    console.info("Div aquired (Plain Text)")
    var time = new Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    // const options = {}
    const displayDate = time.toLocaleDateString(undefined, options);

    divTarget.innerHTML = displayDate
}


// Christler
// divUnformatted("christmas", "Test Data")
// console.info('div plain txt fun. run, for chris')

function callthings() {
    // divUnformatted("christmas", "Test Data")
    // console.info('div plain txt fun. run, for chris')
    divTime("CurrentDT")
    console.log("divtime")
    divUnformatted("christmas")
}

callthings()