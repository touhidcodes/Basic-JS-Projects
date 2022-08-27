// Leap Year Check
function leapYearCheck(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

var checkYear = leapYearCheck(2017);
console.log(checkYear);
