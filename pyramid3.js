const hash = "#" ;
const count = 8 ;
const pRows = [] ;

function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + hash.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber)
}

for (let i = count; i > 0; i = i - 1) {
    pRows.push(padRow(i, count));
}

let steps = ""
for(const row of pRows){
    steps = steps + "\n" + row;
}

console.log(steps);