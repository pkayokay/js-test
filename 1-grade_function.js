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
