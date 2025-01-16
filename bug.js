function add(a, b) {
  return a + b; // Forgot to handle non-numeric inputs
}

console.log(add(1, 2)); // 3
console.log(add("1", 2)); // "12"
console.log(add(1, "2")); // "12"
console.log(add("1", "2")); // "12"