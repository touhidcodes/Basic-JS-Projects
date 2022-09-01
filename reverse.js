// Reverse Word
function reverseString(str) {
  var reverse = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}

var Statement = "Hi i am Touhidur Zaman.";
var output = reverseString(Statement);
console.log(output);
