// Max
var business = 350;
var minister = 250;
var sochib = 450;

if (business > minister) {
  if (business > sochib) {
    console.log("Business is bigger.");
  } else {
    console.log("Sochib is bigger.");
  }
} else {
  if (minister > sochib) {
    console.log("Minister is bigger.");
  } else {
    console.log("Sochib is bigger.");
  }
}

// Max Method
var max = Math.max(business, minister, sochib);
console.log("Max Number is", max);
