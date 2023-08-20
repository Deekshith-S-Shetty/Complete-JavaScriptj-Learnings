// Switch case statements.
const age = 20;

switch (age) {
  case 10: // Executes if the case is true and "break" statements sends the execution out of switch.
    console.log("Your age is 10");
    break;
  case 18:
    console.log("Your age is 18");
    break;
  case 20:
    console.log("Your age is 20"); // This line executes.
    break;
  default: // Executes if none of the case if true.
    console.log("Your age is not 10, 18 or 20");
}

// Note: Without adding "break" the code will execute all the cases below the one that is true.
