//Factorial Number using For loop
function factorial(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    var factorial = factorial * i;
  }
  return factorial;
}

var output = factorial(7);
console.log(output);
