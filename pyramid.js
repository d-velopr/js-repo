const hash = "#";
const howManyRows = "8";
const pRows = [];

//padRow() will need to know which row number you are on, and how many rows in total are being generated.

// How rowNumbers and rowCount get their data ? rowNumbers = i + 1 , howManyRows = rowCount

function padRow(rowNumber, rowCount) {
  // returns the value of the hash variable, repeated rowNumber times
  return " ".repeat(rowCount - rowNumber) + hash.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber)
}

for (let i = 1; i <= howManyRows; i ++){
    // the i + 1 inside repeat() is so that the index doesn't start at 0 "empty line".
    // i++ = i + 1
    // pRows.push(hash.repeat(i + 1));

    // padRow() has two parameters which you defined. Values are provided to those parameters when a function is called.
    // the i + 1 is so that it knows to count up each row  , without it it would be 8 #'s every row
    pRows.push(padRow(i , howManyRows));
}



// for (... of ...){} Loop
// iterates over each item in an iterable object,
// and temporarily assigns it to a variable.

// Note: you can use const because the variable only exists for a single iteration, 
// not during the entire loop.
let steps = ""

for (const pRow of pRows){
  // \n = next line in terminal after every iteration . otherwise it would look like this ### ## #
    steps = steps + "\n" + pRow;
}
console.log(steps);

