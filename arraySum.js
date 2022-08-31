// Get Sum of Array
var result = [20, 34, 45, 76, 98, 34, 89, 50, 90, 67, 34, 23];
var sum = 0;

for (var i = 0; i < result.length; i++) {
  var element = result[i];
  sum = sum + element;
}

console.log("Total of Numbers is: ", sum);

// Function of Array Sum
function getArraySum(numbers) {
  sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

var numbers = [55, 65, 78, 96, 34, 56, 23, 67, 89, 08, 67, 56];
var total = getArraySum(numbers);
console.log("Total Number is: ", total);

var total2 = getArraySum([55, 65, 78, 96, 56, 23, 67, 89, 08, 67, 56]);
console.log("Total Number is: ", total2);
