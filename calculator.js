const keys = document.querySelectorAll('.key');
const display = document.querySelector('.main-display');
const smallDisplay = document.querySelector('.small-display');
const clear = document.querySelector('.clear');
let num1 = 0;
let num2 = 0;
let result = 0;
let operator;
let textLimit = false;
let operatorInput = false;
let firstCalculation = false;

function calculation(a, b, o) {
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
    num1 = 0;
    num2 = 0;
    result = 0;
    operator = '';
});

Array.from(keys).forEach((key) => {
    key.addEventListener('click', () => {
        key.style.animation = 'keystroke 0.2s linear';
        setInterval(() => {
            key.style.animation = '';
        }, 200);
        if (display.textContent.length > 11) {
            textLimit = true;
        } else if(!textLimit) {
            display.innerHTML += key.innerHTML;
            if (!isNaN(key.textContent) && !operatorInput) {
                num1 += Number(key.textContent);
                num1 *= 10;
            } else if (num1 !== 0) {
                if (!isNaN(key.textContent)) {
                    num2 += Number(key.textContent);
                    num2 *= 10;
                }
            }
        }
        if (['+', '-', '*', '/'].includes(key.innerHTML)) {
            operatorInput = true;
            textLimit = false;
            operator = key.innerHTML;
            display.innerHTML = "";
            smallDisplay.innerHTML += num1/10 + operator;
        }
        if (key.innerHTML === '=') {
            operatorInput = true;
            textLimit = false;
            if (!firstCalculation) {
                result = calculation(num1/10, num2/10, operator);
                firstCalculation = true;
            } else {
                result = calculation(result, num2/10, operator);
            }
            display.textContent = result;
            smallDisplay.textContent += num2/10 + operator;
        }
    });
});