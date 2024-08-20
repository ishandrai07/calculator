function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        if (result === undefined || result === Infinity || isNaN(result)) {
            throw new Error('Invalid calculation');
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
