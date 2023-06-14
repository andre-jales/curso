let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
  expression += number;
  display.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result;
  } catch (error) {
    display.value = 'Erro';
  }
}

function clearDisplay() {
  display.value = '';
  expression = '';
}
