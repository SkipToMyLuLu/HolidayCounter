function divUnformatted(ID) {
    const divTarget = document.getElementById(ID)
    console.info("Div aquired (Plain Text)")
    const month = divTarget.dataset.month
    const day = divTarget.dataset.day
    const time = new Date
    


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
}

callthings()