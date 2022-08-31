// Find Max from Array
var number = [10, 89, 92, 45, 67, 34, 67, 90, 67, 87, 45, 56];
var max = number[0];

for (var i = 0; i < number.length; i++) {
  var element = number[i];
  if (element > max) {
    max = element;
  }
}

console.log("Heighest Number is: ", max);
