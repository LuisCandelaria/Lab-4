let resultTxtBox = document.getElementById("resultValue");
let Txthistory = document.getElementById("logInformation");
let input = document.getElementById("inputNum");
let result = 0;
let history = "";
let flagadd = false;
let flagsub = false;
let flagmul = false;
let flagdiv = false;

function getResult(){
    if(flagadd){
        result += Number(input.value);
        history += input.value + "=" + String(result);
        resultTxtBox.value = String(result);
    }
    if(flagsub){
        result -= Number(input.value);
        history += input.value + "=" + String(result);
        resultTxtBox.value = String(result);
    }
    if(flagmul){
        result *= Number(input.value);
        history += input.value + "=" + String(result);
        resultTxtBox.value = String(result);
    }
    if(flagdiv){
        result /= Number(input.value);
        history += input.value + "=" + String(result);
        resultTxtBox.value = String(result);
    }
    Txthistory.textContent += history + "\n";
    afterResult();
}

function check(){
    if(flagsub){
        result -= Number(input.value);
    }
    if(flagmul){
        result *= Number(input.value);
    }
    if(flagdiv){
        result /= Number(input.value);
    }
    if(flagadd){
        result += Number(input.value);
    }
}

function firstop(operation){
    history += input.value + operation;
    result = Number(input.value);
    input.value = "";
}

function sum(){
    if(result == 0){
        firstop("+");
        flagadd = true;
    }
    else{
        check();
        history += input.value + "+";
        flagadd = true;
        flagsub = false;
        flagmul = false;
        flagdiv = false;
        input.value = "";
    }
}

function sub(){
    if(result == 0){
        firstop("-");
        flagsub = true;
    }
    else{
        check();
        history += input.value + "-";
        flagsub = true;
        flagadd = false;
        flagmul = false;
        flagdiv = false;
        input.value = "";
    }
}

function mult(){
    if(result == 0){
        firstop("*");
        flagmul = true;
    }
    else{
        check();
        history += input.value + "*";
        flagmul = true;
        flagsub = false;
        flagadd = false;
        flagdiv = false;
        input.value = "";
    }
}

function div(){
    if(result == 0){
        firstop("/");
        flagdiv = true;
    }
    else{
        check();
        history += input.value + "/";
        flagdiv = true;
        flagsub = false;
        flagmul = false;
        flagadd = false;
        input.value = "";
    }
}

function afterResult(){
    input.value = "";
    history = "";
    result = 0;
    flagadd = false;
    flagsub = false;
    flagmul = false;
    flagdiv = false;
}

function resetCal(){
    resultTxtBox.value = "";
    Txthistory.innerText = "";
    afterResult();
}