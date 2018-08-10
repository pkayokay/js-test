// Write a function that returns either a letter grade “A” “B” … or "out of range" if it is not a proper grade when a numeric grade is passed in to that function:

function grade(n) {
  if (typeof n == 'number' && Math.sign(n) != -1 && n <= 100) {
    switch (true) {
      case (n >= 90 && n <= 100):
        console.log(n + ' = A');
        break;
      case (n >= 80 && n <= 89):
        console.log(n + ' = B');
        break;
      case (n >= 72 && n <= 79):
        console.log(n + ' = C');
        break;
      default:
        console.log(n + ' = F');
    }
  } else if (typeof n != 'number') {
    console.log(n + " is not a number,")
  } else {
    console.log(n + " is out of range")
  }
}


// Tests that executes the function on the array

// Test "A"
var gradeA = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]
gradeA.map( n => grade(n))

// Test "B"
var gradeB = [89, 88, 87, 86, 85, 84, 83, 82, 81, 80]
gradeB.map( n => grade(n))

// Test "C"
var gradeC = [79, 78, 77, 76, 75, 74, 73, 72]
gradeC.map( n => grade(n))

// Test "F"
var gradeF = [71, 60, 50, 40, 30, 20, 10, 0]
gradeF.map( n => grade(n))

// Test "Out of range" and values passed on that are not numbers.
var gradeOutofRange = ['Great', 'Poor', -1, -99, 101, 1000]
gradeOutofRange.map( n => grade(n))
