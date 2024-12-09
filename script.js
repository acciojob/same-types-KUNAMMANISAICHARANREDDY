function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  
  // If one value is NaN and the other is not, return false
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }
  
  // Check if the types of both values are the same
  if (typeof value1 === typeof value2) {
    return true;
  }
  
  return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// If the input is a number, convert it from string to number
if (!isNaN(value1)) {
  value1 = +value1;
}
if (!isNaN(value2)) {
  value2 = +value2;
}

// Display the result in an alert
alert(isSameType(value1, value2));