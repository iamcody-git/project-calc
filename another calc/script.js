
let result = "";

function getResult(value) {
	result += value;
	document.getElementById("result").innerHTML = result;
}


function clearResult() {
	result = "";
	document.getElementById("result").innerHTML = result;
}

function calculate() {
	result = eval(result);
	document.getElementById("result").innerHTML = result;
}

function calculate() {
	result = eval(result);
	document.getElementById("operand1").innerHTML = result;
}


