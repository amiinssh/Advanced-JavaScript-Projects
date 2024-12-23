let equalPressed = 0;
let buttonInput = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let percent = document.getElementById("percent");

let scientificFunctionClicked = false;

window.onload = () => {
  input.value = "";
};

buttonInput.forEach((buttonClass) => {
  buttonClass.addEventListener("click", () => {
    if (equalPressed == 1) {
      input.value = "";
      equalPressed = 0;
    }

    input.value += buttonClass.value;
  });
});

percent.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);

  let val = input.value;
  let num = [];
  for (let i = val.length - 1; i >= 0; i--) {
    if (/[0-9]/.test(val[i])) {
      input.value = input.value.substr(0, i);
      num.unshift(val[i]);
    } else {
      break;
    }
  }

  input.value += parseInt(num.join("")) / 100;
});

equal.addEventListener("click", () => {
  if (!scientificFunctionClicked) {
    equalPressed = 1;
    let inputValue = input.value;
    try {
      let solution = eval(inputValue);
      if (Number.isInteger(solution)) {
        input.value = solution;
      } else {
        input.value = solution.toFixed(2);
      }
    } catch (er) {
      alert("Error");
    }
  } else {
    let resultArray = input.value.match(/^([a-z]+)\((.+)\)$/)?.slice(1);
    const [method, value] = resultArray;
    calculateSciFunction(method, value);
  }
  scientificFunctionClicked = false;
});

clear.addEventListener("click", () => (input.value = ""));
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

function calculateSciFunction(func, value) {
  let result;
  let expressionArray = value.split("+").map(parseFloat);
  const inputvalue = expressionArray.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  switch (func) {
    case "sin":
      result = Math.sin(inputvalue);
      break;
    case "tan":
      result = Math.tan(inputvalue);
      break;
    case "cos":
      result = Math.cos(inputvalue);
      break;
    case "e":
      result = Math.exp(inputvalue);
      break;
    case "log":
      result = Math.log(inputvalue);
      break;
    default:
      break;
  }

  if (result !== undefined) {
    input.value = result.toFixed(2);
  } else {
    alert("Invalid Input");
  }
}

document.getElementById("sin").addEventListener("click", () => {
  scientificFunctionClicked = true;
  input.value = "sin(" + input.value + ")";
});

document.getElementById("cos").addEventListener("click", () => {
  scientificFunctionClicked = true;
  input.value = "cos(" + input.value + ")";
});

document.getElementById("tan").addEventListener("click", () => {
  scientificFunctionClicked = true;
  input.value = "tan(" + input.value + ")";
});

document.getElementById("e").addEventListener("click", () => {
  scientificFunctionClicked = true;
  input.value = "e(" + input.value + ")";
});

document.getElementById("log").addEventListener("click", () => {
  scientificFunctionClicked = true;
  input.value = "log(" + input.value + ")";
});

document.getElementById("pi").addEventListener("click", () => {
  scientificFunctionClicked = true;
  inpu
  t.value = 3.14;
});
document.getElementById("pow").addEventListener("click", () => {
  if(input.value){
    input.value = Math.pow(input.value, 2)
  } else {
    input.value = Math.pow(0, 2)
  }
});
