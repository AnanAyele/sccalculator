const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function appendFunction(func) {
    if (func === 'sqrt') {
        display.value += '√(';
    } else if (func === 'pow') {
        display.value += '^';
    } else if (func === 'sin' || func === 'cos' || func === 'tan' || func === 'log' || func === 'ln') {
        display.value += func + '(';
    } else if (func === 'pi') {
        display.value += Math.PI.toFixed(8);
    }
}

function calculateResult() {
    try {
        let expression = display.value
            .replace(/√\(/g, 'Math.sqrt(')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/\^/g, '**');

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}
