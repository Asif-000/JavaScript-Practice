var name = 'Asif Tazwar';
var age = 25;

console.log('Name:', name);
console.log('Age:', age);

function checkNumber(num) {
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    console.log("Please enter a non-negative integer.");
    return;
  }

  // Check even or odd
  if (num % 2 === 0) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }

  // Check prime
  if (num < 2) {
    console.log(`${num} is not a prime number.`);
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
  }
}

// Example usage
checkNumber(7);   // Output: 7 is odd. 7 is a prime number.
checkNumber(10);  // Output: 10 is even. 10 is not a prime number.
checkNumber(1);   // Output: 1 is odd. 1 is not a prime number.