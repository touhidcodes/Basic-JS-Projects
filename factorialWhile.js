//Factorial number using While loop
function factorial(n) {
  var i = 1;
  var factorial = 1;
  while (i <= n) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}

var output = factorial(8);
console.log(output);
