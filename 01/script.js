const fs = require('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const input = readFile('data.txt');

let pairs = input.split('\r\n');

let firstColumn = [];
let secondColumn = [];

for (let pair of pairs) {
  pairArray = pair.split('   ');
  firstColumn.push(parseInt(pairArray[0]));
  secondColumn.push(parseInt(pairArray[1]));
}

let similarityScore = 0;

for (let firstElement of firstColumn) {
  let occurences = 0;
  for (let secondElement of secondColumn) {
    if (firstElement === secondElement) {
      occurences += 1;
    }
  }
  similarityScore += firstElement * occurences;
}

console.log(similarityScore);

// PART 1
// let totalDifference = 0;

// while (firstColumn.length > 0) {
//   let firstMin = Math.min(...firstColumn);
//   let indexOfFirstMin = firstColumn.indexOf(firstMin);
//   firstColumn.splice(indexOfFirstMin, 1);

//   let secondMin = Math.min(...secondColumn);
//   let indexOfSecondMin = secondColumn.indexOf(secondMin);
//   secondColumn.splice(indexOfSecondMin, 1);

//   let difference = Math.abs(firstMin - secondMin);
//   totalDifference += difference;
// }

// console.log(totalDifference);
