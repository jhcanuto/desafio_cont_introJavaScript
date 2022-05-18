var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

const subtrair = document.getElementById("subtrair");
subtrair.addEventListener("click", decrement);

const adicionar = document.getElementById("adicionar");
adicionar.addEventListener("click", increment);


function decrement (){
    if(currentNumber < 0){
        document.getElementById("decrement").disabled = true;
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
    }
    if(currentNumber >= 0){
        document.getElementById("currentNumber").style.color = "black";
    }
    
     
}

function increment (){
    if(currentNumber >= 10){
    document.getElementById("increment").disabled = true;
    }
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
    }
    if(currentNumber >= 0){
        document.getElementById("currentNumber").style.color = "black";
    }
    
}