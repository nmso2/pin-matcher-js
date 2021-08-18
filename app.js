//Generate random pin & display it
function getPin() {
    const randomPin = Math.round(Math.random() * 10000);
    const pinString = randomPin + '';
    if (pinString.length == 4) {
        return pinString;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    const pinInput = document.getElementById('display-pin')
    pinInput.value = pin;
}


//type pin from key pad and display it
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number
        calcInput.value = newNumber;
    }
});