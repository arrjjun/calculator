// display number in text box

function displayNumber(num){
    result.value+=num;
}

// clear text box
function clearBox(){
    result.value=""
}

// evaluate expression

function evaluateExpression(){
    expression = result.value;
    output = eval(expression);
    result.value = output;
}

// remove last item  from text box

function removeLastItem(){
currentExpression = result.value;
result.value = currentExpression.slice(0,-1);
}