const display = document.getElementById("display")

function appendToDisplay(input) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input
}

function calculate() {
    if (display.value === "") {
        return
    }
    try {
        let expression = display.value
        expression = expression.replace(/√\(/g, "Math.sqrt(")   //convert sqrt symbol to function

        const result = eval(expression)

        if (!Number.isFinite(result)) {
            display.value = "Error"
            return
        }
        display.value = result
    } catch (error) {
        display.value = "Error"
    }
}

function clearDisplay() {
    display.value = ""
}

function removeFromDisplay() {
    if (display.value === "Error") {
        display.value = ""
        return
    }
    display.value = display.value.slice(0, -1)
}