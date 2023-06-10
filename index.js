function calculate(calculation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;

    switch (calculation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
     
    }
    document.getElementById("result").innerHTML = `${num1} ${calculation} ${num2}= ${result}`;
  }

  function clear(){
    document.querySelector('#clear').value=0;
    document.getElementById("num1").value=0;
    document.getElementById("num2").value=0;
}
