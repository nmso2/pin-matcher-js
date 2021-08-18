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

// submit button event 

document.getElementById("submit-btn").addEventListener('click', function () {
    const pin = document.getElementById('display-pin').value;
    console.log(pin)
    const typedNumbers = parseInt(document.getElementById('typed-numbers').value);
    console.log(typedNumbers)

    const successMassege = document.getElementById("notify-success");
    const errorMassege = document.getElementById("notify-fail");
    if (pin == typedNumbers) {
        successMassege.style.display = 'block';
        errorMassege.style.display = 'none';
    } else {
        successMassege.style.display = 'none';
        errorMassege.style.display = 'block';
        let actionLeft = parseInt(document.getElementById('action-left').innerText);
        console.log(actionLeft);
        actionLeft--;
        console.log(actionLeft);
        document.getElementById('action-left').innerText = actionLeft;
        console.log(actionLeft);
        if (actionLeft==0) {
            document.getElementById('generate-pin').setAttribute("disabled",true);
            document.getElementById('generate-pin').style.background = 'gray';
            document.getElementById("submit-btn").setAttribute("disabled",true);
            document.getElementById("submit-btn").style.background = 'gray';
            const buttons = document.getElementsByClassName('button');
            for (const button of buttons) {
                button.setAttribute("disabled",true);
                button.style.background = 'gray';
            }
            
        }
    }
});