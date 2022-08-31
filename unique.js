// Check Unique Number
var number = [
  1, 2, 9, 6, 7, 2, 9, 7, 6, 5, 4, 1, 8, 7, 3, 9, 4, 8, 5, 8, 5, 1, 6,
];
var uniqueNumber = [];

for (var i = 0; i < number.length; i++) {
  var element = number[i];
  var index = uniqueNumber.indexOf(element);

  if (index == -1) {
    uniqueNumber.push(element);
  }
}

console.log(uniqueNumber);
