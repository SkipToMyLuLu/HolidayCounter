


function divUnformatted(ID, inputText) {
    const divTarget = document.getElementById(ID)
    console.info("Div aquired (Plain Text)")
    divTarget.textContent = inputText;
    console.log("Div updated (Plain text)")
}

// Christler
divUnformatted("christmas", "Test Data")
console.info('div plain txt fun. run, for chris')