// TODO: Create a multiline string using template literals
const name = "Simamkele";
const course = "Frontend Web Development";
const multilineString = `
Hello ${name},
Welcome to ${course}!
Keep practicing JavaScript.
You’ve got this!
`;

console.log(multilineString);

// TODO: Create a function that uses template literals for HTML generation
const createCard = (title, description) => {
  return `
    <div class="card">
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
};

console.log(createCard("JS Exercise", "Template literals make HTML easy"));

// TODO: Convert regular functions to arrow functions
// Old function:
function add(a, b) {
  return a + b;
}

// Converted to arrow function:
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3));

// TODO: Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

// Map - double each number
const doubled = numbers.map(num => num * 2);

// Filter - get even numbers
const evens = numbers.filter(num => num % 2 === 0);

// Reduce - get sum
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);
