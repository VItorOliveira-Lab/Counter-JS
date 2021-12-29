var currentNumber = 0;
var currentNumberWrapper = document.querySelector("#currentNumber");

var buttonIncrement = document.querySelector("button[name=adicionar]");
var buttonDecrement = document.querySelector("button[name=subtrair]");

buttonIncrement.addEventListener("click", numberIncrement);
buttonDecrement.addEventListener("click", numberDecrement);


function numberIncrement() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    verificateNumber(currentNumber)
}   

function numberDecrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    verificateNumber(currentNumber)
}

function verificateNumber(number) {
    if(number < 0) {
        currentNumberWrapper.style.color = "red";
    }else {
        currentNumberWrapper.style.color = "green";
    }

    if(number <= -100) {
        currentNumber = 0;
    }else if(number >= 100) {
        currentNumber = 0;
    }

}