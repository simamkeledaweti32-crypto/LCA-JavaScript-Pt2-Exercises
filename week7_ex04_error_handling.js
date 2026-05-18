// TODO: Create a function that validates user input
function validateUserInput(input) {
  try {
    if (input === null || input === undefined || input === "") {
      throw new Error("Input cannot be empty");
    }
    if (typeof input !== "string") {
      throw new TypeError("Input must be a string");
    }
    return "Valid input: " + input;
  } catch (error) {
    return "Error: " + error.message;
  }
}

// TODO: Create a function that demonstrates multiple error types
function demonstrateErrors(value) {
  try {
    if (typeof value !== "number") {
      throw new TypeError("Expected a number");
    }
    if (value < 0) {
      throw new RangeError("Number cannot be negative");
    }
    if (value === 0) {
      throw new Error("Cannot divide by zero");
    }
    return 100 / value;
  } catch (error) {
    if (error instanceof TypeError) {
      return "Type Error: " + error.message;
    } else if (error instanceof RangeError) {
      return "Range Error: " + error.message;
    } else {
      return "General Error: " + error.message;
    }
  }
}

// TODO: Create a collection of helper functions for string manipulation
const stringHelpers = {
  capitalize: function(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
  
  reverseString: function(str) {
    if (!str) return "";
    return str.split("").reverse().join("");
  },
  
  countWords: function(str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).length;
  }
};

// TODO: Create helper functions for array operations
const arrayHelpers = {
  getSum: function(arr) {
    if (!Array.isArray(arr)) return 0;
    return arr.reduce((sum, num) => sum + num, 0);
  },
  
  getAverage: function(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0;
    return this.getSum(arr) / arr.length;
  },
  
  removeDuplicates: function(arr) {
    if (!Array.isArray(arr)) return [];
    return [...new Set(arr)];
  }
};

// Optional: test your functions
console.log(validateUserInput("Simamkele"));
console.log(demonstrateErrors(10));
console.log(stringHelpers.capitalize("hello world"));
console.log(arrayHelpers.getAverage([5, 10, 15]));
