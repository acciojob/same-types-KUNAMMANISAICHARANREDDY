function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
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

// Display the result in an alert
alert(isSameType(value1, value2));