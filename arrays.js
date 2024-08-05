//  console.log Math

console.log(5 + 5);

// Array

let arrayEx = [];

// Array.length

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

// Array Push (Returns Array Length)

let pushed = cities.push();
console.log(pushed)

// Array Push (+ to the array)

cities.push("Tokyo");
console.log(cities);


// Array pop (removes last element from array and returns it) (- Tokyo)

let popped = cities.pop();
console.log(cities);

// const variable cannot be reassigned like a let variable
// Ex. This would give code error !
// const firstName = "Naomi";
// firstName = "Jessica";

const breakLine = "";
const count = 8;
const rows = [];

// Break

console.log(breakLine);

// for ("iterator"; "condition"; "iteration"){} 

//  iterator = when the loop starts (i = 0 starts at 0 not 1)

//  condition = when the loop stops . tells the loop how many times it should iterate.
//  When the condition becomes false, the loop will stop.

//  iteration = tells the loop what to do with the iterator after each run. 
// (Ex. below increments each result by 1)

const increment = 10;
 for (let i = 0; i < increment; i = i + 1) {
    console.log(i);
    cities.push(i);
 }
 console.log(cities);

// Break

 console.log(breakLine);

// Vertical []

 const character = "#";
 const vCount = 8;
 const vRows = [];

 for (let i = 0; i < vCount; i = i + 1) {
    vRows.push(i);
  }
  let result = ""

  for (const row of vRows) {
    result = result + "\n" + row;
  }
  
  console.log(result);
