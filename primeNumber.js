// Prime Number Checker
function primeNumber(n) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return "This number is not a Prime Number";
    }
  }
  return " This number is a Prime Number";
}

var result = primeNumber(11);
console.log(result);
