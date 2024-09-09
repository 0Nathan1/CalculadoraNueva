let display = document.getElementById('display');
let memory = 0;

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (!['+', '-', '*', '/', '%'].includes(lastChar)) {
        display.value += operator;
    }
}

function calculate() {
    try {
        let result = eval(display.value);
        if (!isFinite(result)) {
            throw new Error("División por cero");
        }
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
