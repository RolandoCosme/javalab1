//prompts for first and second numbers

var firstNumber
var firstNumber = prompt("Type 1st number");
var secondNumber
var secondNumber = prompt("Type 2nd number");

console.log("firstNumber is a ", typeof firstNumber);
console.log("secondNumber is a ", typeof secondNumber);

//compare the 2 numbers

if(firstNumber > secondNumber) {
    alert("2nd number is smaller");
  }

  if(secondNumber > firstNumber) {
    alert("1st number is smaller");
  }


//concatenate first and second input number

alert(firstNumber + " " + secondNumber + " " + "I am a baws!")
