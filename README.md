# JavaScript Loose Typing Bug

This repository demonstrates a common, yet subtle bug in JavaScript related to its loose typing system.  Specifically, the `+` operator will perform string concatenation if either operand is a string, leading to unexpected results when performing addition.

## Bug Description
The provided `add` function intends to add two numbers. However, due to JavaScript's loose typing, if either input is a string, it will concatenate the inputs instead of performing mathematical addition. This is demonstrated in the `bug.js` file.  The solution shows how to properly check for and handle non-numeric types.

## Solution
The `bugSolution.js` file provides a corrected version of the `add` function that uses type checking to ensure that both inputs are numbers before performing the addition.