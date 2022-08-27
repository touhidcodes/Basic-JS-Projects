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

// Leap Year Check with string
function leapYearCheck2(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    var leapyear = "This year is a Leap Year";
    return leapyear;
  } else {
    var leapyearNot = "This year is not a Leap Year";
    return leapyearNot;
  }
}

var checkYear = leapYearCheck2(2020);
console.log(checkYear);
