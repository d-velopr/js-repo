// Functions Math
function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  
  const sum = addTwoNumbers(5, 10);
  console.log(sum)



// Global Scope - (title)

const title = "Professor ";

function gScope(name){
    return title + name;
}
console.log(gScope("Naomi"));

// Local Scope

function lScope(){
    const localScope = "Example";
    return localScope;
}
// console.log(localScope); Error!