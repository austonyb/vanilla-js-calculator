//functions
const addDigit = (digit) => {
  output.innerText += digit;
};

//main output - shows input elements and output
const output = document.querySelector("#output");

//buttons
const allClear = document.querySelector("#ac");
allClear.addEventListener("click", (e) => {
  output.innerText = "0";
});
const negativeNormal = document.querySelector("#negative-normal");
negativeNormal.addEventListener("click", (e) => {
  let temp = output.innerText;

  if (temp[0] === "-") {
    temp.shift();
    output.innerText = temp;
  } else {
    temp.unshift("-");
    output.innerText = temp;
  }
});

const percentage = document.querySelector("#percentage");
const divide = document.querySelector("#divide");
divide.addEventListener("click", (_) => {
    output.innerText += "/ ";
});

const multiplyOperator = document.querySelector("#multiply");
multiplyOperator.addEventListener("click", (_) => {
        output.innerText += "x ";
})

const add = document.querySelector("#add");
add.addEventListener("click", (_) => {
        output.innerText += "+ ";
});

const minus = document.querySelector("#minus")
minus.addEventListener("click", (_) => {
    output.innerText += "- ";
})

const equals = document.querySelector("#equals");
//run whatever operation needs to take place, then write the answer to output.

const one = document.querySelector("#one");
one.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "1";
  } else {
    output.innerText += "1";
  }
});
const two = document.querySelector("#two");
two.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "2";
  } else {
    output.innerText += "2";
  }
});
const three = document.querySelector("#three");
three.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "3";
  } else {
    output.innerText += "3";
  }
});
const four = document.querySelector("#four");
four.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "4";
  } else {
    output.innerText += "4";
  }
});
const five = document.querySelector("#five");
five.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "5";
  } else {
    output.innerText += "5";
  }
});
const six = document.querySelector("#six");
six.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "6";
  } else {
    output.innerText += "6";
  }
});
const seven = document.querySelector("#seven");
seven.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "7";
  } else {
    output.innerText += "7";
  }
});
const eight = document.querySelector("#eight");
eight.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "8";
  } else {
    output.innerText += "8";
  }
});
const nine = document.querySelector("#nine");
nine.addEventListener("click", (e) => {
  if (output.innerText === "0") {
    output.innerText = "9";
  } else {
    output.innerText += "9";
  }
});
const zero = document.querySelector("#zero");
zero.addEventListener("click", (e) => {
  output.innerText += 0;
});
const dot = document.querySelector("#dot");
dot.addEventListener("click", (e) => {
  let dotPresent = false;

  for (let i = 0; i < output.innerText.length; i++) {
    if (output.innerText[i] === ".") {
      dotPresent = true;
    } else {
      continue;
    }
  }

  if (dotPresent === false) {
    output.innerText += ".";
  } else {
    console.log("can't add another decimal point if one is already present!");
  }
});

const calculateResult = () => {
    let expression = output.innerText;
    expression = expression.replace(/x/g, '*');
    try {
        const result = eval(expression);
        output.innerText = result.toString();
    } catch (error) {
        console.error('Invalid mathematical expression');
    }
};

equals.addEventListener("click", calculateResult);


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.add('pulse');
        setTimeout(() => {
            document.body.classList.remove('pulse');
        }, 200); // Change background back after 200ms
    });
});