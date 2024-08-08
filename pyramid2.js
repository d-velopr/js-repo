//  The strict inequality operator !== allows you to check if two values are not equal, 
//  or do not have the same data type. 
//  "0" == 0 is true even though one is a string
//  === means its a strict version meaning it has to be the same data type as well.

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  // returns the value of the hash variable, repeated rowNumber times
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//  let done = 0;
//  while(done !== count)
while (rows.length < count) {
    //  done++;
    // rows.push(padRow(done, count));
    rows.push(padRow(rows.length +1 , count));
  }

  let result = ""

  for (const row of rows) {
    // \n = next line in terminal after every iteration . otherwise it would look like this ### ## #
    result = result + "\n" + row;
  }
  
  console.log(result);
