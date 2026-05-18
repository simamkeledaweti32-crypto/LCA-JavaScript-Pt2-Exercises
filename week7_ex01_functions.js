// 1. Multiply function
function multiply(a, b, c) {
  return a * b * c;
}

// 2. Convert minutes to seconds
const convertToSeconds = function(minutes) {
  return minutes * 60;
}

// 3. Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

// 4. Reverse string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 5. Count vowels
function countVowels(sentence) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of sentence) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// 6. Check if prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
