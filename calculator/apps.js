let dis = document.getElementById("display");

function btnNumOne() {
  dis.innerHTML += "1";
}
function btnNumTwo() {
  dis.innerHTML += "2";
}
function btnNumMinus() {
  dis.innerHTML += "-";
}
function btnNumThree() {
  dis.innerHTML += "3";
}
function btnNumFour() {
  dis.innerHTML += "4";
}
function btnNumFive() {
  dis.innerHTML += "5";
}
function btnNumSix() {
  dis.innerHTML += "6";
}
function btnNumSeven() {
  dis.innerHTML += "7";
}
function btnNumEight() {
  dis.innerHTML += "8";
}
function btnNumZero() {
  dis.innerHTML += "0";
}
function btnNumNine() {
  dis.innerHTML += "9";
}
function btnNumAdd() {
  dis.innerHTML += "+";
}
function btnNumDivide() {
  dis.innerHTML += "/";
}
function btnNumDecimal() {
  dis.innerHTML += ".";
}
function btnNumMultiply() {
  dis.innerHTML += "*";
}
//function btnNumClear() {
  //dis.innerHTML += "C";
//}



function btnSolve() {
  let current_value = dis.innerHTML;
  let answer = eval(current_value);
  console.log(answer);
  dis.innerHTML = answer;
}
function btnClear() {
  let current_value = dis.innerHTML;
  let answer = eval(current_value);
  console.log(null);
  dis.innerHTML = null;
}
