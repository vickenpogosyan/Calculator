const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "Error" || display.value === "0") {
        display.value = "";
    }
    display.value += input;
}

function calculate() {
    if (display.value === "") {
        return;
    }
    try {
        let expression = display.value;
        expression = expression.replace(/√\(/g, "Math.sqrt(");   //convert sqrt symbol to function

        const result = eval(expression);

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "0";
}

function removeFromDisplay() {
    if (display.value === "Error") {
        display.value = "0";
        return;
    }
    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}