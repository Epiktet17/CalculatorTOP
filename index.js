let operator = '';
let previuousValue = '';
let currentValue = '';
document.addEventListener("DOMContentLoaded",function(){
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let decimal = document.querySelector(".decimal");
    let equals = document.querySelector(".equals");
    let clear = document.querySelector(".clear");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click",function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((operat)=> operat.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previuousValue + " " + operator;
        currentScreen.textContent = "";
    }))

    clear.addEventListener("click",function(){
        previuousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = '';
        currentScreen.textContent = '';
    })

    equals.addEventListener("click",function(){
        calculate()
        previousScreen.textContent = '';
        currentScreen.textContent = previuousValue;
    })
    decimal.addEventListener("click",function(){
        addDecimal();
    })
})
function handleNumber(num){
    currentValue += num;
}
function handleOperator(operat){
    operator = operat;
    previuousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previuousValue = Number(previuousValue);
    currentValue = Number(currentValue);
    if(operator === "+"){
        previuousValue += currentValue;
    }
    else if(operator === '-'){
        previuousValue -= currentValue;
    }
    else if(operator === '*'){
        previuousValue *= currentValue;
    }
    else{
        previuousValue /= currentValue;
    }
    previousValue = previuousValue.toString();
    currentValue = currentValue.toString();
}
function addDecimal(){
    if (!currentValue.includes('.')){
        currentValue +='.'
    }
}