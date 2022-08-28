// Fiboncci Number
function fibonacci(n) {
  var fibo = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

var output = fibonacci(12);
console.log(output);
