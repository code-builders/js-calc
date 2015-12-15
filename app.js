var calculate = function (x, operator, y) {
  if (operator == "+") {
    answer = x + y;
  } else if (operator == "-") {
    answer = x - y;
  } else if (operator == "/") {
    answer = x / y;
  } else if (operator == "x") {
    answer = x * y;
  }
  return answer;
}

window.onload = function () {
  var calculator = document.getElementById("calculator");
  var answerDiv   = document.getElementById("answer");

  calculator.addEventListener("submit", function (event) {
    event.preventDefault();
    var x = parseFloat(calculator.elements.x.value);
    var y = parseFloat(calculator.elements.y.value);
    var operator = calculator.elements.operator.value;

    var answer = calculate(x, operator, y);
    calculator.elements.x.value = answer;
    answerDiv.innerHTML = answer;
  });

  select.addEventListener("change", function () {
    
  });

  var ce = document.getElementById("ce");
  ce.addEventListener("click", function (event) {
    event.preventDefault();
    calculator.elements.x.value = null;
    calculator.elements.y.value = null;
    answerDiv.innerHTML = 0;
    calculator.elements.x.focus();
  });
};
