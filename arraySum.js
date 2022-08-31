// Get Sum of Array
var numbers = [20, 34, 45, 76, 98, 34, 89, 50, 90, 67, 34, 23];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  var element = numbers[i];
  sum = sum + element;
}

console.log("Total of Numbers is: ", sum);
