let firstNumber;

let operator;

let secondNumber;

let result;

firstNumber = prompt("Enter the first number");

if (isNaN(firstNumber)) {
  result = "Enter the first correct number";
} else if (firstNumber == null || firstNumber == "") {
  result = "Please enter the first number";
} else {
  secondNumber = prompt("Enter the second number");
  if (isNaN(secondNumber)) {
    result = "Enter the second correct number";
  } else if (secondNumber == null || secondNumber == "") {
    result = "Please enter the second number";
  } else {
    operator = prompt("Enter operator");

    switch (operator) {
      case "+":
        {
          result = +firstNumber + +secondNumber;
        }
        break;
      case "-":
        {
          result = firstNumber - secondNumber;
        }
        break;
      case "/":
        {
          result = firstNumber / secondNumber;
        }
        break;
      case "*":
        {
          result = firstNumber * secondNumber;
        }
        break;
      case null:
      case "":
        {
          result = "Please enter operator";
        }
        break;

      default: {
        result = "Please enter a valid operator";
      }
    }
  }
}

alert(result);
