class Calculator{
constructor(x, y){
    this.x = x;
    this.y = y;
}
    static plus(x, y){
        let sum = x + y;
        result.textContent = sum;
    }

    static minus(x, y){
        let diff = x - y;
        result.textContent = diff;
    }

    static multiply(x, y){
        let mult = x * y;
        result.textContent = mult;
    }

    static divide(x, y){
        let div = x / y;
        result.textContent = div;
    }
}

let x = document.getElementById('num1');
let y = document.getElementById('num2');
let result = document.getElementById('result');

function plus() {
Calculator.plus(+x.value, +y.value);
}

function minus() {
Calculator.minus(+x.value, +y.value);
    }

function multiply() {
Calculator.multiply(+x.value, +y.value);
        }

function divide() {

if(+y.value === '0'){

result.textContent = 'Я не знаю чему это равно, честно';

} else {

Calculator.divide(+x.value, +y.value);
}

}

document.querySelector('.plus').addEventListener('click', plus);
document.querySelector('.minus').addEventListener('click', minus);
document.querySelector('.multply').addEventListener('click', multiply);
document.querySelector('.divide').addEventListener('click', divide);