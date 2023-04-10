var num1,num2;
var result1;
var result2;
var kqua;
var times = 0;

var input1 = false;
var input2 = false;
var nofalse = true;
var timesOpposite1 = 0;
var timesOpposite2 = 0;
function clickResult() {
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
    nofalse = true;
    num1= document.getElementById("num1").value.trim();
    num2= document.getElementById('num2').value.trim();
    console.log(num1);
    console.log(num2);
    num1 = num1.replaceAll(" ",'');
    num2 = num2.replaceAll(" ",'');
    var regex=/[^\d +*/().-]/;
    var t=/^[\/*]/
    var div0=/\/0/
    console.log(num1);
    if(num1 === "" ) {
        nofalse = false;
        document.getElementById("alert-error1").innerHTML = '*Please do not leave it blank';
    }
    if(num2 === "" ) {
        nofalse = false;
        document.getElementById("alert-error2").innerHTML = '*Please do not leave it blank';
    }
    if(regex.test(num1)==true || t.test(num1) || div0.test(num1)){
        document.getElementById("alert-error1").innerHTML = '*please enter again';
        nofalse = false;
    } else { result1 = new Function('return ' + num1)();}
    if(regex.test(num2)==true|| t.test(num2) || div0.test(num2)){
        document.getElementById("alert-error2").innerHTML = '*please enter again';
        nofalse = false;
    } else {result2 = new Function('return ' + num2)();}
        
    if(nofalse) {
        window.location.href = 'resultplus.html';
    }
    kqua= result1+result2;
    console.log(kqua);
    localStorage.setItem("in", kqua);
}
function deleteEle() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("alert-error1").innerHTML='&emsp;';
    document.getElementById("alert-error2").innerHTML='&emsp;';
    
}
function clickreturn(){
    window.location.href = 'index.html';
}
function clickContinue(){
    window.location.href = 'plus.html';
}
function clickCopy(){
    let text = document.getElementById('result-out').value;
    navigator.clipboard.writeText(text);
    document.getElementById("copy").innerHTML = "COPIED";
    var copybtn = document.getElementById("copy");
    copybtn.style.cssText = "background-color: #2ecc71;"+
    "transition: background-color 0.2s;";
}
function show_keyboard() {  
    times++;
    var board =document.getElementById("table-board-box");
    var but1 = document.getElementById("return-click");
    var but2 = document.getElementById("result-click");
    var but3 = document.getElementById("delete-click");
    var plusbox = document.getElementById("idToAdd");
    if(times%2 != 0) {   
        board.style.cssText = "display: block; animation: fadeOut 0.65s forwards;";
        but1.style.cssText = "display: none;";
        but2.style.cssText = "display: none;";
        but3.style.cssText = "display: none;";
        plusbox.style.cssText = "padding-bottom: 170px;"+
        " background: linear-gradient(180deg, rgb(65,62,62) 20%, rgb(65,62,62) 35%, rgb(174,198,144) 20%, rgb(174,198,144) 20%, rgb(174,198,144) 20%);"    
        
    } else {
        board.style.cssText = "display:none";
        but1.style.cssText = "visibility: visible;";
        but2.style.cssText = "visibility: visible;";
        but3.style.cssText = "visibility: visible;";
        plusbox.style.cssText = "padding-bottom: 35px;"
    }
}
function opposite() {
    var tmp1 = document.getElementById("num1").value;
    var tmp2 = document.getElementById("num2").value;
    if(input1 === true) {
        timesOpposite1 = timesOpposite1 + 1;
        if(timesOpposite1 % 2 === 0 && tmp1.charAt(tmp1.length-1) === ')') {
            console.log(timesOpposite1);
            tmp1 = tmp1.slice(2,tmp1.length-1);
            document.getElementById("num1").value  = tmp1;
        } else if(timesOpposite1 % 2 != 0 && tmp1.charAt(tmp1.length-1) != ')'){
            console.log(timesOpposite1);
            tmp1 = "-(" + tmp1 + ")";
            document.getElementById("num1").value  = tmp1;
        } else if (tmp1.charAt(tmp1.length-1) === ')') {
            console.log(timesOpposite1);
            tmp1 = tmp1.slice(2,tmp1.length-1);
            document.getElementById("num1").value  = tmp1;
        } else {
            console.log(timesOpposite1);
            tmp1 = "-(" + tmp1 + ")";
            document.getElementById("num1").value  = tmp1;
        }
    } else if (input2 === true) {
        timesOpposite2 = timesOpposite2 + 1;
        if(timesOpposite2 % 2 === 0 && tmp2.charAt(tmp2.length-1) === ')') {
            console.log(timesOpposite2);
            tmp2 = tmp2.slice(2,tmp2.length-1);
            document.getElementById("num2").value  = tmp2;
        } else if(timesOpposite2 % 2 != 0 && tmp2.charAt(tmp2.length-1) != ')'){
            console.log(timesOpposite2);
            tmp2 = "-("+tmp2+")";
            document.getElementById("num2").value  = tmp2;
        } else if (tmp2.charAt(tmp2.length-1) === ')') {
            onsole.log(timesOpposite2);
            tmp2 = tmp2.slice(2,tmp2.length-1);
            document.getElementById("num2").value  = tmp2;
        } else {
            console.log(timesOpposite2);
            tmp2 = "-("+tmp2+")";
            document.getElementById("num2").value  = tmp2;
        }
    }
}
function clickInput(value) {
    if(input1 === true) {
        document.getElementById("num1").value += value;
    } else if (input2 === true) {
        document.getElementById("num2").value += value;
    }
}
function deleteOneElement() {
    let tmp;
    if(input1 === true) {
        tmp = document.getElementById("num1").value;
        tmp = tmp.slice(0,tmp.length - 1);
        document.getElementById("num1").value  = tmp;
        console.log(tmp);
    } else if (input2 === true) {
        tmp = document.getElementById("num2").value;
        tmp = tmp.slice(0, tmp.length - 1);
        document.getElementById("num2").value  = tmp;
        console.log(tmp);
    }
}