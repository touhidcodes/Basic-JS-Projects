// Count Word
var speech =
  "Lorem ipsum dolor   sit amet, consectetur adipiscing elit. Quisque   mattis massa et congue tincidunt.";
var count = 0;

for (var i = 0; i < speech.length; i++) {
  var char = speech[i];
  if (char == " " && speech[i - 1] != " ") {
    count++;
  }
}
count++;
console.log(count);
