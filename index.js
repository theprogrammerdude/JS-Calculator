let operators = ["+", "-", "*", "/", "."];

function input(val) {
  lastCharacter = document.getElementById("result").innerHTML[
    document.getElementById("result").innerHTML.length - 1
  ];

  if (!operators.includes(lastCharacter) || !operators.includes(val)) {
    document.getElementById("result").innerHTML += val;
  }
}

function clr() {
  document.getElementById("result").innerHTML = "";
}

function solve() {
  val = document.getElementById("result").innerHTML;

  y = eval(val); // Javascript Builin Function
  document.getElementById("result").innerHTML = y;
  console.log(y);
}
