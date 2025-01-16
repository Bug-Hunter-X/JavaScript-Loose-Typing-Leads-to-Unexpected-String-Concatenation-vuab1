function add(a, b) {
  //Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error("Inputs must be numbers");
  }
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("1", 2)); // NaN
console.log(add(1, "2")); // NaN
console.log(add("1", "2")); // NaN