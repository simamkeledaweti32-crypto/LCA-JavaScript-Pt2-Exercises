// 1. sum function
function sum(n) {
  if (typeof n!== 'number' ||!Number.isInteger(n)) {
    return "The value passed is not a number";
  }
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// 2. factorial function
function factorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

// 3. funkyMath function
function funkyMath(a, b, c, d) {
  if (arguments.length === 2) {
    return b - a;
  } else if (arguments.length === 3) {
    return a + b + c;
  } else if (arguments.length === 4) {
    return (a + b) / (c + d);
  }
}

// 4. Loop to remove odd numbers and sort them
let arr = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2!== 0) {
    oddNumbers.push(arr[i]);
    arr.splice(i, 1);
  }
}
oddNumbers.sort((a, b) => a - b);

// 5. Create object 'me'
let me = {
  firstName: "Simamkele",
  lastName: "Daweti",
  age: 20,
  favouriteColour: "blue",
  dreamCar: "BMW M4"
};

// 6. Add favourite food property
me.favouriteFood = "Pizza";

// 7. Delete age property
delete me.age;
