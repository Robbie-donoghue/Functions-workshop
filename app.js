console.log("Hello world!");

function sayHello()
 {
    console.log("Hello world!");
  }
  
  function calculate(a, b, operator) {
    if (operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    }
  }