const keys = document.querySelectorAll('.key');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
let num1;
let num2;
let operator;

function calculation(a, b, o) {
    switch (o) {
        case '+':
            return a + b;
            
        case '-':
            return a - b;
            
        case '*':
            return a * b;
        
        case '/':
            return (b !== 0) ? a / b : 0;

        default:
            return 0;
    }
}

clear.addEventListener('click', () => {
    display.innerHTML = '';
});

Array.from(keys).forEach((key) => {
    key.addEventListener('click', () => {
        key.style.animation = 'keystroke 0.2s linear';
        setInterval(() => {
            key.style.animation = '';
        }, 200);
        if (display.innerHTML.length > 13) {
            display.style.animation = 'displayError 0.2 linear 0s 1';
            setInterval(() => {
                display.style.animation = '';
            }, 500);
        } else {
            display.innerHTML += key.innerHTML;
        }
        if (['+', '-', '*', '/'].includes(key.innerHTML)) {
            operator = key.innerHTML;
            num1 = Number(display.innerHTML.substring(0, display.innerHTML.length - 1));
        }
        if (key.innerHTML === '=') {
            const operatorIndex = display.innerHTML.indexOf(operator);
            num2 = Number(display.innerHTML.substring(operatorIndex + 1, display.innerHTML.length - 1));
            display.innerHTML = calculation(num1, num2, operator);
        }
    });
});