
let result = "";
let symbol;
function getValues(){
	let operand1=parseFloat(document.querySelector('#operand1').value);
	let operand2=parseFloat(document.querySelector('#operand2').value);
	// return { // object return 
  //   num1:operand1,
  //   num2: operand2
  // }
  return [operand1,operand2];//array method
}
function getResult(value) {
	let[num1,num2]=getValues();//array method
  //let{num1,num2}=getValues(); oject call method

	switch(value){
		case "+":
        result = num1 + num2;
        symbol = "+";
        break;
      case "-":
        result = num1 - num2;
        symbol = "-";
        break;
      case "*":
        result = num1 * num2;
        symbol = "*";
        break;
      case "/":
        result = num1 / num2;
        symbol = "/";
        break;
      case "%":
        result = num1 % num2;
        symbol="%";
        break;
    }
	let screen=document.getElementById("result").innerHTML = `${num1} ${symbol} ${num2}=`;
  return{
    ans:screen,
    value:result
  }
  }

function clearResult() {
	result = "";
	document.getElementById("result").innerHTML = result;
}
function calculate(){
let{ans,value}=getResult();
console.log(ans);
console.log(value);
  document.getElementById("result").innerHTML = `${ans} ${value}`;
}



