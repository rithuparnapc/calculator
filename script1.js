//1 display number in text box

function displayNum(num){
    result.value +=num;
}


//2 clear text box

function clearBox(){
    result.value=""
}


//3 evaluate expression

function evaluateExpression(){

    //1 method
    // expression=result.value;
    // output=eval(expression)
    // result.value=output;


    //2 method

    result.value=eval(result.value)  //  eval method  evaluates or executes an argument.


}


//4 remove last item from the box

function removeLast(){

    currentExpression=result.value
    result.value=currentExpression.slice(0,-1)  //slice from the last index
}