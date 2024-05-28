const keys = document.querySelectorAll('.key');
const display = document.querySelector('.main-display');
const smallDisplay = document.querySelector('.small-display');
const clear = document.querySelector('.clear');
let numArr1 = [];
let numArr2 = [];
let result = 0;
let operator;
let textLimit = false;
let operatorInput = false;
let firstCalculation = false;

function arrToNumber(array) {
    return Number(array.join(''));
}

function calculation(a, b, o) {
    if (!Array.isArray(a) && Array.isArray(b)) {
        console.log("inside calc if")
        b = arrToNumber(b);
    } else if (Array.isArray(a) && Array.isArray(b)) {
        console.log("inside calc else if")
        a = arrToNumber(a);
        b = arrToNumber(b);
    }
    
    switch (o) {
        case '+':
            return a + b;
            
        case '-':
            return a - b;
            
        case '*':
            return a * b;
        
        case '/':
            return (b !== 0) ? a / b : 'Error';

        default:
            return 0;
    }
}

clear.addEventListener('click', () => {
    display.textContent = '';
    smallDisplay.textContent = '';
    textLimit = false;
    operatorInput = false;
    firstCalculation = false;
    numArr1 = [];
    numArr2 = [];
    result = 0;
    operator = '';
});

Array.from(keys).forEach((key) => {
    key.addEventListener('click', () => {
        if (display.textContent.length >= 11) {
            textLimit = true;
        } else if(!textLimit) {
            display.innerHTML += key.innerHTML;
            if (!operatorInput && !isNaN(key.textContent)) {
                numArr1.push(key.textContent);
            } else if (!isNaN(key.textContent)) {
                numArr2.push(key.textContent);
            }
        }
        if (['+', '-', '*', '/'].includes(key.textContent)) {
            operatorInput = true;
            textLimit = false;
            operator = key.innerHTML;
            display.textContent = "";
            smallDisplay.innerHTML += numArr1.join('') + operator;
        }
        if (key.textContent === '=') {
            operatorInput = true;
            textLimit = false;
            if (!firstCalculation) {
                result = calculation(numArr1, numArr2, operator);
                firstCalculation = true;
            } else {
                result = calculation(result, numArr2, operator);
            }
            display.textContent = result;
            smallDisplay.textContent += numArr2 + operator;
        }
    });
});
